import React, {PureComponent} from 'react';
import {View} from 'react-native';
import {withTheme} from 'react-native-paper';
import {commonStyles} from '../../themes';

class Container extends PureComponent {
  render() {
    const {containerStyle, children, theme} = this.props;
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
  }
}

export default withTheme(Container);
