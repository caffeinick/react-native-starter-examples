import * as types from './types';

export const noteTextChange = ({ text }) => ({
  type: types.NOTE_TEXT_CHANGE,
  payload: text,
});
