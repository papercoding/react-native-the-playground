import React from 'react';
import {View} from 'react-native';

import CustomText from '../../components/CustomText';
import TextStyles from '../../themes/TextStyles';
import {scale} from 'react-native-size-matters';

const HomeHeaderTitle = props => {
  const {style} = props;
  return (
    <View style={[style]}>
      <CustomText style={[TextStyles.headline, {color: 'white'}]}>{'The Playground'}</CustomText>
      <CustomText style={[TextStyles.subheading, {color: 'white', marginTop: scale(4)}]}>
        {'Have fun with React Native'}
      </CustomText>
    </View>
  );
};

export default HomeHeaderTitle;
