import { StackNavigator } from 'react-navigation';

import LandingScreen from '../screens/LandingScreen';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';

const routeConfig = {
  Landing: LandingScreen,
  Login: LoginScreen,
  Signup: SignupScreen,
};

const navigationConfig = {
  initialRouteName: 'Landing',
  headerMode: 'none',
};

const NoteStackNavigator = StackNavigator(routeConfig, navigationConfig);

export default NoteStackNavigator;
