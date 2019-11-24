import React, {Component} from 'react';
import {Text, View, Button} from 'react-native';
import {MODAL_ROUTE_NAME} from '../App';

export class DemoScreen extends Component {
  static navigationOptions = {
    title: 'Demo Screen',
  };

  onOpenDemoModalPress = () => {
    this.props.navigation.navigate(MODAL_ROUTE_NAME.DemoModal);
  };

  render() {
    return (
      <View>
        <Button title="Open Demo Modal" onPress={this.onOpenDemoModalPress} />
      </View>
    );
  }
}

export default DemoScreen;
