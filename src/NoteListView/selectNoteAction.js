import { SELECT_NOTE } from '../actionTypes';

export const selectNote = note => ({
  type: SELECT_NOTE,
  payload: note,
});
