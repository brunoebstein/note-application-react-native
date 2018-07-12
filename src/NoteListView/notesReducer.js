import { SAVE_NOTE } from '../actionTypes';

const defaultState = [];

export const notesReducer = (state = defaultState, action) => {
  switch (action && action.type) {
    case SAVE_NOTE:
      return state.concat(action.payload);
    default:
      return state;
  }
};
