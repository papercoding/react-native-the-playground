import React from 'react';
import {GestureResponderEvent} from 'react-native';
import {FastImageSource} from 'react-native-fast-image';
import LinearGradient from 'react-native-linear-gradient';
import TouchableBounce from 'react-native/Libraries/Components/Touchable/TouchableBounce';
import HorizonCard from '../Card/HorizonCard';

interface LinearGradientCardProps {
  cardImage: number | FastImageSource;
  title: string;
  colors: Array<string>;
  onPress?: (event: GestureResponderEvent) => void;
}

const LinearGradientCard: React.FC<LinearGradientCardProps> = ({
  cardImage,
  title,
  colors,
  onPress,
}) => {
  return (
    <TouchableBounce onPress={onPress}>
      <LinearGradient
        end={{x: 0.0, y: 0.25}}
        start={{x: 0.5, y: 1.0}}
        style={{borderRadius: 8}}
        colors={colors}>
        <HorizonCard
          imageSource={cardImage}
          title={title}
          titleStyle={{color: 'white', fontWeight: '600'}}
        />
      </LinearGradient>
    </TouchableBounce>
  );
};

export default LinearGradientCard;
