import { StackNavigator } from 'react-navigation';

import LoginNavigator from './LoginNavigator';
import FindPasswordScreen from '../screens/FindPasswordScreen';

const routeConfig = {
  LoginStack: {
    screen: LoginNavigator,
    navigationOptions: {
      header: null,
    },
  },
  PasswordModal: {
    screen: FindPasswordScreen,
    navigationOptions: {
      header: null,
    },
  },
};

const navigationConfig = {
  mode: 'modal',
};

const NoteModalNavigator = StackNavigator(routeConfig, navigationConfig);

export default NoteModalNavigator;
