import React, {Component} from 'react';
import {Text, View, SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import {withTheme} from 'react-native-paper';
import NetInfo from '@react-native-community/netinfo';

import Container from '../../components/Container';
import AppClient from '../../networkings/AppClient';
import CustomText from '../../components/CustomText';

class HomeScreen extends Component {
  static navigationOptions = {
    title: 'The Playground',
  };

  constructor(props) {
    super(props);
    this.state = {
      loading: false,
    };
  }

  componentDidMount() {
    const startRequest = () => {
      this.setState({loading: true});
    };
    const endRequest = () => {
      this.setState({loading: false});
    };
    AppClient.getCurrentWeatherByCityName('London', startRequest, endRequest)
      .then(response => {
        console.tron.log('Home - AAAAAA: ', response);
      })
      .catch(error => {
        console.tron.log('Home - BBBBB: ', error);
      });
  }

  render() {
    return (
      <Container>
        <View style={{flex: 1, alignItems: 'center'}}></View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default withTheme(HomeScreen);
