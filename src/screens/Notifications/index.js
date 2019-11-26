import React, {Component} from 'react';
import {Text, View} from 'react-native';

export class NotificationsScreen extends Component {
  static navigationOptions = ({screenProps}) => {
    return {
      title: 'Notifications',
    };
  };

  render() {
    return (
      <View>
        <Text>{'Notifications'}</Text>
      </View>
    );
  }
}

export default NotificationsScreen;
