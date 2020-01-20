import React, {Component} from 'react';
import {Platform, StatusBar} from 'react-native';
import Container from '../../components/Container';
import CustomText from '../../components/CustomText';
import TextStyles from '../../themes/TextStyles';
import {AppContext} from '../../context';

export class NotificationsScreen extends Component {
  static navigationOptions = ({screenProps}) => {
    return {
      title: 'Notifications',
    };
  };

  componentDidMount() {
    this.navigationListener = this.props.navigation.addListener('didFocus', () => {
      const {theme} = this.context;
      console.tron.log('Notification - theme: ', theme.dark);
      Platform.OS === 'android' &&
        StatusBar.setBarStyle(theme.dark ? 'light-content' : 'dark-content');
      Platform.OS === 'android' && StatusBar.setBackgroundColor(theme.colors.defaultStatusBar);
      Platform.OS === 'android' && StatusBar.setTranslucent(false);
    });
  }

  componentWillUnmount() {
    this.navigationListener.remove();
  }

  render() {
    return (
      <Container containerStyle={{justifyContent: 'center', alignItems: 'center'}}>
        <CustomText style={TextStyles.headline}>{'This feature is developed'}</CustomText>
      </Container>
    );
  }
}

NotificationsScreen.contextType = AppContext;

export default NotificationsScreen;
