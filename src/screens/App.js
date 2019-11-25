import React from 'react';
import {View} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import TouchableBounce from 'react-native/Libraries/Components/Touchable/TouchableBounce';

import HomeScreen from './Home';
import SettingsScreen from './Settings';
import NotificationsScreen from './Notifications';
import DemoScreen from './Demo';
import DemoModal from './Modals/DemoModal';
import {AppContextProvider} from '../Hocs/AppContextProvider';
import MyCustomBottomTabBar from '../components/MyCustomBottomTabBar';

const SHOW_TAB_BAR_LABEL = true;

export const SCREEN_STACK_ROUTE_NAME = {
  Home: 'Home',
  Notifications: 'Notifications',
  Settings: 'Settings',
  Demo: 'Demo',
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
  },
  {
    initialRouteName: SCREEN_STACK_ROUTE_NAME.Home,
    headerMode: 'screen',
  },
);

const NotificationsStackNavigator = createStackNavigator(
  {
    [SCREEN_STACK_ROUTE_NAME.Notifications]: {screen: NotificationsScreen},
  },
  {
    initialRouteName: SCREEN_STACK_ROUTE_NAME.Notifications,
  },
);

const SettingsStackNavigator = createStackNavigator(
  {
    [SCREEN_STACK_ROUTE_NAME.Settings]: {screen: SettingsScreen},
  },
  {
    initialRouteName: SCREEN_STACK_ROUTE_NAME.Settings,
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
    <AppContextProvider>
      <View style={{flex: 1}}>
        <Navigation />
      </View>
    </AppContextProvider>
  );
};

export default App;
