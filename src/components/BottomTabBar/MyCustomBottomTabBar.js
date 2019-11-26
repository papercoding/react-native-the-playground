import * as React from 'react';
import {BottomTabBar} from 'react-navigation-tabs';
import {withTheme} from 'react-native-paper';

function MyCustomBottomTabBar(props) {
  const {colors} = props.theme;
  return (
    <BottomTabBar
      {...props}
      style={{backgroundColor: colors.bottomTabBar}}
      activeTintColor={colors.activeBottomTabBar}
      inactiveTintColor={colors.inactiveBottomTabBar}
    />
  );
}

export default withTheme(MyCustomBottomTabBar);
