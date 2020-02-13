import React, {Component} from 'react';
import Container from '../../../components/Container';
import Accordion from '../components/ReanimatedExamples/Accordion';
import SnappableDemo from '../components/ReanimatedExamples/Snappable';
import SpotifyAnimatedScrollHeader from '../components/CanBeItDoneInReactNative/SpotifyAnimatedHeader';

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
        <SpotifyAnimatedScrollHeader />
      </Container>
    );
  }
}

export default PlaygroundScreen;
