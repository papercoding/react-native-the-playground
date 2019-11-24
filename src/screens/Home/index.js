import React, {Component} from 'react';
import {Text, View, SafeAreaView, StyleSheet, Button} from 'react-native';
import TouchableBounce from 'react-native/Libraries/Components/Touchable/TouchableBounce';
import {SCREEN_STACK_ROUTE_NAME} from '../App';

class HomeScreen extends Component {
  static navigationOptions = {
    title: '',
    header: null,
  };

  onGoToDemoButtonPress = () => {
    this.props.navigation.navigate(SCREEN_STACK_ROUTE_NAME.Demo);
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View>
          <Button title="Go to Demo" onPress={this.onGoToDemoButtonPress} />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default HomeScreen;
