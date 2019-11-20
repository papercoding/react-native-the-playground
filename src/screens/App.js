import React from 'react';
import {View} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

import HomeScreen from './Home';
import SettingsScreen from './Settings';
import {colors} from '../themes';

const BottomTabs = createBottomTabNavigator(
  {
    HomeScreen,
    SettingsScreen,
  },
  {
    tabBarOptions: {
      activeTintColor: colors.highlight,
      inactiveTintColor: '#fafafa',
      style: {
        backgroundColor: colors.primary,
      },
    },
    initialRouteName: 'HomeScreen',
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({tintColor}) => {
        const {routeName} = navigation.state;
        if (routeName === 'HomeScreen') {
          return <Icon color={tintColor} size={20} name="home" />;
        }
        if (routeName === 'SettingsScreen') {
          return <Icon color={tintColor} size={20} name="cog" />;
        }
        return <Icon color={tintColor} size={20} name="user" />;
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
