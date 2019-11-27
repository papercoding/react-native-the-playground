import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import Reactotron from 'reactotron-react-native';
import * as rootReducer from '../reducers';
import {addTodo, completeTodo} from '../actions';
import {getVisibleTodos} from '../selectors';

const combinedReducer = combineReducers(rootReducer);

let store = createStore(combinedReducer, Reactotron.createEnhancer());

store.subscribe(() => {
  console.tron.log('Store:', store.getState());
  console.tron.log('Test reselect: ', getVisibleTodos(store.getState()));
});

store.dispatch(addTodo('Setup Redux'));
store.dispatch(addTodo('Go to gym at 5:00 PM'));

setTimeout(() => {
  store.dispatch(completeTodo(0));
}, 2000);

export default store;
