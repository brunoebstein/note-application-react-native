import { selectedNoteReducer } from './selectedNoteReducer';
import { SAVE_NOTE, SELECT_NOTE } from '../actionTypes';

describe('selectedNoteReducer', () => {
  it('should gives the notes by default', () => {
    const state = selectedNoteReducer();

    expect(state).toEqual({
      title: '',
      content: '',
    });
  });

  it('should discard selected note when adding a note', () => {
    const prevState = { title: 'my new note', content: 'my content' };
    const action = {
      type: SAVE_NOTE,
      payload: { title: 'my new note', content: 'my content' },
    };

    const state = selectedNoteReducer(prevState, action);

    expect(state).toEqual({
      title: '',
      content: '',
    });
  });

  it('should select a note', () => {
    const prevState = {};
    const action = {
      type: SELECT_NOTE,
      payload: { title: 'my new note', content: 'my content' },
    };

    const state = selectedNoteReducer(prevState, action);

    expect(state).toEqual({ title: 'my new note', content: 'my content' });
  });

  it('should select a new note when empty payload', () => {
    const prevState = {};
    const action = {
      type: SELECT_NOTE,
      payload: undefined,
    };

    const state = selectedNoteReducer(prevState, action);

    expect(state).toEqual({ title: '', content: '' });
  });
});
