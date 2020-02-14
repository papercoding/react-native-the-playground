import React, {Component} from 'react';
import Container from '../../components/Container';
import ThemedCard from '../../components/ThemedCard';
import {AppContext} from '../../Context';

class SettingsScreen extends Component {
  static navigationOptions = {
    title: 'Settings',
  };

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

SettingsScreen.contextType = AppContext;
export default SettingsScreen;
