import { SwitchNavigator } from 'react-navigation';

import LoadingScreen from '../screens/LoadingScreen';
import UnauthorizedNavigator from './UnauthorizedNavigator';
import NoteModalNavigator from './NoteModalNavigator';

const routeConfig = {
  Loading: LoadingScreen,
  UnauthModal: UnauthorizedNavigator,
  AuthDrawer: NoteModalNavigator,
};

const navigationConfig = {
  initialRouteName: 'Loading',
};

const RootNavigator = SwitchNavigator(routeConfig, navigationConfig);

export default RootNavigator;
