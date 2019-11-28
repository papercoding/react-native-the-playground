import React, {Component} from 'react';
import {View, Button} from 'react-native';

import Container from '../../components/Container';
import {AppConsumer} from '../../Hocs/AppContextProvider';
import DynamicThemeButton from './DynamicThemeButton';
import {LightMode, DarkMode} from '../../themes';

class SettingsScreen extends Component {
  static navigationOptions = {
    title: 'Settings',
  };
  render() {
    return (
      <AppConsumer>
        {appConsumer => (
          <Container
            style={{
              flex: 1,
              backgroundColor: appConsumer.theme.colors.background,
            }}>
            <View style={{flex: 1, alignItems: 'center'}}>
              <Button
                title="Light Mode"
                onPress={() => {
                  appConsumer.updateTheme(LightMode);
                }}
              />
              <Button
                title="Dark Mode"
                onPress={() => {
                  appConsumer.updateTheme(DarkMode);
                }}
              />
              <DynamicThemeButton />
            </View>
          </Container>
        )}
      </AppConsumer>
    );
  }
}

export default SettingsScreen;
