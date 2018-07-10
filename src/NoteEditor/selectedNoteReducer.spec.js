import { selectedNoteReducer } from './selectedNoteReducer';

describe('selectedNoteReducer', () => {
  it('should gives the notes by default', () => {
    const state = selectedNoteReducer();

    expect(state).toBeNull();
  });

  it('should discard selected note when adding a note', () => {
    const prevState = { title: 'my new note', content: 'my content' };
    const action = {
      type: 'SAVE_NOTE',
      payload: { title: 'my new note', content: 'my content' },
    };

    const state = selectedNoteReducer(prevState, action);

    expect(state).toBeNull();
  });
});
