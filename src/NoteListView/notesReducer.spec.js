import { notesReducer } from './notesReducer';

describe('notesReducer', () => {
  it('should gives an empty array by default', () => {
    const result = notesReducer();

    expect(result).toEqual([]);
  });
});
