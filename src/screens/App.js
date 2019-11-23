import React from 'react';
import {View} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

import HomeScreen from './Home';
import SettingsScreen from './Settings';
import {colors} from '../themes';
import NotificationsScreen from './Notifications';

const SHOW_TAB_BAR_LABEL = true;

export const SCREEN_STACK_ROUTE_NAME = {
  Home: 'Home',
  Notifications: 'Notifications',
  Settings: 'Settings',
};

export const BOTTOM_TAB_ROUTE_NAME = {
  Home: 'Home',
  Notifications: 'Notifications',
  Settings: 'Settings',
};

const HomeStackNavigator = createStackNavigator(
  {
    [SCREEN_STACK_ROUTE_NAME.Home]: {screen: HomeScreen},
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

const BottomTabs = createBottomTabNavigator(
  {
    [BOTTOM_TAB_ROUTE_NAME.Home]: HomeStackNavigator,
    [BOTTOM_TAB_ROUTE_NAME.Notifications]: NotificationsStackNavigator,
    [BOTTOM_TAB_ROUTE_NAME.Settings]: SettingsStackNavigator,
  },
  {
    initialRouteName: 'Home',
    tabBarOptions: {
      activeTintColor: colors.highlight,
      inactiveTintColor: '#fafafa',
      showLabel: SHOW_TAB_BAR_LABEL,
      labelStyle: {fontSize: 12},
      style: {
        backgroundColor: colors.primary,
      },
    },
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({tintColor}) => {
        const {routeName} = navigation.state;
        switch (routeName) {
          case BOTTOM_TAB_ROUTE_NAME.Home:
            return <Icon color={tintColor} size={20} name="home" />;
          case BOTTOM_TAB_ROUTE_NAME.Notifications:
            return <Icon color={tintColor} size={20} name="bell" />;
          case BOTTOM_TAB_ROUTE_NAME.Settings:
            return <Icon color={tintColor} size={20} name="cog" />;
          default:
            return <Icon color={tintColor} size={20} name="user" />;
        }
      },
    }),
  },
);

const Navigation = createAppContainer(BottomTabs);

const App = () => {
  return (
    <View style={{flex: 1}}>
      <Navigation />
    </View>
  );
};

export default App;
