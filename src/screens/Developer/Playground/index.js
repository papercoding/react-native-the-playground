import React, {Component} from 'react';
import {View} from 'react-native';
import Animated from 'react-native-reanimated';
import {TapGestureHandler, State} from 'react-native-gesture-handler';

// event: Mapping from event fields to animated nodes and
// write a function that takes reanimated values map as an input and return a block
// Value: is a container for storing values. It's initialized with new Value(0)
const {event, Value, cond, eq} = Animated;

export class PlaygroundScreen extends Component {
  constructor(props) {
    super(props);
    const animatedState = new Value(-1);
    //
    this.onStateChange = event([
      {
        nativeEvent: {
          state: animatedState,
        },
      },
    ]);
    // cond function will create a conditional.
    this.opacity = cond(eq(animatedState, State.BEGAN), 0.2, 1);
  }

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <TapGestureHandler onHandlerStateChange={this.onStateChange}>
          <Animated.View
            style={{
              backgroundColor: 'tomato',
              width: 200,
              height: 200,
              opacity: this.opacity,
            }}></Animated.View>
        </TapGestureHandler>
      </View>
    );
  }
}

export default PlaygroundScreen;
