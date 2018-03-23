import { StackNavigator } from 'react-navigation';

import UserInfoScreen from '../screens/UserInfoScreen';
import LogoutScreen from '../screens/LogoutScreen';

const routeConfig = {
  Home: UserInfoScreen,
  Search: LogoutScreen,
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
