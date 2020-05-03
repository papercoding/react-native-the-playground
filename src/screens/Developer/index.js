import React, {Component} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Button} from 'react-native-paper';
import BlurCard from '../../components/BlurCard';
import Container from '../../components/Container';
import CustomText from '../../components/CustomText';
import LinearGradientCard from '../../components/LinearGradientCard/LinearGradientCard';
import {SCREEN_STACK_ROUTE_NAME} from '../../navigation/index';
import {Spacing} from '../../themes';
import TextStyles from '../../themes/TextStyles';

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

  onMomentumScrollBegin = () => {
    this.props.navigation.setParams({isShownBottomTabBar: false});
  };

  onMomentumScrollEnd = () => {
    this.props.navigation.setParams({isShownBottomTabBar: true});
  };

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

  render() {
    return (
      <Container>
        <ScrollView
          style={styles.scrollView}
          ref={ref => {
            this.scrollViewRef = ref;
          }}
          onMomentumScrollBegin={this.onMomentumScrollBegin}
          onMomentumScrollEnd={this.onMomentumScrollEnd}>
          <View style={styles.screenContainer}>
            {this.renderTitle()}
            <LinearGradientCard
              cardImage={require('../../assets/images/ic_flask.png')}
              title={'DEMO TITLE'}
              colors={['#FBD786', '#f7797d']}
            />
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
