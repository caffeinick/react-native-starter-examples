import { SwitchNavigator } from 'react-navigation';

import LoadingScreen from '../screens/LoadingScreen';
import UnauthorizedNavigator from './UnauthorizedNavigator';
import AuthorizedNavigator from './AuthorizedNavigator';

const routeConfig = {
  Loading: LoadingScreen,
  UnauthModal: UnauthorizedNavigator,
  AuthDrawer: AuthorizedNavigator,
};

const navigationConfig = {
  initialRouteName: 'Loading',
};

const RootNavigator = SwitchNavigator(routeConfig, navigationConfig);

export default RootNavigator;
