import React from 'react';
import {Animated, StyleSheet} from 'react-native';
import {withTheme} from 'react-native-paper';
import {SCREEN_WIDTH} from '../../themes';

function HomeHeaderBackground(props) {
  const {theme, style} = props;
  return (
    <Animated.View style={[styles.container, {backgroundColor: theme.colors.primary}, style]} />
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
