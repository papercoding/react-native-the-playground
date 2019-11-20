import React, {Component} from 'react';
import {Text, View} from 'react-native';
import TouchableBounce from 'react-native/Libraries/Components/Touchable/TouchableBounce';

class HomeScreen extends Component {
  static navigationOptions = {
    tabBarLabel: 'Home',
    tabBarButtonComponent: TouchableBounce,
  };
  render() {
    return (
      <View>
        <Text>{'Home'}</Text>
      </View>
    );
  }
}

export default HomeScreen;
