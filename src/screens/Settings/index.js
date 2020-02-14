import React, { Component } from 'react';
import { Platform, StatusBar, StyleSheet } from 'react-native';
import Container from '../../components/Container';
import ThemedCard from '../../components/ThemedCard';
import { AppContext } from '../../Context';


class SettingsScreen extends Component {
  static navigationOptions = {
    title: 'Settings',
  };

  componentDidMount() {
    this.navigationListener = this.props.navigation.addListener('didFocus', () => {
      const {theme} = this.context;
      Platform.OS === 'android' &&
        StatusBar.setBarStyle(theme.dark ? 'light-content' : 'dark-content');
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
