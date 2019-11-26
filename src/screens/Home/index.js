import React, {Component} from 'react';
import {Text, View, SafeAreaView, StyleSheet, Button} from 'react-native';
import {withTheme} from 'react-native-paper';

import {SCREEN_STACK_ROUTE_NAME} from '../App';
import Container from '../../components/Container';

class HomeScreen extends Component {
  static navigationOptions = {
    title: '',
    header: null,
  };

  onGoToDemoButtonPress = () => {
    this.props.navigation.navigate(SCREEN_STACK_ROUTE_NAME.Demo);
  };

  render() {
    const {colors} = this.props.theme;
    return (
      <Container>
        <SafeAreaView style={[styles.container]}>
          <View style={{alignItems: 'center'}}>
            <Text style={[styles.welcome, {color: colors.text}]}>
              {'Welcome to my App'}
            </Text>
            <Button title="Go to Demo" onPress={this.onGoToDemoButtonPress} />
          </View>
        </SafeAreaView>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  welcome: {
    fontFamily: 'BeautifulHeart',
    fontSize: 40,
  },
});

export default withTheme(HomeScreen);
