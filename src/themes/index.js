import {Platform, Dimensions} from 'react-native';
import {DefaultTheme} from 'react-native-paper';

export const DarkMode = {
  ...DefaultTheme,
  dark: false,
  colors: {
    ...DefaultTheme.colors,
    primary: '#B28BF5',
    onPrimary: '#BB94F8',
    secondary: '#62D7C6',
    onSecondary: '#121212',
    background: '#121212',
    onBackground: '',
    surface: '#323232',
    onSurface: '#FFFFFF',
    disabled: '',
    placeholder: '',
    backdrop: '',
    bottomTabBar: '#323232',
    activeBottomTabBar: '#FFFFFF',
    inactiveBottomTabBar: '#6b778d',
  },
};

export const LightMode = {
  ...DefaultTheme,
  dark: true,
  mode: 'exact',
  colors: {
    ...DefaultTheme.colors,
    primary: '#5723E5',
    onPrimary: '#FFFFFF',
    secondary: '#62D7C6',
    onSecondary: '#000000',
    background: '#FFFFFF',
    onBackground: '#000000',
    surface: '#FFFFFF',
    onSurface: '#000000',
    disabled: '',
    placeholder: '',
    backdrop: '',
    bottomTabBar: '#5723E5',
    activeBottomTabBar: '#FFFFFF',
    inactiveBottomTabBar: '#6b778d',
  },
};

// const logo = require('./assets/logo.jpg');
// const logoLight = require('./assets/logoLight.png');

const dimensions = Dimensions.get('window');

const typography = {
  primary: Platform.select({
    ios: 'Gotham Rounded',
    android: 'gothamrounded',
  }),
  secondary: Platform.select({
    ios: 'Gotham Rounded',
    android: 'gothamrounded',
  }),
};

// export {colors, typography, dimensions, logo, logoLight};
export {typography, dimensions};
