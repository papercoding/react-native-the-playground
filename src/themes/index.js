import {Platform, Dimensions, StyleSheet} from 'react-native';
import {DefaultTheme, shadow} from 'react-native-paper';
import {scale} from 'react-native-size-matters';

export const DarkMode = {
  ...DefaultTheme,
  dark: true,
  colors: {
    ...DefaultTheme.colors,
    primary: '#B28BF5',
    onPrimary: '#BB94F8',
    secondary: '#62D7C6',
    onSecondary: '#121212',
    background: '#121212',
    onBackground: '#FFFFFF',
    surface: '#323232',
    onSurface: '#FFFFFF',
    disabled: '',
    placeholder: '',
    backdrop: '',
    bottomTabBar: '#323232',
    activeBottomTabBar: '#FFFFFF',
    inactiveBottomTabBar: '#6b778d',
    text: '#FFFFFF',
  },
};

export const LightMode = {
  ...DefaultTheme,
  dark: false,
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
    inactiveBottomTabBar: '#B18EF2',
    text: '#000000',
  },
};

export const spacing = {
  tiny: scale(5),
  mini: scale(10),
  small: scale(15),
  normal: scale(20),
  big: scale(36),
};

/**
 * Get consistent shadows between iOS and Android
 * @see https://stenbeck.io/styling-shadows-in-react-native-ios-and-android/
 */
export function elevationShadowStyle(elevation, position = 'bottom') {
  return {
    elevation,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: scale((position === 'bottom' ? 1 : -1) * elevation),
    },
    shadowOpacity: 0.3,
    shadowRadius: scale(0.8 * elevation),
  };
}

// const logo = require('./assets/logo.jpg');
// const logoLight = require('./assets/logoLight.png');

export const dimensions = Dimensions.get('window');

export const SCREEN_WIDTH = dimensions.width;
export const SCREEN_HEIGHT = dimensions.height;

export const commonStyles = StyleSheet.create({
  fullScreen: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
});

export const typography = {
  primary: Platform.select({
    ios: 'Gotham Rounded',
    android: 'gothamrounded',
  }),
  secondary: Platform.select({
    ios: 'Gotham Rounded',
    android: 'gothamrounded',
  }),
};
