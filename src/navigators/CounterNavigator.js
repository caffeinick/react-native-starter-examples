import { StackNavigator } from 'react-navigation';

import CounterScreen from '../screens/CounterScreen';
import CounterReduxScreen from '../screens/CounterReduxScreen';

const routeConfig = {
  Counter: CounterScreen,
  CounterRedux: CounterReduxScreen,
};

const navigationConfig = {
  initialRouteName: 'Counter',
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

const CounterNavigator = StackNavigator(routeConfig, navigationConfig);

export default CounterNavigator;
