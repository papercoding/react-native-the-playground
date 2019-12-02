import React, {Component} from 'react';
import {StyleSheet, FlatList, Animated} from 'react-native';
import {withTheme} from 'react-native-paper';
import {scale} from 'react-native-size-matters';

import Container from '../../components/Container';
import AppClient from '../../networkings/AppClient';
import HomeHeaderBackground from './HomeHeaderBackground';
import {SafeAreaView} from 'react-navigation';
import HomeHeaderTitle from './HomeHeaderTitle';
import BlurItem from '../../components/BlurItem';
import {LIST_HOME_ITEM} from './data';
import {commonStyles} from '../../themes';

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

class HomeScreen extends Component {
  static navigationOptions = {
    title: 'The Playground',
    header: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      scrollY: new Animated.Value(0.1),
      loading: false,
    };
  }

  handleScrollEvent = () => {};

  onBlurItemPress = index => {};

  renderHomeHeaderBackground = () => {
    const scaleBG = this.state.scrollY.interpolate({
      inputRange: [-200, -100, 0, 1],
      outputRange: [1.2, 1.1, 1, 1],
    });
    return (
      <HomeHeaderBackground
        style={{
          transform: [
            {
              rotate: '30deg',
            },
            {
              scaleX: scaleBG,
            },
            {
              scaleY: scaleBG,
            },
          ],
        }}
      />
    );
  };

  renderHomeHeaderTitle = () => {
    const scaleBG = this.state.scrollY.interpolate({
      inputRange: [-200, -100, 0, 1],
      outputRange: [1.1, 1.05, 1, 1],
    });
    return (
      <HomeHeaderTitle
        style={{
          transform: [
            {
              scaleX: scaleBG,
            },
            {
              scaleY: scaleBG,
            },
          ],
        }}
      />
    );
  };

  renderBlurItem = ({item, index}) => {
    const calculatedMargin = index % 2 === 0 ? {marginRight: scale(8)} : {marginLeft: scale(8)};
    return (
      <BlurItem
        containerStyle={calculatedMargin}
        item={item}
        index={index}
        onPress={this.onBlurItemPress}
      />
    );
  };

  renderListBlurItem = () => {
    return (
      <AnimatedFlatList
        style={styles.flatList}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
        data={LIST_HOME_ITEM}
        numColumns={2}
        renderItem={this.renderBlurItem}
        onScroll={Animated.event([{nativeEvent: {contentOffset: {y: this.state.scrollY}}}], {
          useNativeDriver: true,
          listener: this.handleScrollEvent,
        })}
        extraData={item => item.id}
      />
    );
  };

  render() {
    return (
      <Container>
        {this.renderHomeHeaderBackground()}
        <SafeAreaView style={[commonStyles.fullScreen, styles.container]}>
          {this.renderHomeHeaderTitle()}
          {this.renderListBlurItem()}
        </SafeAreaView>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: scale(16),
    paddingRight: scale(16),
  },
  flatList: {
    marginTop: 16,
  },
});

export default withTheme(HomeScreen);
