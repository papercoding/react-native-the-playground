import Reactotron from 'reactotron-react-native';
import {reactotronRedux as reduxPlugin} from 'reactotron-redux';

import {APP_NAME} from '../constants';
import {appConfigs} from './Configs';

Reactotron.configure({
  name: APP_NAME,
});
Reactotron.useReactNative();

// add some more plugins for redux & redux-saga
Reactotron.use(reduxPlugin());

if (appConfigs.enableLog) {
  if (appConfigs.reactotron.enable) {
    Reactotron.connect();
    Reactotron.clear();
  }
}

Reactotron.onCustomCommand('test', () =>
  console.tron.log('This is an example'),
);

console.tron = Reactotron;
