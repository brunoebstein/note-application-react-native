import { notesReducer } from './notesReducer';

describe('notesReducer', () => {
  it('should gives the notes by default', () => {
    const result = notesReducer();

    expect(result).toEqual({
      notes: [
        { title: 'my title 1' },
        { title: 'my title 2' },
        { title: 'my title 3' },
        { title: 'my title 4' },
        { title: 'my title 5' },
        { title: 'my title 6' },
        { title: 'my title 7' },
        { title: 'my title 8' },
        { title: 'my title 9' },
        { title: 'my title 10' },
        { title: 'my title 11' },
        { title: 'my title 12' },
        { title: 'my title 13' },
        { title: 'my title 14' },
        { title: 'my title 15' },
        { title: 'my title 16' },
        { title: 'my title 17' },
        { title: 'my title 18' },
        { title: 'my title 19' },
        { title: 'my title 20' },
      ],
    });
  });
});
