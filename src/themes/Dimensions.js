import {Dimensions} from 'react-native';
import {scale} from 'react-native-size-matters';

export const dimensions = Dimensions.get('window');
export const SCREEN_WIDTH = dimensions.width;
export const SCREEN_HEIGHT = dimensions.height;
export const Spacing = {
  tiny: scale(5),
  mini: scale(10),
  small: scale(15),
  normal: scale(20),
  big: scale(36),
};
