import React, {Component} from 'react';
import Container from '../../components/Container';
import ThemedText from '../../components/CustomText/CustomText';
import TextStyles from '../../themes/TextStyles';

export class NotificationsScreen extends Component {
  static navigationOptions = ({screenProps}) => {
    return {
      title: 'Notifications',
    };
  };

  render() {
    return (
      <Container containerStyle={{justifyContent: 'center', alignItems: 'center'}}>
        <ThemedText style={TextStyles.headline}>{'This feature is developing'}</ThemedText>
      </Container>
    );
  }
}

export default NotificationsScreen;
