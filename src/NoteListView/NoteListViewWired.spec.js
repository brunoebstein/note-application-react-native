import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { ThemeProvider } from 'styled-components';

import { NoteListViewWired } from './NoteListViewWired';

describe('NoteListViewWired component', () => {
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
