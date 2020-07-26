import React, {useState} from 'react';
import Container from '../../components/Container';
import CustomText from '../../components/CustomText';
import {ShowcaseDataItemProps} from './ShowcaseScreen';

interface ScreenProps {
  navigation: any;
  route: any;
}

const ShowcaseWrapperScreen: React.FC<ScreenProps> = ({navigation}) => {
  const [item] = useState<ShowcaseDataItemProps>({...navigation.getParam('item')});

  return (
    <Container>
      <CustomText>{item.title}</CustomText>
    </Container>
  );
};

export default ShowcaseWrapperScreen;
