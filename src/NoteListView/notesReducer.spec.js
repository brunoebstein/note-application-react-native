import { notesReducer } from './notesReducer';
import { SAVE_NOTE } from '../actionTypes';

describe('notesReducer', () => {
  it('should gives an empty array by default', () => {
    const state = notesReducer();

    expect(state).toEqual([]);
  });

  it('should add a note to the list', () => {
    const action = {
      type: SAVE_NOTE,
      payload: { title: 'my new note', content: 'my content' },
    };

    const state = notesReducer(undefined, action);

    expect(state).toEqual([{ title: 'my new note', content: 'my content' }]);
  });
});
