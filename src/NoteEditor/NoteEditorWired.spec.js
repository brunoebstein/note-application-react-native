import { Provider } from 'react-redux';
import { createStore } from 'redux';

import { NoteEditorWired } from './NoteEditorWired';

describe('NoteEditorWired component', () => {
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
