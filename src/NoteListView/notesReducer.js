import { range } from '../helper/range';

// @TODO: replace with empty array
const defaultState = range(20).map(i => ({
  title: `my title ${i + 1}`,
}));

export const notesReducer = (state = defaultState, action) => {
  return state;
};
