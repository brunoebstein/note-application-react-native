import { range } from '../helper/range';

const notes = range(20).map(i => ({
  title: `my title ${i + 1}`,
}));

const defaultState = {
  notes, // @TODO: replace with empty array
};

export const notesReducer = (state = defaultState, action) => {
  return state;
};
