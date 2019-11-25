import React, {Component} from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import {DarkMode} from '../../themes';

const Context = React.createContext();

export class AppContextProvider extends Component {
  state = {
    theme: DarkMode,
    updateTheme: theme => {
      this.setState({theme: theme});
    },
  };

  render() {
    const {theme} = this.state;
    return (
      <Context.Provider value={this.state}>
        <PaperProvider theme={theme}>{this.props.children}</PaperProvider>
      </Context.Provider>
    );
  }
}

export const AppConsumer = Context.Consumer;
export const AppContext = Context;
