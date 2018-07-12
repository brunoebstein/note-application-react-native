import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { ThemeProvider } from 'styled-components';

import { matchSnapshot } from '../helper/matchSnapshot';
import { mount } from '../helper/mount';

import { NoteListViewWired } from './NoteListViewWired';

describe('NoteListViewWired component', () => {
  describe('simple render', () => {
    function matchSnapshotWithProvider(state) {
      const store = createStore(() => state);

      matchSnapshot(
        <ThemeProvider theme={{}}>
          <Provider store={store}>
            <NoteListViewWired />
          </Provider>
        </ThemeProvider>,
      );
    }

    it('should render a message with an empty list', () => {
      const state = {
        notes: [],
        selectedNote: null,
      };

      matchSnapshotWithProvider(state);
    });

    it('should render a list of notes', () => {
      const state = {
        notes: [
          { title: 'a title 1', content: 'a content 1' },
          { title: 'a title 2', content: 'a content 2' },
        ],
        selectedNote: null,
      };

      matchSnapshotWithProvider(state);
    });
  });

  describe('behavior', () => {
    it('should dispatch select note action when tapping on a note title', () => {
      const notes = [
        { title: 'my title 1', content: 'my content 1' },
        { title: 'my title 2', content: 'my content 2' },
      ];
      const state = {
        notes,
      };
      const store = createStore(() => state);
      const callback = jest.fn();
      store.dispatch = callback;
      const wrapper = mount(
        <Provider store={store}>
          <ThemeProvider theme={{}}>
            <NoteListViewWired />
          </ThemeProvider>
        </Provider>,
      );
      const firstNote = wrapper.find('Text').first();

      firstNote.prop('onPress')();
      // @TODO: find a way to replace the previous line by the following
      // firstNote.simulate('press');

      expect(callback).toHaveBeenCalledTimes(1);
      expect(callback).toHaveBeenCalledWith({
        type: 'SELECT_NOTE',
        payload: {
          title: 'my title 1',
          content: 'my content 1',
        },
      });
    });

    it('should dispatch select note action with an empty object when tapping on the create button', () => {
      const notes = [
        { title: 'my title 1', content: 'my content 1' },
        { title: 'my title 2', content: 'my content 2' },
      ];
      const state = {
        notes,
      };
      const store = createStore(() => state);
      const callback = jest.fn();
      store.dispatch = callback;
      const wrapper = mount(
        <Provider store={store}>
          <ThemeProvider theme={{}}>
            <NoteListViewWired />
          </ThemeProvider>
        </Provider>,
      );
      const createButton = wrapper.find('Button').first();

      createButton.prop('onPress')();
      // @TODO: find a way to replace the previous line by the following
      // createButton.simulate('press');

      expect(callback).toHaveBeenCalledTimes(1);
      expect(callback).toHaveBeenCalledWith({
        type: 'SELECT_NOTE',
        payload: undefined,
      });
    });
  });
});
