import React from 'react';
import {View} from 'react-native';
import {scale} from 'react-native-size-matters';
import ThemedText from '../../components/CustomText/CustomText';
import TextStyles from '../../themes/TextStyles';

const HomeHeaderTitle = props => {
  const {style} = props;
  return (
    <View style={[style]}>
      <ThemedText style={[TextStyles.headline, {color: 'white'}]}>{'The Playground'}</ThemedText>
      <ThemedText style={[TextStyles.subheading, {color: 'white', marginTop: scale(4)}]}>
        {'Have fun with React Native'}
      </ThemedText>
    </View>
  );
};

export default HomeHeaderTitle;
