import { NavigationActions } from 'react-navigation';

import { NoteStackNavigator } from '../navigators/NoteStackNavigator';

const initialNavState = NoteStackNavigator.router.getStateForAction(
  NoteStackNavigator.router.getActionForPathAndParams('Home')
)

const NavigationReducer = (state = initialNavState, action) => {
  let nextState;

  switch (action.type) {
    default:
      nextState = NoteStackNavigator.router.getStateForAction(action, state);
      break;
  }

  return nextState || state;
};

export default NavigationReducer;
