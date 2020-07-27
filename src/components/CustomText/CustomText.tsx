import React from 'react';
import {Text} from 'react-native';
import {withTheme} from 'react-native-paper';
import {IThemeMode} from '../../themes/Colors/types';

interface ICustomText {
  children: any;
  theme: IThemeMode;
  style?: any;
}

function ThemedText({children, theme, style}: ICustomText) {
  return <Text style={[{color: theme.colors.text}, style]}>{children}</Text>;
}

export default withTheme(ThemedText);
