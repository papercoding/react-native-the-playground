import React, {Component} from 'react';
import {View, Button} from 'react-native';

import Container from '../../components/Container';
import {AppConsumer} from '../../Hocs/AppContextProvider';
import {LightMode, DarkMode} from '../../themes';
import {SCREEN_STACK_ROUTE_NAME} from '../../App';

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
              <Button
                title="Demo"
                onPress={() => {
                  this.props.navigation.navigate(SCREEN_STACK_ROUTE_NAME.Demo);
                }}
              />
            </View>
          </Container>
        )}
      </AppConsumer>
    );
  }
}

export default SettingsScreen;
