import AsyncStorage from '@react-native-community/async-storage';
import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import Reactotron from 'reactotron-react-native';
import {combineReducers} from 'redux';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
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

// An old way to config redux store
// const store = createStore(
//   persistedReducer,
//   compose(
//     applyMiddleware(thunk),
//     Reactotron.createEnhancer(),
//   ),
// );

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  enhancers: [Reactotron.createEnhancer()],
});

const persistor = persistStore(store);

export {store, persistor};
