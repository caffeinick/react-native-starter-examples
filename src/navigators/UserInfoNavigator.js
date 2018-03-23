import { StackNavigator } from 'react-navigation';

import UserInfoScreen from '../screens/UserInfoScreen';
import LogoutScreen from '../screens/LogoutScreen';

const routeConfig = {
  UserInfo: UserInfoScreen,
  Logout: LogoutScreen,
};

const navigationConfig = {
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

const UserInfoNavigator = StackNavigator(routeConfig, navigationConfig);

export default UserInfoNavigator;
