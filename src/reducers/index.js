import { combineReducers } from 'redux';

import NavigationReducer from './NavigationReducer';
import CounterReducer from './CounterReducer';

export default combineReducers(
  {
    nav: NavigationReducer,
    number: CounterReducer,
  }
);
