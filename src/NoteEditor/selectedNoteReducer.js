import { SAVE_NOTE, SELECT_NOTE } from '../actionTypes';

const defaultState = {
  title: '',
  content: '',
};

export const selectedNoteReducer = (state = defaultState, action) => {
  switch (action && action.type) {
    case SAVE_NOTE:
      return defaultState;
    case SELECT_NOTE:
      return action.payload || defaultState;
    default:
      return state;
  }
};
