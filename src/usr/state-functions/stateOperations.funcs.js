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
      dispatch('newValueInState', {data: newState[key]});
    }
  });
};
