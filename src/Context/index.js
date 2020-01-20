import React, {Component} from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import {getThemeMode} from '../themes/Colors';

const Context = React.createContext();

export class AppContextProvider extends Component {
  state = {
    theme: getThemeMode('dark'),
    updateTheme: mode => {
      // theme is type of an object theme, containing color palette
      this.setState({theme: getThemeMode(mode)}, () => {});
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
