import get from 'lodash/get';
import React from 'react';
import { Redirect, Router, Switch, Route } from 'react-router-dom';

import PageComposition from '../PageComposition';
import WarningComponent from '../WarningComponent';

const PageRouter = (props) => {
  const { routes, pages, instances, userComponents, history, actionSequences } = props;
  if (!routes || routes.length === 0) {
    return (<WarningComponent message="Application does not have pages."/>);
  }
  const noMatchRoute = routes.find(r => r.pageName === 'noMatch');
  return (
    <Router history={history}>
      <Switch>
        {routes.map(route =>
          <Route
            key={`route_${route.path}`}
            exact
            path={route.path}
            render={
              () =>
                <PageComposition
                  key={`page_${route.pageName}`}
                  userComponents={userComponents}
                  pageProps={get(pages, route.pageName, {})}
                  instances={instances}
                  actionSequences={actionSequences}
                  routePath={route.path}
                />
            }
          />
        )}
        {noMatchRoute
          && (
            <Route
              render={
                () =>
                  <PageComposition
                    key={`page_${noMatchRoute.pageName}`}
                    userComponents={userComponents}
                    pageProps={get(pages, noMatchRoute.pageName, {})}
                    instances={instances}
                    actionSequences={actionSequences}
                    routePath={noMatchRoute.path}
                  />
              }
            />
          )
        }
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default PageRouter;