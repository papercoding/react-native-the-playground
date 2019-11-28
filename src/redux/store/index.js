import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import {persistReducer, persistStore} from 'redux-persist';
import thunk from 'redux-thunk';

import Reactotron from 'reactotron-react-native';
import AsyncStorage from '@react-native-community/async-storage';

import * as rootReducer from '../reducers';

const combinedReducer = combineReducers(rootReducer);
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  // Whitelist (Save specific reducers)
  whitelist: ['todos'],
  // Blacklist (Don't save specific reducers)
  blacklist: [],
};

const persistedReducer = persistReducer(persistConfig, combinedReducer);

let store = createStore(
  persistedReducer,
  compose(applyMiddleware(thunk), Reactotron.createEnhancer()),
);
let persistor = persistStore(store);

store.subscribe(() => {
  console.tron.log('Subscribe Store:', store.getState());
});

export {store, persistor};
