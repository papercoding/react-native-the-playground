import React, {useEffect} from 'react';
import {Platform, StatusBar, View} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {AppConsumer, AppContextProvider} from './context';
import Navigation from './navigation';
import {persistor, store} from './redux/store';
import NetworkDropdownAlert from './components/NetworkDropdownAlert';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppContextProvider>
          <AppConsumer>
            {appConsumer => (
              <View style={{flex: 1}}>
                <StatusBar
                  barStyle={appConsumer.theme.dark ? 'light-content' : 'dark-content'}
                  backgroundColor={appConsumer.theme.colors.defaultStatusBar}
                />
                <Navigation screenProps={{theme: appConsumer.theme}} />
                <NetworkDropdownAlert
                  closeInterval={3000}
                  onClose={() => {
                    if (Platform.OS === 'android') {
                      StatusBar.setBackgroundColor(appConsumer.theme.colors.defaultStatusBar, true);
                    }
                  }}
                />
              </View>
            )}
          </AppConsumer>
        </AppContextProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
