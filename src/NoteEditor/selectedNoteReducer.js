const defaultState = null;

export const selectedNoteReducer = (state = defaultState, action) => {
  switch (action && action.type) {
    case 'SAVE_NOTE':
      return null;
    default:
      return state;
  }
};
