/**
 * @format
 */

import './src/configs/ReactotronConfig';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import App from './src/screens/App';

AppRegistry.registerComponent(appName, () => App);
