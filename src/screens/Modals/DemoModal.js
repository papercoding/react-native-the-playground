import React, {Component} from 'react';
import {Text, View, SafeAreaView} from 'react-native';

export default class DemoModal extends Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <View>
          <Text> textInComponent </Text>
        </View>
      </SafeAreaView>
    );
  }
}
