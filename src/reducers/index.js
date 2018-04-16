import { combineReducers } from 'redux';

import NavigationReducer from './NavigationReducer';
import CounterReducer from './CounterReducer';
import NoteReducer from './NoteReducer';

export default combineReducers({
  nav: NavigationReducer,
  number: CounterReducer,
  note: NoteReducer,
});
