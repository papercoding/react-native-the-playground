import React from 'react';
import {ImageStyle, StyleProp, StyleSheet, Text, TextStyle, View, ViewStyle} from 'react-native';
import FastImage, {FastImageSource} from 'react-native-fast-image';
import {scale} from 'react-native-size-matters';
import {Spacing} from '../../themes';
import TextStyles from '../../themes/TextStyles';

interface HorizonCard {
  containerStyle?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
  imageStyle?: StyleProp<ImageStyle>;
  title: string;
  imageSource: number | FastImageSource;
}

interface Styles {
  container: ViewStyle;
  title: TextStyle;
  image: ImageStyle;
}

const HorizonCard: React.FC<HorizonCard> = ({
  containerStyle,
  titleStyle,
  imageStyle,
  title,
  imageSource,
}) => {
  return (
    <View style={[style.container, containerStyle]}>
      <FastImage style={[style.image, imageStyle]} resizeMode="contain" source={imageSource} />
      <Text style={[style.title, titleStyle]}>{title}</Text>
    </View>
  );
};

const style = StyleSheet.create<Styles>({
  container: {
    flexDirection: 'row',
    padding: scale(Spacing.normal),
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    ...TextStyles.body1,
  },
  image: {
    aspectRatio: 1 / 1,
    width: scale(64),
    height: undefined,
  },
});

export default HorizonCard;
