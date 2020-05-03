import React, {Component} from 'react';
import Container from '../../../components/Container';
import SpotifyAnimatedHeader from '../Components/CanBeItDoneInReactNative/SpotifyAnimatedHeader';

export class PlaygroundScreen extends Component {
  static navigationOptions = {
    header: null,
    isShownBottomTabBar: false,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container>
        {/* <Accordion /> */}
        {/* <SnappableDemo /> */}
        <SpotifyAnimatedHeader />
      </Container>
    );
  }
}

export default PlaygroundScreen;
