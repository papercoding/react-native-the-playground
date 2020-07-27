import React, {Component} from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import {getThemeMode} from '../themes/Colors/Colors';
import {getItem, LocalStorageKey, saveItem} from '../utils/LocalStorage';

const Context = React.createContext();

// 1️⃣ What is React Context ? 🙋
// Context provides a way to pass data through the component tree
// without having to pass props down manually at every level.
// 2️⃣ When to use React Context ?  😉
// Context is designed to share data that can be considered
// “global” 🌎 for a tree of React components
// 3️⃣ How to use React Context effectively ?
// Because it is designed to use globally, so avoid applying
// sparingly because it makes component reuse more difficult.

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
        {/* The PaperProvider component provides the theme to all the component  */}
        {/* in the framework */}
        <PaperProvider theme={theme}>{this.props.children}</PaperProvider>
      </Context.Provider>
    );
  }
}

export const AppConsumer = Context.Consumer;
export const AppContext = Context;
