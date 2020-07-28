/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import App from './src/App';
import './src/configs/ReactotronConfig';

import storybook from './storybook';
import SplashScreen from 'react-native-splash-screen';


SplashScreen.hide();

AppRegistry.registerComponent(appName, () => storybook);
