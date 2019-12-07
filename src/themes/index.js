import {Platform, Dimensions, StyleSheet} from 'react-native';
import {DefaultTheme, shadow} from 'react-native-paper';
import {scale} from 'react-native-size-matters';

export const DarkMode = {
  ...DefaultTheme,
  dark: true,
  colors: {
    // primary
    primary: '#ffa259',
    primaryLight: '#ffd488',
    primaryDark: '#c8732c',
    onPrimary: '#ffffff',
    // secondary
    secondary: '#62D7C6',
    onSecondary: '#212121',
    // background
    background: '#313131',
    onBackground: '#ffffff',
    // surface
    surface: '#323232',
    onSurface: '#ffffff',
    // bottom tab bar
    bottomTabBar: '#525252',
    activeBottomTabBar: '#ffa259',
    inactiveBottomTabBar: '#ffffff',
    // header bar
    headerBar: '#525252',
    headerBarTintColor: '#ffffff',
    // card
    cardColor: '',
    // button
    buttonColor: '',
    // dialog
    dialogBackgroundColor: '',
    // others
    disabled: '',
    placeholder: '',
    backdrop: '',
    dividerColor: '',
    focusColor: '',
    hoverColor: '',
    highlightColor: '',
    splashColor: '',
    errorColor: '',
    defaultStatusBar: '#000000',
    text: '#ffffff',
  },
};

export const LightMode = {
  ...DefaultTheme,
  dark: false,
  colors: {
    // primary
    primary: '#ffa259',
    primaryLight: '#ffd488',
    primaryDark: '#c8732c',
    onPrimary: '#FFFFFF',
    // secondary
    secondary: '#62D7C6',
    onSecondary: '#000000',
    // background
    background: '#6c5b7b',
    onBackground: '#000000',
    // surface
    surface: '#FFFFFF',
    onSurface: '#000000',
    // bottom tab bar
    bottomTabBar: '#ffa259',
    activeBottomTabBar: '#FFFFFF',
    inactiveBottomTabBar: '#c8732c',
    // header bar
    headerBar: '#ffa259',
    headerBarTintColor: '#ffffff',
    // others
    disabled: '',
    placeholder: '',
    backdrop: '',
    defaultStatusBar: '#c8732c',
    text: '#121212',
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
