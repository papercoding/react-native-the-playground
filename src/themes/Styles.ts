import {scale} from 'react-native-size-matters';
import {StyleSheet} from 'react-native';

/**
 * Get consistent shadows between iOS and Android
 * @see https://stenbeck.io/styling-shadows-in-react-native-ios-and-android/
 */
export function elevationShadowStyle(elevation, position = 'bottom') {
  return {
    elevation,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: scale((position === 'bottom' ? 1 : -1) * elevation),
    },
    shadowOpacity: 0.3,
    shadowRadius: scale(0.8 * elevation),
  };
}

export const commonStyles = StyleSheet.create({
  fullScreen: {
    flex: 1,
  },
});
