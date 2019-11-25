import * as React from 'react';
import {withTheme} from 'react-native-paper';
import {Text, TouchableOpacity} from 'react-native';

function DynamicThemeButton(props) {
  const {colors} = props.theme;
  return (
    <TouchableOpacity style={{padding: 16, backgroundColor: colors.secondary}}>
      <Text style={{color: colors.onSecondary}}>This is a button</Text>
    </TouchableOpacity>
  );
}

export default withTheme(DynamicThemeButton);
