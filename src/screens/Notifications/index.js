import React, {Component} from 'react';
import Container from '../../components/Container';
import CustomText from '../../components/CustomText';
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
        <CustomText style={TextStyles.headline}>{'This feature is developing'}</CustomText>
      </Container>
    );
  }
}

export default NotificationsScreen;
