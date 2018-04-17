import { DrawerNavigator } from 'react-navigation';

import NoteModalNavigator from './NoteModalNavigator';

const routeConfig = {
  NoteNav: {
    screen: NoteModalNavigator,
  },
};

const navigatorConfig = {
  navigationOptions: {
    drawerLabel: 'See Examples',
  },
  contentOptions: {
    activeTintColor: 'white',
    activeBackgroundColor: '#F0B800',
  },
};

const AuthorizedNavigator = DrawerNavigator(routeConfig, navigatorConfig);

export default AuthorizedNavigator;
