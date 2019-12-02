import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';

export const RobotoFontFamilyName = {
  RobotoRegular: 'Roboto-Regular',
  RobotoMedium: 'Roboto-Medium',
  RobotoMediumItalic: 'Roboto-MediumItalic',
  RobotoThin: 'Roboto-Thin',
  RobotoThinItalic: 'Roboto-ThinItalic',
  RobotoLight: 'Roboto-Light',
  RobotoLightItalic: 'Roboto-LightItalic',
  RobotoItalic: 'Roboto-Italic',
  RobotoBold: 'Roboto-Bold',
  RobotoBoldItalic: 'Roboto-BoldItalic',
  RobotoBlack: 'Roboto-Black',
  RobotoBlackItalic: 'Roboto-BlackItalic',
};

const TextStyles = StyleSheet.create({
  display4: {
    fontFamily: RobotoFontFamilyName.RobotoBold,
    fontSize: scale(112),
    letterSpacing: scale(0.4),
    lineHeight: scale(128),
  },
  display3: {
    fontFamily: RobotoFontFamilyName.RobotoRegular,
    fontSize: scale(56),
    letterSpacing: scale(0.4),
    lineHeight: scale(64),
  },
  display2: {
    fontFamily: RobotoFontFamilyName.RobotoRegular,
    fontSize: scale(45),
    letterSpacing: scale(0.4),
    lineHeight: scale(52),
  },
  display1: {
    fontFamily: RobotoFontFamilyName.RobotoRegular,
    fontSize: scale(34),
    letterSpacing: scale(0.4),
    lineHeight: scale(40),
  },
  headline: {
    fontFamily: RobotoFontFamilyName.RobotoBold,
    fontSize: scale(24),
    letterSpacing: scale(0.4),
    lineHeight: scale(32),
  },
  title: {
    fontFamily: RobotoFontFamilyName.RobotoRegular,
    fontSize: scale(20),
    letterSpacing: scale(0.4),
    lineHeight: scale(28),
  },
  subheading: {
    fontFamily: RobotoFontFamilyName.RobotoRegular,
    fontSize: scale(16),
    letterSpacing: scale(0.4),
    lineHeight: scale(24),
  },
  body2: {
    fontFamily: RobotoFontFamilyName.RobotoBold,
    fontSize: scale(14),
    letterSpacing: scale(0.4),
    lineHeight: scale(24),
  },
  body1: {
    fontFamily: RobotoFontFamilyName.RobotoRegular,
    fontSize: scale(14),
    letterSpacing: scale(0.4),
    lineHeight: scale(20),
  },
  caption: {
    fontFamily: RobotoFontFamilyName.RobotoRegular,
    fontSize: scale(12),
    letterSpacing: scale(0.4),
    lineHeight: scale(16),
  },
  button: {
    fontFamily: RobotoFontFamilyName.RobotoRegular,
    fontSize: scale(14),
    letterSpacing: scale(0.4),
    lineHeight: scale(20),
  },
  normalText: {
    fontFamily: RobotoFontFamilyName.RobotoRegular,
    fontSize: scale(11),
    letterSpacing: scale(0.4),
    lineHeight: scale(15),
  },
});

export default TextStyles;
