import React from 'react';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import { configureStore } from './store/store';
import { clearActionsCache } from './store/actions';
import { createActionSequences } from './store/sequences';
import { createInitialState } from './store/state';
import { getSchema } from './store/storage';

import PageRouter from './components/PageRouter';
import StartWrapper from './components/StartWrapper';
import WarningComponent from './components/WarningComponent';
import DemoAppConfig from './components/DemoAppConfig';

let constants;
let ComponentComposer;
let PageComposer;
if (process.env.NODE_ENV !== 'production') {
  constants = require('./commons/constants');
  ComponentComposer = require('./components/ComponentComposer/ComponentComposer').default;
  PageComposer = require('./components/PageComposer/PageComposer').default;
}

const initStore = (pages, name, version) => {
  const initialState = createInitialState(pages);
  const history = createBrowserHistory();
  const store = configureStore(initialState, { history }, { name, version });

  if (process.env.NODE_ENV !== 'production') {
    window.__sendFrameworkMessage = (message) => {
      if (message) {
        window.parent.postMessage(message, '*');
      }
    };
    // Listen for changes to the current location.
    history.listen((location) => {
      // location is an object like window.location
      window.__sendFrameworkMessage({
        type: constants.FRAMEWORK_MESSAGE_CHANGE_URL,
        payload: `${location.pathname}${location.search}${location.hash}`,
      });
    });
  }

  return {store, history};
};

class Application extends React.Component {

  constructor (props, context) {
    super(props, context);
    this.state = {
      isLoadingFromStorage: true,
    };
  }

  componentDidMount () {
    if (process.env.NODE_ENV !== 'production') {
      window.addEventListener("message", this.handleReceiveMessage, false);
    }
    const {schema} = this.props;
    if (schema && schema.appMode === 'demo') {
      // load from storage

      getSchema()
        .then(schemaFromStorage => {
          if (schemaFromStorage) {
            this.routesFromStorage = schemaFromStorage.routes;
            this.pagesFromStorage = schemaFromStorage.pages;
            this.flowsFromStorage = schemaFromStorage.flows;
          }
          this.setState({isLoadingFromStorage: false});
        })
        .catch((error) => {
          console.error(error.message);
          this.setState({isLoadingFromStorage: false});
        });
    } else {
      this.setState({isLoadingFromStorage: false});
    }
  }

  componentWillUnmount () {
    if (process.env.NODE_ENV !== 'production') {
      window.removeEventListener("message", this.handleReceiveMessage);
    }
  }

  handleReceiveMessage = (event) => {
    if (process.env.NODE_ENV !== 'production') {
      const {data: message} = event;
      if (message) {
        const { type } = message;
        if (type === constants.WEBCODESK_MESSAGE_START_LISTENING_TO_FRAMEWORK) {
          window.__webcodeskIsListeningToFramework = true;
          setTimeout(() => {
            window.__sendFrameworkMessage({
              type: constants.FRAMEWORK_MESSAGE_INIT_DEBUG,
              payload: {
                actionSequences: this.actionSequences
              },
            });
          }, 0);
        } else if (type === constants.WEBCODESK_MESSAGE_STOP_LISTENING_TO_FRAMEWORK) {
          window.__webcodeskIsListeningToFramework = false;
        }
      }
    }
  };

  render () {
    const { userComponents } = this.props;
    const href = window.location.href;
    if (process.env.NODE_ENV !== 'production') {
      if (href.indexOf('/webcodesk__component_view') > 0) {
        return (
          <ComponentComposer userComponents={userComponents} />
        );
      } else if(href.indexOf('/webcodesk__page_composer') > 0) {
        return (
          <PageComposer userComponents={userComponents} />
        )
      }
    }
    if(href.indexOf('/webcodesk__demo_app_config') > 0) {
      return (
        <DemoAppConfig />
      )
    }
    const { schema, userFunctions, name, version } = this.props;
    const { isLoadingFromStorage } = this.state;
    if (isLoadingFromStorage) {
      return null;
    }
    let routes, pages, flows;
    if (schema) {
      routes = this.routesFromStorage || schema.routes;
      pages = this.pagesFromStorage || schema.pages;
      flows = this.flowsFromStorage || schema.flows;
    }
    const { store, history } = initStore(pages, name, version);
    if (!store) {
      return (
        <WarningComponent message="Redux store is not initialized." />
      );
    }
    window.__applicationBrowserHistory = history;
    clearActionsCache();
    const actionSequences = createActionSequences(flows, userFunctions);
    // store action sequences and components properties in case we have to send them for debug
    this.actionSequences = actionSequences;
    return (
      <Provider store={store}>
        <StartWrapper
          actionSequences={actionSequences}
          store={store}
        >
          <PageRouter
            history={history}
            routes={routes}
            pages={pages}
            userComponents={userComponents}
            actionSequences={actionSequences}
          />
        </StartWrapper>
      </Provider>
    );
  }
}

export default Application;