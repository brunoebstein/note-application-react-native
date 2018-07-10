import { selectedNoteReducer } from './selectedNoteReducer';

describe('selectedNoteReducer', () => {
  it('should gives the notes by default', () => {
    const state = selectedNoteReducer();

    expect(state).toBeNull();
  });
});
