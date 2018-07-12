import { Provider } from 'react-redux';
import { createStore } from 'redux';

import { matchSnapshot } from '../helper/matchSnapshot';
import { mount } from '../helper/mount';

import { NoteEditorWired } from './NoteEditorWired';

describe('NoteEditorWired component', () => {
  describe('simple render', () => {
    function matchSnapshotWithProvider(state) {
      const store = createStore(() => state);

      matchSnapshot(
        <Provider store={store}>
          <NoteEditorWired />
        </Provider>,
      );
    }

    it('should render an empty form without selected note', () => {
      const state = {
        notes: [{ title: 'a title', content: 'a content' }],
        selectedNote: null,
      };

      matchSnapshotWithProvider(state);
    });

    it('should render a prefilled form with selected note', () => {
      const state = {
        notes: [{ title: 'a title', content: 'a content' }],
        selectedNote: { title: 'a title', content: 'a content' },
      };

      matchSnapshotWithProvider(state);
    });
  });

  describe('behavior', () => {
    it('should dispatch save action when tapping on save button', () => {
      const selectedNote = {
        title: 'test title',
        content: 'test content',
      };
      const state = {
        selectedNote,
      };
      const store = createStore(() => state);
      store.dispatch = jest.fn();
      const wrapper = mount(
        <Provider store={store}>
          <NoteEditorWired />
        </Provider>,
      );
      const input = wrapper.find('TextInput').first();
      input.prop('onChangeText')('New title');
      const saveButton = wrapper.find('Button').last();

      saveButton.prop('onPress')();

      expect(store.dispatch).toHaveBeenCalledTimes(1);
      expect(store.dispatch).toHaveBeenCalledWith({
        type: 'SAVE_NOTE',
        payload: {
          title: 'New title',
          content: 'test content',
        },
      });
    });
  });
});
