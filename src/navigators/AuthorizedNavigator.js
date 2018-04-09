import { DrawerNavigator } from 'react-navigation';

import NoteModalNavigator from './NoteModalNavigator';

const routeConfig = {
  NoteNav: {
    screen: NoteModalNavigator,
  },
};

const navigatorConfig = {
  contentOptions: {
    activeTintColor: 'white',
    activeBackgroundColor: 'silver',
  },
};

const AuthorizedNavigator = DrawerNavigator(routeConfig, navigatorConfig);

export default AuthorizedNavigator;
