import { SELECT_NOTE } from '../actionTypes';
import { selectNote } from './selectNoteAction';

describe('Select note action', () => {
  it('should return an action object with the note to select in the payload', () => {
    const note = {
      title: 'A super title',
      content: 'A super content',
    };

    const action = selectNote(note);

    expect(action).toEqual({
      type: SELECT_NOTE,
      payload: {
        title: 'A super title',
        content: 'A super content',
      },
    });
  });
});
