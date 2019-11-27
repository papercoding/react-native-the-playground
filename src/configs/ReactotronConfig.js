import Reactotron from 'reactotron-react-native';
import {reactotronRedux as reduxPlugin} from 'reactotron-redux';
import DeviceInfo from 'react-native-device-info';
import {NativeModules} from 'react-native';

import {APP_NAME} from '../constants';
import {appConfigs} from './Configs';

if (DeviceInfo.isEmulatorSync()) {
  Reactotron.configure({
    name: APP_NAME,
  });
} else {
  // Config for real device
  const host = NativeModules.SourceCode.scriptURL.split('://')[1].split(':')[0];
  Reactotron.configure({
    name: APP_NAME,
    host: host ? host : '192.168.0.116',
    port: '9090',
  });
}

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
