import React from 'react';
import {Animated} from 'react-native';

import CustomText from '../../components/CustomText';
import TextStyles from '../../themes/TextStyles';
import {scale} from 'react-native-size-matters';

const HomeHeaderTitle = props => {
  const {style} = props;
  return (
    <Animated.View style={[{marginTop: scale(12)}, style]}>
      <CustomText style={[TextStyles.headline, {color: 'white'}]}>{'The Playground'}</CustomText>
      <CustomText style={[TextStyles.subheading, {color: 'white', marginTop: scale(4)}]}>
        {'Have fun with React Native'}
      </CustomText>
    </Animated.View>
  );
};

export default HomeHeaderTitle;
