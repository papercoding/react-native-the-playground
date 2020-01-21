import React, {Component} from 'react';
import {StyleSheet, FlatList, Animated, Platform, StatusBar} from 'react-native';
import {scale} from 'react-native-size-matters';

import Container from '../../components/Container';
import {commonStyles, SCREEN_WIDTH} from '../../themes';
import HomeHeaderBackground from './HomeHeaderBackground';
import {SafeAreaView} from 'react-navigation';
import HomeHeaderTitle from './HomeHeaderTitle';
import BlurCard from '../../components/BlurCard';

import {LIST_HOME_ITEM} from './data';
import {fetchNotifications} from '../../redux/actions/notifications';
import {connect} from 'react-redux';

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
    this.listItem = LIST_HOME_ITEM;
  }

  componentDidMount() {
    this.props.fetchNotifications();
    this.navigationListener = this.props.navigation.addListener('didFocus', () => {
      Platform.OS === 'android' && StatusBar.setBackgroundColor('transparent', true);
      Platform.OS === 'android' && StatusBar.setTranslucent(true);
    });
  }

  handleScrollEvent = () => {};

  onBlurItemPress = index => {};

  renderHomeHeaderBackground = () => {
    const scaleXBG = this.state.scrollY.interpolate({
      inputRange: [-100, -50, 0, 100],
      outputRange: [1.2, 1.1, 1, 1],
    });
    const scaleYBG = this.state.scrollY.interpolate({
      inputRange: [-100, -50, 0, 1],
      outputRange: [1.2, 1.1, 1, 1],
    });
    const rotateBG = this.state.scrollY.interpolate({
      inputRange: [-200, -100, 0, 100, 200, 300],
      outputRange: ['50deg', '45deg', '30deg', '20deg', '0deg', '0deg'],
    });
    const translateXYBG = this.state.scrollY.interpolate({
      inputRange: [-200, -100, 0, 100, 200, 400],
      outputRange: [30, 10, 0, -scale(50), -scale(200), -scale(300)],
    });
    return (
      <HomeHeaderBackground
        style={{
          transform: [
            {rotate: rotateBG},
            {scaleX: scaleXBG},
            {scaleY: scaleYBG},
            {translateX: translateXYBG},
            {translateY: translateXYBG},
          ],
        }}
      />
    );
  };

  renderHomeHeaderTitle = () => {
    const scaleXYTitle = this.state.scrollY.interpolate({
      inputRange: [-200, -100, 0, 1],
      outputRange: [1.175, 1.1, 1, 1],
    });
    const translateYTitle = this.state.scrollY.interpolate({
      inputRange: [-200, -100, 0, 100, 200, 300],
      outputRange: [100, 50, 0, -100, -200, -300],
    });

    return (
      <Animated.View
        style={{
          position: 'absolute',
          top: scale(SCREEN_WIDTH / 7.5),
          left: scale(20),
          transform: [
            {translateY: translateYTitle},
            {scaleX: scaleXYTitle},
            {scaleY: scaleXYTitle},
          ],
        }}>
        <HomeHeaderTitle />
      </Animated.View>
    );
  };

  renderBlurItem = ({item, index}) => {
    const calculatedMargin = index % 2 === 0 ? {marginRight: scale(8)} : {marginLeft: scale(8)};
    return (
      <BlurCard
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
        contentContainerStyle={styles.flatListContent}
        scrollEventThrottle={1}
        showsVerticalScrollIndicator={false}
        data={this.listItem}
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
        {this.renderHomeHeaderTitle()}
        <SafeAreaView style={[commonStyles.fullScreen, styles.container]}>
          {this.renderListBlurItem()}
        </SafeAreaView>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: scale(20),
    paddingRight: scale(20),
  },
  flatList: {
    flex: 1,
  },
  flatListContent: {
    paddingTop: Platform.OS === 'ios' ? scale(100) : scale(140),
    paddingBottom: scale(32),
  },
});

const mapDispatchToProps = dispatch => ({
  fetchNotifications: () => dispatch(fetchNotifications()),
});

export default connect(null, mapDispatchToProps)(HomeScreen);
