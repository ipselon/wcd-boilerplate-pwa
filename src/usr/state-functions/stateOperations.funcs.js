import cloneDeep from 'lodash/cloneDeep';
import { createStore } from 'redux';

const initialState = {};
const stateChangeCounters = {};
let store;

function reducer(state = initialState, action) {
  const {type: stateKey, data} = action;
  if (stateKey) {
    stateChangeCounters[stateKey] = stateChangeCounters[stateKey] > 0
      ? stateChangeCounters[stateKey] + 1
      : 1;
    return { ...state, ...{ [stateKey]: { ...state[stateKey], ...data } } };
  }
  return state;
}

function getStore() {
  if (!store) {
    store = createStore(reducer);
  }
  return store;
}

/**
 * Put the object to global state under some key
 */
// @param {PutIntoStateTypes from ./stateOperations.props.js}
export const putIntoState = ({key, data}) => dispatch => {
  getStore().dispatch({type: key, data});
};

// @param {AddStateListenerArgTypes from ./stateOperations.props.js}
export const addStateListener = ({key}) => dispatch => {
  let listenerChangeCounter = 0;
  getStore().subscribe(() => {
    const stateChangeCounter = stateChangeCounters[key];
    if (stateChangeCounter > listenerChangeCounter) {
      const newState = getStore().getState();
      // @param {AddStateListenerDispatchTypes from ./stateOperations.props.js}
      dispatch('newDataInState', {data: newState[key]});
    }
  });
};

// @param {GetFromStateArgTypes from ./stateOperations.props.js}
export const getFromState = ({keys, extraData}) => dispatch => {
  const newState = getStore().getState();
  // @param {GetFromStateDispatchTypes from ./stateOperations.props.js}
  const data = {};
  if (keys && keys.length > 0) {
    keys.forEach(key => {
      data[key] = cloneDeep(newState[key]);
    });
  }
  // @param {GetFromStateDispatchTypes from ./stateOperations.props.js}
  dispatch('dataInStateWithExtraData', {data, extraData});
};
