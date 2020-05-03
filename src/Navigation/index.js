import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import MyCustomBottomTabBar, {
  TabBarIconWithBadge,
} from '../components/BottomTabBar/MyCustomBottomTabBar';
import DeveloperScreen from '../screens/Developer';
import {PlaygroundScreen} from '../screens/Developer/Playground';
import HaveFunScreen from '../screens/HaveFun/HaveFunScreen';
import HomeScreen from '../screens/Home';
import DemoModal from '../screens/Modals/DemoModal';
import NotificationsScreen from '../screens/Notifications';
import SettingsScreen from '../screens/Settings';
import ShowcaseScreen from '../screens/Showcase/ShowcaseScreen';
import ShowcaseWrapperScreen from '../screens/Showcase/ShowcaseWrapperScreen';
import UIConceptsScreen from '../screens/UIConcepts/UIConceptsScreen';
import TextStyles from '../themes/TextStyles';

const SHOW_TAB_BAR_LABEL = true;

const SCREEN_STACK_ROUTE_NAME = {
  Home: 'Home',
  Notifications: 'Notifications',
  Settings: 'Settings',
  Developer: 'Developer',
  Playground: 'Playground',
  ListDemo: 'ListDemo',
  UIConcepts: 'UIConcepts',
  HaveFun: 'HaveFun',
  Showcase: 'Showcase',
  ShowcaseWrapper: 'ShowcaseWrapper',
};

const BOTTOM_TAB_ROUTE_NAME = {
  HomeTab: 'HomeTab',
  NotificationsTab: 'NotificationsTab',
  SettingsTab: 'SettingsTab',
};

const MODAL_ROUTE_NAME = {
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
    [SCREEN_STACK_ROUTE_NAME.UIConcepts]: {
      screen: UIConceptsScreen,
      navigationOptions: {
        title: 'UI Concepts',
      },
    },
    [SCREEN_STACK_ROUTE_NAME.HaveFun]: {
      screen: HaveFunScreen,
      navigationOptions: {
        title: 'Have Fun',
      },
    },
    [SCREEN_STACK_ROUTE_NAME.Showcase]: {
      screen: ShowcaseScreen,
      navigationOptions: {
        title: 'Showcase',
      },
    },
    [SCREEN_STACK_ROUTE_NAME.ShowcaseWrapper]: {
      screen: ShowcaseWrapperScreen,
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
      navigationOptions: () => {
        return {
          tabBarLabel: 'Home',
          tabBarIcon: ({tintColor}) => <TabBarIconWithBadge name="home" tintColor={tintColor} />,
        };
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

export {SCREEN_STACK_ROUTE_NAME, MODAL_ROUTE_NAME, BOTTOM_TAB_ROUTE_NAME};
export default Navigation;
