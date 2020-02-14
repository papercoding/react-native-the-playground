import React from 'react';
import {View, Text, StyleSheet, Platform} from 'react-native';
import TouchableBounce from 'react-native/Libraries/Components/Touchable/TouchableBounce';
import {ParallaxImage} from 'react-native-snap-carousel';

import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../../themes';
import {Colors} from 'react-native-paper';

export interface ParallaxSliderItemData {
  title: string;
  subtitle: string;
  illustration: string;
}

interface ParallaxSliderItemProps {
  data: ParallaxSliderItemData;
  even: boolean;
  parallax: boolean;
  parallaxProps: object;
}

const IS_IOS = Platform.OS === 'ios';

function wp(percentage: number): number {
  const value = (percentage * SCREEN_WIDTH) / 100;
  return Math.round(value);
}

const slideHeight = SCREEN_HEIGHT * 0.36;
const slideWidth = wp(75); // 75% of screen width
const itemHorizontalMargin = wp(2);

export const sliderWidth = SCREEN_WIDTH;
export const itemWidth = slideWidth + itemHorizontalMargin * 2;

const entryBorderRadius = 8;

const styles = StyleSheet.create({
  container: {
    width: itemWidth,
    height: slideHeight,
    paddingHorizontal: itemHorizontalMargin,
    paddingBottom: 18,
  },
  shadow: {
    position: 'absolute',
    top: 0,
    left: itemHorizontalMargin,
    right: itemHorizontalMargin,
    bottom: 18,
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: {width: 0, height: 10},
    shadowRadius: 10,
    borderRadius: entryBorderRadius,
  },
  imageContainer: {
    flex: 1,
    marginBottom: IS_IOS ? 0 : -1, // Prevent a random Android rendering issue
    backgroundColor: 'white',
    borderTopLeftRadius: entryBorderRadius,
    borderTopRightRadius: entryBorderRadius,
  },
  imageContainerEven: {
    backgroundColor: Colors.black,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
    borderRadius: IS_IOS ? entryBorderRadius : 0,
    borderTopLeftRadius: entryBorderRadius,
    borderTopRightRadius: entryBorderRadius,
  },
  // image's border radius is buggy on iOS; let's hack it!
  radiusMask: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: entryBorderRadius,
    backgroundColor: 'white',
  },
  radiusMaskEven: {
    backgroundColor: Colors.black,
  },
  textContainer: {
    justifyContent: 'center',
    paddingTop: 20 - entryBorderRadius,
    paddingBottom: 20,
    paddingHorizontal: 16,
    backgroundColor: 'white',
    borderBottomLeftRadius: entryBorderRadius,
    borderBottomRightRadius: entryBorderRadius,
  },
  textContainerEven: {
    backgroundColor: Colors.black,
  },
  title: {
    color: Colors.black,
    fontSize: 13,
    fontWeight: 'bold',
    letterSpacing: 0.5,
  },
  titleEven: {
    color: 'white',
  },
  subtitle: {
    marginTop: 6,
    color: Colors.grey500,
    fontSize: 12,
    fontStyle: 'italic',
  },
  subtitleEven: {
    color: 'rgba(255, 255, 255, 0.7)',
  },
});

const ParallaxSliderItem = ({data, even, parallaxProps}: ParallaxSliderItemProps) => {
  const {illustration, title, subtitle} = data;

  const image = (
    <ParallaxImage
      source={{uri: illustration}}
      containerStyle={[styles.imageContainer, even ? styles.imageContainerEven : {}]}
      style={styles.image}
      parallaxFactor={0.35}
      showSpinner={true}
      spinnerColor={even ? 'rgba(255, 255, 255, 0.4)' : 'rgba(0, 0, 0, 0.25)'}
      {...parallaxProps}
    />
  );

  const uppercaseTitle = title ? (
    <Text style={[styles.title, even ? styles.titleEven : {}]} numberOfLines={2}>
      {title.toUpperCase()}
    </Text>
  ) : (
    false
  );

  return (
    <TouchableBounce activeOpacity={1} style={styles.container}>
      <View style={styles.shadow} />
      <View style={[styles.imageContainer, even ? styles.imageContainerEven : {}]}>
        {image}
        <View style={[styles.radiusMask, even ? styles.radiusMaskEven : {}]} />
      </View>
      <View style={[styles.textContainer, even ? styles.textContainerEven : {}]}>
        {uppercaseTitle}
        <Text style={[styles.subtitle, even ? styles.subtitleEven : {}]} numberOfLines={2}>
          {subtitle}
        </Text>
      </View>
    </TouchableBounce>
  );
};

export default ParallaxSliderItem;
