import * as types from '../actions/types';

const initialState = '';

const NoteReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.NOTE_TEXT_CHANGE:
      return action.payload;
    case types.NOTE_LOAD:
      return action.payload;
    default:
      return state;
  }
};

export default NoteReducer;
