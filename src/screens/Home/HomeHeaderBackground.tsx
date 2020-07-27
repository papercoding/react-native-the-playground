import React from 'react';
import {Animated, StyleSheet} from 'react-native';
import {withTheme} from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';

import {SCREEN_WIDTH} from '../../themes';

const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient);

function HomeHeaderBackground(props) {
  const {theme, style} = props;
  const {colors} = theme;
  return (
    <AnimatedLinearGradient
      start={{x: 0.0, y: 0.25}}
      end={{x: 0.5, y: 1.0}}
      colors={[colors.primaryLight, colors.primary, colors.primaryDark]}
      style={[styles.container, style]}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: -64,
    left: -64,
    width: SCREEN_WIDTH / 1.133,
    height: SCREEN_WIDTH / 1.133,
    transform: [{rotate: '30deg'}],
    borderRadius: 64,
  },
});

export default withTheme(HomeHeaderBackground);
