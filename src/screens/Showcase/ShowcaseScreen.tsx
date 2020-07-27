import React from 'react';
import {FastImageSource} from 'react-native-fast-image';
import {FlatList} from 'react-native-gesture-handler';
import {NavigationStackProp} from 'react-navigation-stack';
import Container from '../../components/Container';
import LinearGradientCard from '../../components/LinearGradientCard/LinearGradientCard';
import {SCREEN_STACK_ROUTE_NAME} from '../../navigation/constants';

export interface ShowcaseDataItemProps {
  title: string;
  imageSource: number | FastImageSource;
  colors: Array<any>;
}

interface FlatListItemProps {
  item: ShowcaseDataItemProps;
  index: number;
}

const DATA: Array<ShowcaseDataItemProps> = [
  {
    title: 'Spotify Animated Header',
    imageSource: require('../../assets/images/ic_nutritionist.png'),
    colors: ['#FC5C7D', '#6A82FB'],
  },
  {
    title: 'Accordion',
    imageSource: require('../../assets/images/ic_desk_lamp.png'),
    colors: ['#00b09b', '#96c93d'],
  },
];

interface ShowcaseScreenProps {
  navigation: NavigationStackProp;
}

const ShowcaseScreen: React.FC<ShowcaseScreenProps> = ({navigation}) => {
  const onItemPress = (item: ShowcaseDataItemProps) => {
    navigation.navigate(SCREEN_STACK_ROUTE_NAME.ShowcaseWrapper, {item: {...item}});
  };

  const renderItem = ({item, index}: FlatListItemProps) => (
    <LinearGradientCard
      key={`${item.title}-${index}`}
      containerStyle={{marginLeft: 12, marginRight: 12, marginTop: 14}}
      title={item.title}
      colors={item.colors}
      cardImage={item.imageSource}
      onPress={() => {
        onItemPress(item);
      }}
    />
  );

  return (
    <Container>
      <FlatList
        data={[...DATA]}
        renderItem={renderItem}
        keyExtractor={(item, index) => `${item.title}-${index}`}
      />
    </Container>
  );
};

export default ShowcaseScreen;
