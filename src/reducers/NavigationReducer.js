import { NavigationActions } from 'react-navigation';

import { RootNavigator} from '../navigators/RootNavigator';

const initialNavState = RootNavigator.router.getStateForAction(RootNavigator.router.getActionForPathAndParams('Loading'));

function NavigationReducer(state = initialNavState, action) {
  let nextState;

  switch (action.type) {
    case 'Loading':
      nextState = RootNavigator.router.getStateForAction(
        NavigationActions.navigate('Loading'),
        state
      );
      break;
    default:
      nextState = RootNavigator.router.getStateForAction(action, state);
      break;
  }

  return nextState || state;
}

export default NavigationReducer;
