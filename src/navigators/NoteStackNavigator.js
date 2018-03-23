import { StackNavigator } from 'react-navigation';

import NoteScreen from '../screens/NoteScreen';
import SearchScreen from '../screens/SearchScreen';

const routeConfig = {
  Home: NoteScreen,
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