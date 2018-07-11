import { ThemeProvider } from 'styled-components';

import { NoteListView } from './NoteListView';
import { range } from '../helper/range';

describe('NoteListView component', () => {
  function matchSnapshotWithProvider(element) {
    matchSnapshot(<ThemeProvider theme={{}}>{element}</ThemeProvider>);
  }

  it('should display an empty list when no note', () => {
    matchSnapshotWithProvider(<NoteListView />);
  });

  it('should display title note when 1 note', () => {
    const notes = [{ title: 'my title' }];
    matchSnapshotWithProvider(<NoteListView notes={notes} />);
  });

  it('should display title note when 2 notes', () => {
    const notes = [{ title: 'my title' }, { title: 'my title 2' }];
    matchSnapshotWithProvider(<NoteListView notes={notes} />);
  });

  it('should display title note when many notes', () => {
    const notes = range(20).map(i => ({ title: `my title ${i}` }));
    matchSnapshotWithProvider(<NoteListView notes={notes} />);
  });
});
