import { saveNote } from './saveNoteAction';
import { SAVE_NOTE } from '../actionTypes';

describe('save note action', () => {
  it('should return an action object with the note to save in the payload', () => {
    const note = {
      title: 'A super title',
      content: 'A super content',
    };

    const action = saveNote(note);

    expect(action).toEqual({
      type: SAVE_NOTE,
      payload: {
        title: 'A super title',
        content: 'A super content',
      },
    });
  });
});
