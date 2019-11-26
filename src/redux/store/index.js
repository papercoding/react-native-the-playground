import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import Reactotron from 'reactotron-react-native';

function counter(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}

// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.
let store = createStore(counter, Reactotron.createEnhancer());

store.dispatch({type: 'INCREMENT'});
// 1
store.dispatch({type: 'INCREMENT'});
// 2
store.dispatch({type: 'DECREMENT'});
// 1

export default store;
