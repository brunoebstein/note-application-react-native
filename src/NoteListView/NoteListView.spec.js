import { ThemeProvider } from 'styled-components';

import { NoteListView } from './NoteListView';
import { range } from '../helper/range';

describe('NoteListView component', () => {
  function matchSnapshot(element) {
    const wrapper = shallow(
      <ThemeProvider theme={{}}>{element}</ThemeProvider>,
    );
    expect(wrapper).toMatchSnapshot();
  }

  it('should display an empty list when no note', () => {
    matchSnapshot(<NoteListView />);
  });

  it('should display title note when 1 note', () => {
    const notes = [{ title: 'my title' }];
    matchSnapshot(<NoteListView notes={notes} />);
  });

  it('should display title note when 2 notes', () => {
    const notes = [{ title: 'my title' }, { title: 'my title 2' }];
    matchSnapshot(<NoteListView notes={notes} />);
  });

  it('should display title note when many notes', () => {
    const notes = range(20).map(i => ({ title: `my title ${i}` }));
    matchSnapshot(<NoteListView notes={notes} />);
  });
});
