import { NavigationActions } from 'react-navigation';

import { RootNavigator } from '../navigators/RootNavigator';
import * as types from '../actions/types';

const initialNavState = RootNavigator.router.getStateForAction(
  RootNavigator.router.getActionForPathAndParams('Loading'),
);

function NavigationReducer(state = initialNavState, action) {
  let nextState;

  switch (action.type) {
    case types.NAVIGATE_TO:
      nextState = RootNavigator.router.getStateForAction(
        NavigationActions.navigate({
          routeName: action.payload.routeName,
          params: action.params,
        }),
        state,
      );
      break;
    default:
      nextState = RootNavigator.router.getStateForAction(action, state);
      break;
  }

  return nextState || state;
}

export default NavigationReducer;
