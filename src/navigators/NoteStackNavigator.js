import { StackNavigator } from 'react-navigation';

import NoteTab from './NoteTabNavigator';
import SearchScreen from '../screens/SearchScreen';

const routeConfig = {
  Home: NoteTab,
  Search: SearchScreen,
};

const navigationConfig = {
  initialRouteName: 'Home',
  navigationOptions: {
    headerStyle: {
      backgroundColor: '#F0B800',
    },
    headerTintColor: 'white',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  },
};

const NoteStackNavigator = StackNavigator(routeConfig, navigationConfig);

export default NoteStackNavigator;
