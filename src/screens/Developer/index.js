import React, {Component} from 'react';
import {View, StyleSheet, ScrollView, Button as RNButton} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {Button} from 'react-native-paper';

import Container from '../../components/Container';
import CustomText from '../../components/CustomText';
import TextStyles from '../../themes/TextStyles';
import {Spacing} from '../../themes';
import BlurCard from '../../components/BlurCard';
import ProgressBar from './Components/ProgressBar';
import {SCREEN_STACK_ROUTE_NAME} from '../../App';

const ShowCase = ({label, children}) => {
  return (
    <View style={styles.showcaseContainer}>
      <CustomText style={TextStyles.subheading}>{label}</CustomText>
      <View style={{marginTop: 16}}>{children}</View>
    </View>
  );
};

export default class DeveloperScreen extends Component {
  static navigationOptions = ({navigation}) => ({
    headerRight: () => (
      <Button
        mode="text"
        uppercase={false}
        labelStyle={{...TextStyles.headerBarButtonTitle, color: 'white'}}
        onPress={() => {
          navigation.navigate(SCREEN_STACK_ROUTE_NAME.Playground);
        }}>
        {'Playground'}
      </Button>
    ),
  });

  constructor(props) {
    super(props);
    this.state = {
      progress: 0,
      visible: true,
    };
  }

  fetchData = () => {
    let progress = 0;
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
    this.timeout = setInterval(() => {
      this.setState({
        progress,
      });
      progress += 0.1;
      if (progress > 1) {
        clearInterval(this.timeout);
      }
    }, 1000);
  };

  componentDidMount() {
    if (this.scrollViewRef) {
      this.scrollViewRef.scrollToEnd();
    }
    this.fetchData();
  }

  renderTitle = () => (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <CustomText style={TextStyles.title}>{"Let's rock !!! 🔥🔥🔥"}</CustomText>
    </View>
  );

  renderBlurCardShowCase = () => {
    return (
      <ShowCase label="Blur Card:">
        <BlurCard
          theme="dark"
          item={{
            title: 'Viet Nam',
            imageSource: require('../../assets/images/ic_circle_vietnam_flag.png'),
          }}
        />
      </ShowCase>
    );
  };

  renderAnimatableText = () => {
    return (
      <ShowCase label="react-native-animatable:">
        {/* ====== Pulse ====== */}
        <Animatable.View animation="pulse" easing="ease-out" iterationCount="infinite">
          <CustomText style={TextStyles.body2}>{'❤️'}</CustomText>
        </Animatable.View>
        {/* ====== bounceInLeft ====== */}
        <Animatable.View
          style={{marginTop: Spacing.normal}}
          animation="bounceInLeft"
          easing="ease-out"
          iterationCount="5">
          <Button icon="camera" mode="contained" onPress={() => {}}>
            Press me
          </Button>
        </Animatable.View>
      </ShowCase>
    );
  };

  renderReanimatedProgressBar = () => {
    return (
      <ShowCase label="Reanimated Progress Bar">
        <View>
          {this.state.visible && <ProgressBar progress={this.state.progress} />}
          <RNButton
            onPress={() => {
              this.setState({progress: 0});
              this.fetchData();
            }}
            title="RESET"
          />
          <RNButton
            onPress={() => this.setState(prev => ({visible: !prev.visible}))}
            title="TOGGLE VISIBILITY"
          />
        </View>
      </ShowCase>
    );
  };

  render() {
    return (
      <Container>
        <ScrollView
          style={styles.scrollView}
          ref={ref => {
            this.scrollViewRef = ref;
          }}>
          <View style={styles.screenContainer}>
            {this.renderTitle()}
            {/* {this.renderBlurCardShowCase()} */}
            {/* {this.renderAnimatableText()} */}
            {this.renderReanimatedProgressBar()}
          </View>
        </ScrollView>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  screenContainer: {
    padding: Spacing.small,
  },
  scrollView: {
    flex: 1,
  },
  showcaseContainer: {
    marginTop: Spacing.small,
  },
  kittenCardHeaderText: {
    marginHorizontal: 24,
    marginVertical: 16,
  },
  kittenCardHeaderImage: {
    flex: 1,
    height: 192,
  },
});
