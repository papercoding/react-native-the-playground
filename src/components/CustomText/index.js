import React from 'react';
import {Text} from 'react-native';
import {withTheme} from 'react-native-paper';

function CustomText({children, theme, style}) {
  return <Text style={[style, {color: theme.colors.text}]}>{children}</Text>;
}

export default withTheme(CustomText);
