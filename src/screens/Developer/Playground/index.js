import React, {Component} from 'react';
import Container from '../../../components/Container';
import SpotifyAnimatedHeader from '../Components/CanBeItDoneInReactNative/SpotifyAnimatedHeader';
import SnappableDemo from '../Components/ReanimatedExamples/Snappable';
import Accordion from '../Components/ReanimatedExamples/Accordion';

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
