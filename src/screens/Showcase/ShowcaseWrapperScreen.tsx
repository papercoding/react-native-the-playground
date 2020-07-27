import React, {useState} from 'react';
import {NavigationStackProp} from 'react-navigation-stack';
import Container from '../../components/Container';
import ThemedText from '../../components/CustomText/CustomText';
import {ShowcaseDataItemProps} from './ShowcaseScreen';

interface ScreenProps {
  navigation: NavigationStackProp;
}

const ShowcaseWrapperScreen: React.FC<ScreenProps> = ({navigation}) => {
  const [item] = useState<ShowcaseDataItemProps>({...navigation.getParam('item')});

  return (
    <Container>
      <ThemedText>{item.title}</ThemedText>
    </Container>
  );
};

export default ShowcaseWrapperScreen;
