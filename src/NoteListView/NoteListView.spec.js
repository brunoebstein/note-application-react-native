import { ThemeProvider } from 'styled-components';

import { range } from '../helper/range';
import { matchSnapshot } from '../helper/matchSnapshot';
import { mount } from '../helper/mount';

import { NoteListView } from './NoteListView';

describe('NoteListView component', () => {
  describe('simple render', () => {
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

  describe('behavior', () => {
    it('should call the select callback when tapping on a note', () => {
      const notes = [
        { title: 'my title 1', content: 'my content 1' },
        { title: 'my title 2', content: 'my content 2' },
      ];
      const callback = jest.fn();
      const wrapper = mount(
        <ThemeProvider theme={{}}>
          <NoteListView notes={notes} selectNote={callback} />
        </ThemeProvider>,
      );
      const secondNote = wrapper.find('Text').last();

      secondNote.prop('onPress')();
      // @TODO: find a way to replace the previous line by the following
      // secondNote.simulate('press');

      expect(callback).toHaveBeenCalledTimes(1);
      expect(callback).toHaveBeenCalledWith({
        title: 'my title 2',
        content: 'my content 2',
      });
    });
  });
});
