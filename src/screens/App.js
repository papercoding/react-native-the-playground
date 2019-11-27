import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import {View, StatusBar} from 'react-native';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import Icon from 'react-native-vector-icons/dist/FontAwesome';
import TouchableBounce from 'react-native/Libraries/Components/Touchable/TouchableBounce';

import {store, persistor} from '../redux/store';

import HomeScreen from './Home';
import SettingsScreen from './Settings';
import NotificationsScreen from './Notifications';
import DemoScreen from './Demo';
import DemoModal from './Modals/DemoModal';
import {AppContextProvider, AppConsumer} from '../Hocs/AppContextProvider';
import MyCustomBottomTabBar from '../components/BottomTabBar/MyCustomBottomTabBar';
import DemoSizeMattersHome from './Demo/SizeMatters/DemoSizeMattersHome';
import DemoSizeMattersChat from './Demo/SizeMatters/DemoSizeMattersChat';
import DemoSizeMattersFeed from './Demo/SizeMatters/DemoSizeMattersFeed';

const SHOW_TAB_BAR_LABEL = true;

export const SCREEN_STACK_ROUTE_NAME = {
  Home: 'Home',
  Notifications: 'Notifications',
  Settings: 'Settings',
  Demo: 'Demo',
  DemoSizeMattersHome: 'DemoSizeMattersHome',
  DemoSizeMattersChat: 'DemoSizeMattersChat',
  DemoSizeMattersFeed: 'DemoSizeMattersFeed',
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
    [SCREEN_STACK_ROUTE_NAME.Demo]: {screen: DemoScreen},
    [SCREEN_STACK_ROUTE_NAME.DemoSizeMattersHome]: {
      screen: DemoSizeMattersHome,
    },
    [SCREEN_STACK_ROUTE_NAME.DemoSizeMattersChat]: {
      screen: DemoSizeMattersChat,
    },
    [SCREEN_STACK_ROUTE_NAME.DemoSizeMattersFeed]: {
      screen: DemoSizeMattersFeed,
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
        tabBarButtonComponent: TouchableBounce,
      },
    },
    [BOTTOM_TAB_ROUTE_NAME.NotificationsTab]: {
      screen: NotificationsStackNavigator,
      navigationOptions: {
        tabBarLabel: 'Notifications',
        tabBarButtonComponent: TouchableBounce,
      },
    },
    [BOTTOM_TAB_ROUTE_NAME.SettingsTab]: {
      screen: SettingsStackNavigator,
      navigationOptions: {
        tabBarLabel: 'Settings',
        tabBarButtonComponent: TouchableBounce,
      },
    },
  },
  {
    initialRouteName: BOTTOM_TAB_ROUTE_NAME.HomeTab,
    tabBarOptions: {
      showLabel: SHOW_TAB_BAR_LABEL,
      labelStyle: {fontSize: 12},
    },
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({tintColor}) => {
        const {routeName} = navigation.state;
        switch (routeName) {
          case BOTTOM_TAB_ROUTE_NAME.HomeTab:
            return <Icon color={tintColor} size={20} name="home" />;
          case BOTTOM_TAB_ROUTE_NAME.NotificationsTab:
            return <Icon color={tintColor} size={20} name="bell" />;
          case BOTTOM_TAB_ROUTE_NAME.SettingsTab:
            return <Icon color={tintColor} size={20} name="cog" />;
          default:
            return <Icon color={tintColor} size={20} name="user" />;
        }
      },
    }),
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
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppContextProvider>
          <AppConsumer>
            {appConsumer => (
              <View style={{flex: 1}}>
                <StatusBar
                  barStyle={
                    appConsumer.theme.dark ? 'light-content' : 'dark-content'
                  }
                  backgroundColor={appConsumer.theme.colors.defaultStatusBar}
                />
                <Navigation screenProps={{theme: appConsumer.theme}} />
              </View>
            )}
          </AppConsumer>
        </AppContextProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
