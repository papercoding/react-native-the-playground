const BaseMode = {
  colors: {
    primary: '#ffa259',
    primaryLight: '#ffd488',
    primaryDark: '#c8732c',
    onPrimary: '#ffffff',
    // secondary
    secondary: '#62D7C6',
    onSecondary: '#212121',
    baseDark: '#313131',
    baseDark2: '#525252',
    baseLight: '#e0e0e0',
  },
};

export function getThemeMode(theme) {
  return {
    dark: theme === 'dark' ? true : false,
    colors: {
      // primary
      primary: BaseMode.colors.primary,
      primaryLight: BaseMode.colors.primaryLight,
      primaryDark: BaseMode.colors.primaryDark,
      onPrimary: BaseMode.colors.onPrimary,
      // secondary
      secondary: BaseMode.colors.secondary,
      onSecondary: BaseMode.colors.onSecondary,
      // background
      background: theme === 'dark' ? BaseMode.colors.baseDark : BaseMode.colors.baseLight,
      onBackground: theme === 'dark' ? '#ffffff' : '#000000',
      // surface
      surface: theme === 'dark' ? '#323232' : '#FFFFFF',
      onSurface: theme === 'dark' ? '#ffffff' : '#000000',
      // bottom tab bar
      bottomTabBar: theme === 'dark' ? BaseMode.colors.baseDark2 : '#ffa259',
      activeBottomTabBar: theme === 'dark' ? '#ffa259' : '#FFFFFF',
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
