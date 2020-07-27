import {Theme} from 'react-native-paper';

export type IThemeMode = Theme & {
  colors: {
    primaryLight: string;
    primaryDark: string;
    onPrimary: string;
    secondary: string;
    onSecondary: string;
    bottomBar: string;
    bottomTabBar: string;
    activeBottomTabBar: string;
    inactiveBottomTabBar: string;
    headerBar: string;
    headerBarTintColor: string;
    // card
    cardColor: string;
    // button
    buttonColor: string;
    // dialog
    dialogBackgroundColor: string;
    // others
    disabled: string;
    placeholder: string;
    backdrop: string;
    dividerColor: string;
    focusColor: string;
    hoverColor: string;
    highlightColor: string;
    splashColor: string;
    errorColor: string;
    defaultStatusBar: string;
    text: string;
  };
};
