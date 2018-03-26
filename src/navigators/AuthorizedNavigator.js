import { DrawerNavigator } from 'react-navigation';

import NoteModalNavigator from './NoteModalNavigator';

const routeConfig = {
  NoteNav: {
    screen: NoteModalNavigator,
  },
}

const AuthorizedNavigator = DrawerNavigator(routeConfig);

export default AuthorizedNavigator;
