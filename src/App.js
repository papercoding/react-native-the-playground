import React, {useEffect, useRef} from 'react';
import {Platform, StatusBar, View} from 'react-native';
import DropdownAlert from 'react-native-dropdownalert';
import SplashScreen from 'react-native-splash-screen';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {AppConsumer, AppContextProvider} from './Context';
import useDropdownAlertNetwork from './Hooks/useDropdownAlertNetwork';
import Navigation from './Navigation';
import {persistor, store} from './redux/store';

const App = () => {
  const refDropdownAlert = useRef(null);
  useDropdownAlertNetwork(refDropdownAlert);

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
                <DropdownAlert
                  ref={refDropdownAlert}
                  closeInterval={1000}
                  elevation={3}
                  useNativeDriver
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
