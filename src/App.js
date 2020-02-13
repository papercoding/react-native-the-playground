import React, {useEffect, useRef} from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './redux/store';
import {View, StatusBar, Platform} from 'react-native';
import DropdownAlert from 'react-native-dropdownalert';
import SplashScreen from 'react-native-splash-screen';

import {AppContextProvider, AppConsumer} from './context';
import NetworkStatus from './hooks/NetworkStatus';
import Navigation from './Navigation';

const App = () => {
  const refDropdownAlert = useRef(null);
  const showNetworkConnectedAlert = NetworkStatus();

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  // Similar to componentDidMount, componentDidUpdate and componentWillUnmount
  useEffect(() => {
    if (showNetworkConnectedAlert === null) {
      return;
    }
    const alertType = showNetworkConnectedAlert ? 'success' : 'error';
    const alertMessage = showNetworkConnectedAlert ? 'Connected' : 'No Internet Connection';
    refDropdownAlert.current.alertWithType(alertType, alertMessage);
  }, [showNetworkConnectedAlert]);

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
