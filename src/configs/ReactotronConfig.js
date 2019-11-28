import Reactotron from 'reactotron-react-native';
import {reactotronRedux as reduxPlugin} from 'reactotron-redux';
import DeviceInfo from 'react-native-device-info';
import {NativeModules} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import {appConfigs} from './Configs';

console.disableYellowBox = true;

Reactotron.setAsyncStorageHandler(AsyncStorage);

if (DeviceInfo.isEmulatorSync()) {
  Reactotron.configure({
    name: appConfigs.appName,
  });
} else {
  // Config for real device
  const host = NativeModules.SourceCode.scriptURL.split('://')[1].split(':')[0];
  Reactotron.configure({
    name: appConfigs.appName,
    host: host ? host : '192.168.0.116',
  });
}

Reactotron.useReactNative({
  asyncStorage: {ignore: ['secret']}, // ignore key
});
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
