import { StackNavigator } from 'react-navigation';

import SimpleScreen1 from '../screens/SimpleScreen1';
import SimpleScreen2 from '../screens/SimpleScreen2';
import SimpleScreen3 from '../screens/SimpleScreen3';

const routeConfig = {
  Simple1: SimpleScreen1,
  Simple2: SimpleScreen2,
  Simple3: SimpleScreen3,
};

const navigationConfig = {
  initialRouteName: 'Simple1',
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

const SimpleStackNavigator = StackNavigator(routeConfig, navigationConfig);

export default SimpleStackNavigator;
