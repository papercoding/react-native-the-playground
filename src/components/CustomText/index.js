import React from 'react';
import {Text} from 'react-native';
import {withTheme} from 'react-native-paper';

function CustomText({children, theme, style}) {
  return <Text style={[{color: theme.colors.text}, style]}>{children}</Text>;
}

export default withTheme(CustomText);
