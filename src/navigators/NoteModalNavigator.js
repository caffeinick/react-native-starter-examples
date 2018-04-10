import { StackNavigator } from 'react-navigation';

import NoteStack from './NoteStackNavigator';
import NoteDetail from '../screens/NoteDetailScreen';
import SimpleStack from './SimpleStackNavigator';

const routeConfig = {
  NoteStack: {
    screen: NoteStack,
    navigationOptions: {
      header: null,
    },
  },
  NoteModal: {
    screen: NoteDetail,
  },
  SimpleStack: {
    screen: SimpleStack,
    navigationOptions: {
      header: null,
    },
  },
};

const navigationConfig = {
  mode: 'modal',
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

const NoteModalNavigator = StackNavigator(routeConfig, navigationConfig);

export default NoteModalNavigator;
