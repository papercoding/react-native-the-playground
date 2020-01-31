import React, {Component} from 'react';
import {View, Button} from 'react-native';
import ProgressBar from './ProgressBar';

export default class ReanimatedProgressBarDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: 0,
      visible: true,
    };
  }

  fetchData = () => {
    let progress = 0;
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
    this.timeout = setInterval(() => {
      this.setState({
        progress,
      });
      progress += 0.1;
      if (progress > 1) {
        clearInterval(this.timeout);
      }
    }, 1000);
  };

  componentDidMount() {
    this.fetchData();
  }

  render() {
    return (
      <View>
        {this.state.visible && <ProgressBar progress={this.state.progress} />}
        <Button
          onPress={() => {
            this.setState({progress: 0});
            this.fetchData();
          }}
          title="RESET"
        />
        <Button
          onPress={() => this.setState(prev => ({visible: !prev.visible}))}
          title="TOGGLE VISIBILITY"
        />
      </View>
    );
  }
}
