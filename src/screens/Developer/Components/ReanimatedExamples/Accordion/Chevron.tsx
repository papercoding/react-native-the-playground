import React from 'react';
import {StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Animated from 'react-native-reanimated';
import {bInterpolate, bInterpolateColor} from 'react-native-redash';
import {scale} from 'react-native-size-matters';

const size = scale(30);
const styles = StyleSheet.create({
  container: {
    height: size,
    width: size,
    borderRadius: size / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

interface ChevronProps {
  transition: Animated.Node<number>;
}

export default ({transition}: ChevronProps) => {
  const rotateZ = bInterpolate(transition, Math.PI, 0);
  const backgroundColor = bInterpolateColor(transition, 'black', 'tomato') as Animated.Node<number>;
  return (
    <Animated.View style={[styles.container, {transform: [{rotateZ}], backgroundColor}]}>
      <Icon name="chevron-down" color="white" size={scale(24)} />
    </Animated.View>
  );
};
