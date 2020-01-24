import {DefaultTheme} from 'react-native-paper';

/**
 A theme usually contains the following properties:
    dark (boolean): whether this is a dark theme or light theme.
    mode ('adaptive' | 'exact'): color mode for dark theme (See Dark Theme).
    roundness (number): roundness of common elements, such as buttons.
    colors (object): various colors used throughout different elements.
        primary - primary color for your app, usually your brand color.
        accent - secondary color for your app which complements the primary color.
        background - background color for pages, such as lists.
        surface - background color for elements containing content, such as cards.
        text - text color for content.
        disabled - color for disabled elements.
        placeholder - color for placeholder text, such as input placeholder.
        backdrop - color for backdrops of various components such as modals.
    fonts (object): various fonts used throughout different elements.
        regular
        medium
        light
        thin
When creating a custom theme, you will need to provide all of these properties.
 */

const BaseMode = {
  colors: {
    ...DefaultTheme.colors,
    primary: '#ffa259',
    primaryLight: '#ffd488',
    primaryDark: '#c8732c',
    onPrimary: '#ffffff',
    // secondary
    secondary: '#62D7C6',
    onSecondary: '#212121',
    accent: '#f1c40f',
    baseDark: '#313131',
    baseDark2: '#525252',
    baseLight: '#e0e0e0',
  },
};

export function getThemeMode(theme) {
  return {
    ...DefaultTheme,
    dark: theme === 'dark' ? true : false,
    roundness: 2,
    colors: {
      ...BaseMode.colors,
      // primary
      primary: BaseMode.colors.primary,
      primaryLight: BaseMode.colors.primaryLight,
      primaryDark: BaseMode.colors.primaryDark,
      onPrimary: BaseMode.colors.onPrimary,
      // secondary
      secondary: BaseMode.colors.secondary,
      onSecondary: BaseMode.colors.onSecondary,
      // accent
      accent: BaseMode.colors.accent,
      // background
      background: theme === 'dark' ? BaseMode.colors.baseDark : BaseMode.colors.baseLight,
      onBackground: theme === 'dark' ? '#ffffff' : '#000000',
      // surface
      surface: theme === 'dark' ? '#323232' : '#FFFFFF',
      onSurface: theme === 'dark' ? '#ffffff' : '#000000',
      // bottom tab bar
      bottomTabBar: theme === 'dark' ? BaseMode.colors.baseDark2 : '#ffa259',
      activeBottomTabBar: theme === 'dark' ? BaseMode.colors.primary : '#FFFFFF',
      inactiveBottomTabBar: theme === 'dark' ? '#ffffff' : '#c8732c',
      // header bar
      headerBar: theme === 'dark' ? BaseMode.colors.baseDark2 : '#ffa259',
      headerBarTintColor: theme === 'dark' ? '#ffffff' : '#ffffff',
      // card
      cardColor: theme === 'dark' ? BaseMode.colors.baseDark2 : '#FFFFFF',
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
      defaultStatusBar: theme === 'dark' ? '#000000' : '#c8732c',
      text: theme === 'dark' ? '#ffffff' : '#121212',
    },
  };
}
