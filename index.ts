/**
 * @format
 */

import './src/configs/ReactotronConfig';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import App from './src/App';
import Config from 'react-native-config';

if (__DEV__) {
  console.tron.log(Config.ENV);
}

AppRegistry.registerComponent(appName, () => App);
