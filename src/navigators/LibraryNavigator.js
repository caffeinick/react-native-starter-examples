import { StackNavigator } from 'react-navigation';

import LibraryListScreen from '../screens/LibraryListScreen';
import LibraryDetailScreen from '../screens/LibraryDetailScreen';

const routeConfig = {
  LibraryList: {
    screen: LibraryListScreen,
  },
  LibraryDetail: {
    screen: LibraryDetailScreen,
  },
};

const navigationConfig = {
  initialRouteName: 'LibraryList',
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

const LibraryNavigator = StackNavigator(routeConfig, navigationConfig);

export default LibraryNavigator;
