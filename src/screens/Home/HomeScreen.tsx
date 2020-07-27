import React, {Component} from 'react';
import {Animated, FlatList, Platform, StatusBar, StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';
import {NavigationEventSubscription, SafeAreaView} from 'react-navigation';
import {NavigationStackProp} from 'react-navigation-stack';
import {connect} from 'react-redux';
import BlurCard from '../../components/BlurCard/BlurCard';
import Container from '../../components/Container';
import {AppContext} from '../../context';
import {SCREEN_STACK_ROUTE_NAME} from '../../navigation/constants';
import {fetchNotifications} from '../../redux/actions/notifications';
import {commonStyles, SCREEN_WIDTH} from '../../themes';
import {ListHomeItemProps, LIST_HOME_ITEM} from './data';
import HomeHeaderBackground from './HomeHeaderBackground';
import HomeHeaderTitle from './HomeHeaderTitle';

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

type Props = {
  navigation: NavigationStackProp;
  fetchNotifications: Function;
};

type State = {
  scrollY: any;
  loading: boolean;
};

class HomeScreen extends Component<Props, State> {
  static navigationOptions = {
    title: 'The Playground',
    header: null,
  };

  navigationListener!: NavigationEventSubscription;

  constructor(props: Props) {
    super(props);
    this.state = {
      scrollY: new Animated.Value(0.1),
      loading: false,
    };
  }

  componentDidMount() {
    this.props.fetchNotifications();
    this.navigationListener = this.props.navigation.addListener('didFocus', () => {
      Platform.OS === 'android' && StatusBar.setBackgroundColor('transparent', true);
      Platform.OS === 'android' && StatusBar.setTranslucent(true);
    });
    this.navigationListener = this.props.navigation.addListener('willBlur', () => {
      const {theme} = this.context;
      Platform.OS === 'android' &&
        StatusBar.setBarStyle(theme.dark ? 'light-content' : 'dark-content');
      Platform.OS === 'android' && StatusBar.setBackgroundColor(theme.colors.defaultStatusBar);
      Platform.OS === 'android' && StatusBar.setTranslucent(false);
    });
  }

  componentWillUnmount() {
    this.navigationListener.remove();
  }

  handleScrollEvent = () => {};

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

  renderBlurItem = ({item, index}: {item: ListHomeItemProps; index: number}) => {
    const calculatedMargin = index % 2 === 0 ? {marginRight: scale(8)} : {marginLeft: scale(8)};

    const onBlurItemPress = () => {
      switch (item.id) {
        case 'UIConcepts':
          break;
        case 'Animations':
          break;
        case 'Showcase':
          this.props.navigation.navigate(SCREEN_STACK_ROUTE_NAME.Showcase);
          break;
        case 'HaveFun':
          break;
        default:
          break;
      }
    };

    return (
      <BlurCard
        containerStyle={[{flex: 1}, calculatedMargin]}
        title={item.title}
        imageSource={item.imageSource}
        onPress={onBlurItemPress}
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
        data={LIST_HOME_ITEM}
        numColumns={2}
        renderItem={this.renderBlurItem}
        onScroll={Animated.event([{nativeEvent: {contentOffset: {y: this.state.scrollY}}}], {
          useNativeDriver: true,
          listener: this.handleScrollEvent,
        })}
        extraData={(item: {id: any}) => item.id}
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

const mapDispatch = {
  fetchNotifications: () => fetchNotifications(),
};

HomeScreen.contextType = AppContext;

export default connect(
  null,
  mapDispatch,
)(HomeScreen);
