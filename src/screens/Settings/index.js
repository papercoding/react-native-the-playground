import React, {Component} from 'react';
import {Text, View} from 'react-native';
import TouchableBounce from 'react-native/Libraries/Components/Touchable/TouchableBounce';

export class SettingsScreen extends Component {
  static navigationOptions = {
    tabBarLabel: 'Settings',
    tabBarButtonComponent: TouchableBounce,
  };
  render() {
    return (
      <View>
        <Text>{'Setting'}</Text>
      </View>
    );
  }
}

export default SettingsScreen;
