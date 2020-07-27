import React, {Component} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import Container from '../../components/Container';
import ThemedText from '../../components/CustomText/CustomText';
import LinearGradientCard from '../../components/LinearGradientCard/LinearGradientCard';
import {Spacing} from '../../themes';
import TextStyles from '../../themes/TextStyles';

export default class DeveloperScreen extends Component {
  onMomentumScrollBegin = () => {
    this.props.navigation.setParams({isShownBottomTabBar: false});
  };

  onMomentumScrollEnd = () => {
    this.props.navigation.setParams({isShownBottomTabBar: true});
  };

  renderTitle = () => (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <ThemedText style={TextStyles.title}>{"Let's rock !!! 🔥🔥🔥"}</ThemedText>
    </View>
  );

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
              containerStyle={{marginTop: 16}}
              cardImage={require('../../assets/images/ic_flask.png')}
              title={'DEMO TITLE'}
              colors={['#FBD786', '#f7797d']}
            />
            <LinearGradientCard
              containerStyle={{marginTop: 16}}
              cardImage={require('../../assets/images/ic_helicopter.png')}
              title={'DEMO TITLE'}
              colors={['#FC5C7D', '#6A82FB']}
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
