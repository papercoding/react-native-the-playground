import React, {Component} from 'react';
import {StyleSheet, Platform, StatusBar} from 'react-native';

import Container from '../../components/Container';
import {AppConsumer, AppContextProvider, AppContext} from '../../Context';
import {LightMode, DarkMode, commonStyles} from '../../themes';
import {SCREEN_STACK_ROUTE_NAME} from '../../App';
import ThemedCard from '../../components/ThemedCard';

class SettingsScreen extends Component {
  static navigationOptions = {
    title: 'Settings',
  };

  componentDidMount() {
    const {theme} = this.context;
    this.navigationListener = this.props.navigation.addListener('didFocus', () => {
      Platform.OS === 'android' && StatusBar.setBackgroundColor(theme.colors.defaultStatusBar);
      Platform.OS === 'android' && StatusBar.setTranslucent(false);
    });
  }

  onThemedCardPress = theme => {
    this.context.updateTheme(theme);
  };

  render() {
    const {theme} = this.context;
    return (
      <Container containerStyle={{padding: 16}}>
        <ThemedCard
          title="Light Mode"
          themeMode="light"
          isActive={!theme.dark}
          onPress={this.onThemedCardPress}
        />
        <ThemedCard
          cardContainerStyle={{marginTop: 16}}
          title="Dark Mode"
          themeMode="dark"
          isActive={theme.dark}
          onPress={this.onThemedCardPress}
        />
      </Container>
    );
  }
}

const styles = StyleSheet.create({});

SettingsScreen.contextType = AppContext;
export default SettingsScreen;
