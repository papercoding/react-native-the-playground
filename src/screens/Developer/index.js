import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {ScrollView} from 'react-native-gesture-handler';

import Container from '../../components/Container';
import CustomText from '../../components/CustomText';
import TextStyles from '../../themes/TextStyles';
import {Spacing} from '../../themes';
import BlurCard from '../../components/BlurCard';
import {Button} from 'react-native-paper';

const AnimatedCustomText = Animatable.createAnimatableComponent(CustomText);

const ShowCase = ({label, children}) => {
  return (
    <View style={styles.showcaseContainer}>
      <CustomText style={TextStyles.subheading}>{label}</CustomText>
      <View style={{marginTop: 16}}>{children}</View>
    </View>
  );
};

export default class DeveloperScreen extends Component {
  renderTitle = () => (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <CustomText style={TextStyles.title}>{"Let's rock !!! 🔥🔥🔥"}</CustomText>
    </View>
  );

  render;

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
      <ShowCase label="Animatable:">
        {/* ====== Slide In Down ====== */}
        <Animatable.View animation="slideInDown" iterationCount={5} direction="alternate">
          <CustomText>{'Up and down you go'}</CustomText>
        </Animatable.View>
        {/* ====== Pulse ====== */}
        <Animatable.View
          style={{marginLeft: Spacing.small, marginTop: Spacing.normal}}
          animation="pulse"
          easing="ease-out"
          iterationCount="infinite">
          <CustomText style={TextStyles.body2}>{'❤️'}</CustomText>
        </Animatable.View>
        <Animatable.View
          style={{marginLeft: Spacing.small, marginTop: Spacing.normal}}
          animation="pulse"
          easing="ease-out"
          iterationCount="infinite">
          <Button icon="camera" mode="contained" onPress={() => console.log('Pressed')}>
            Press me
          </Button>
        </Animatable.View>
      </ShowCase>
    );
  };

  render() {
    return (
      <Container containerStyle={styles.screenContainer}>
        <ScrollView style={styles.scrollView}>
          {this.renderTitle()}
          {this.renderBlurCardShowCase()}
          {this.renderAnimatableText()}
        </ScrollView>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  screenContainer: {
    padding: Spacing.normal,
  },
  scrollView: {
    flex: 1,
  },
  showcaseContainer: {
    marginTop: Spacing.normal,
  },
});
