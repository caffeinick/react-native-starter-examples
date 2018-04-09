import React from 'react';
import { TabNavigator, TabBarBottom } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

import NoteScreen from '../screens/NoteScreen';
import UserStack from './UserInfoNavigator';
import CounterStack from './CounterNavigator';

const routeConfig = {
  Note: NoteScreen,
  Counter: {
    screen: CounterStack,
    navigationOptions: {
      header: null,
    },
  },
  User: {
    screen: UserStack,
    navigationOptions: {
      header: null,
    },
  },
};

const tabConfig = {
  navigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, tintColor }) => {
      const { routeName } = navigation.state;
      let iconName;
      if (routeName === 'Note') {
        iconName = `ios-create${focused ? '' : '-outline'}`;
      } else if (routeName === 'Counter') {
        iconName = `ios-add-circle${focused ? '' : '-outline'}`;
      } else if (routeName === 'User') {
        iconName = `ios-contact${focused ? '' : '-outline'}`;
      }

      return <Ionicons name={iconName} size={25} color={tintColor} />;
    },
  }),
  tabBarComponent: TabBarBottom,
  tabBarPosition: 'bottom',
  tabBarOptions: {
    activeTintColor: '#F0B800',
    inactiveTintColor: 'gray',
  },
  animationEnabled: false,
  swipeEnabled: false,
};

const NoteTabNavigator = TabNavigator(routeConfig, tabConfig);

export default NoteTabNavigator;
