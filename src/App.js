import React, {useEffect, useRef, useState} from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './redux/store';
import {View, StatusBar, Platform} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import DropdownAlert from 'react-native-dropdownalert';
import SplashScreen from 'react-native-splash-screen';

import HomeScreen from './screens/Home';
import SettingsScreen from './screens/Settings';
import NotificationsScreen from './screens/Notifications';
import DemoModal from './screens/Modals/DemoModal';
import {AppContextProvider, AppConsumer} from './context';
import MyCustomBottomTabBar from './components/BottomTabBar/MyCustomBottomTabBar';
import NetworkStatus from './hooks/NetworkStatus';
import {TabBarIconWithBadge} from './components/BottomTabBar/MyCustomBottomTabBar';
import DeveloperScreen from './screens/Developer';
import {PlaygroundScreen} from './screens/Developer/Playground';
import TextStyles from './themes/TextStyles';

const SHOW_TAB_BAR_LABEL = true;

export const SCREEN_STACK_ROUTE_NAME = {
  Home: 'Home',
  Notifications: 'Notifications',
  Settings: 'Settings',
  Developer: 'Developer',
  Playground: 'Playground',
};

export const BOTTOM_TAB_ROUTE_NAME = {
  HomeTab: 'HomeTab',
  NotificationsTab: 'NotificationsTab',
  SettingsTab: 'SettingsTab',
};

export const MODAL_ROUTE_NAME = {
  DemoModal: 'DemoModal',
};

const HomeStackNavigator = createStackNavigator(
  {
    [SCREEN_STACK_ROUTE_NAME.Home]: {screen: HomeScreen},
    [SCREEN_STACK_ROUTE_NAME.Developer]: {
      screen: DeveloperScreen,
      navigationOptions: {
        title: 'Developer',
      },
    },
    [SCREEN_STACK_ROUTE_NAME.Playground]: {
      screen: PlaygroundScreen,
      navigationOptions: {
        title: 'The Playground',
      },
    },
  },
  {
    initialRouteName: SCREEN_STACK_ROUTE_NAME.Home,
    headerMode: 'screen',
    headerLayoutPreset: 'center',
    defaultNavigationOptions: ({screenProps}) => {
      const {theme} = screenProps;
      return {
        headerBackTitle: null,
        headerTintColor: theme.colors.headerBarTintColor,
        headerStyle: {
          backgroundColor: theme.colors.headerBar,
        },
        headerTitleStyle: {
          ...TextStyles.headerBarTitle,
        },
      };
    },
  },
);

const NotificationsStackNavigator = createStackNavigator(
  {
    [SCREEN_STACK_ROUTE_NAME.Notifications]: {screen: NotificationsScreen},
  },
  {
    initialRouteName: SCREEN_STACK_ROUTE_NAME.Notifications,
    headerMode: 'screen',
    headerLayoutPreset: 'center',
    defaultNavigationOptions: ({screenProps}) => {
      const {theme} = screenProps;
      return {
        headerBackTitle: null,
        headerTintColor: theme.colors.headerBarTintColor,
        headerStyle: {
          backgroundColor: theme.colors.headerBar,
        },
      };
    },
  },
);

const SettingsStackNavigator = createStackNavigator(
  {
    [SCREEN_STACK_ROUTE_NAME.Settings]: {screen: SettingsScreen},
  },
  {
    initialRouteName: SCREEN_STACK_ROUTE_NAME.Settings,
    headerMode: 'screen',
    headerLayoutPreset: 'center',
    defaultNavigationOptions: ({screenProps}) => {
      const {theme} = screenProps;
      return {
        headerBackTitle: null,
        headerTintColor: theme.colors.headerBarTintColor,
        headerStyle: {
          backgroundColor: theme.colors.headerBar,
        },
      };
    },
  },
);

const MainAppBottomTab = createBottomTabNavigator(
  {
    [BOTTOM_TAB_ROUTE_NAME.HomeTab]: {
      screen: HomeStackNavigator,
      navigationOptions: {
        tabBarLabel: 'Home',
        tabBarIcon: ({tintColor}) => <TabBarIconWithBadge name="home" tintColor={tintColor} />,
      },
    },
    [BOTTOM_TAB_ROUTE_NAME.NotificationsTab]: {
      screen: NotificationsStackNavigator,
      navigationOptions: {
        tabBarLabel: 'Notifications',
        tabBarIcon: ({tintColor}) => (
          <TabBarIconWithBadge name="notifications" tintColor={tintColor} />
        ),
      },
    },
    [BOTTOM_TAB_ROUTE_NAME.SettingsTab]: {
      screen: SettingsStackNavigator,
      navigationOptions: {
        tabBarLabel: 'Theme',
        tabBarIcon: ({tintColor}) => <TabBarIconWithBadge name="settings" tintColor={tintColor} />,
      },
    },
  },
  {
    initialRouteName: BOTTOM_TAB_ROUTE_NAME.HomeTab,
    tabBarOptions: {
      showLabel: SHOW_TAB_BAR_LABEL,
      labelStyle: {fontSize: 12},
    },
    tabBarComponent: props => <MyCustomBottomTabBar {...props} />,
  },
);

// Wrapping stacks in modal stacks
const RootNavigator = createStackNavigator(
  {
    MainAppBottomTab: {screen: MainAppBottomTab},
    [MODAL_ROUTE_NAME.DemoModal]: {screen: DemoModal},
  },
  {
    headerMode: 'none',
    mode: 'modal',
  },
);

const Navigation = createAppContainer(RootNavigator);

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
