import React, {Component} from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import {getThemeMode} from '../themes/Colors';
import {getItem, LocalStorageKey, saveItem} from '../utils/LocalStorage';

const Context = React.createContext();

export class AppContextProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: getThemeMode('dark'),
      updateTheme: async mode => {
        await saveItem(LocalStorageKey.APP_THEME_MODE, mode);
        this.setState({theme: getThemeMode(mode)});
      },
    };
  }

  componentDidMount() {
    const loadTheme = async () => {
      const savedTheme = await getItem(LocalStorageKey.APP_THEME_MODE);
      this.setState({theme: getThemeMode(savedTheme)});
    };
    loadTheme();
  }

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
