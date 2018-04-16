import * as types from '../actions/types';

const initialState = 'Type here..';

const NoteReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.NOTE_TEXT_CHANGE:
      return state;
    default:
      return state;
  }
};

export default NoteReducer;
