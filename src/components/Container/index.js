import React from 'react';
import {View} from 'react-native';
import {withTheme} from 'react-native-paper';
import {commonStyles} from '../../themes';

/**
 * Pure View Container with theme using background
 */
const Container = ({containerStyle = {}, children, theme}) => {
  return (
    <View
      style={[
        {
          ...commonStyles.fullScreen,
          backgroundColor: theme.colors.background,
        },
        containerStyle,
      ]}>
      {children}
    </View>
  );
};

export default withTheme(Container);
