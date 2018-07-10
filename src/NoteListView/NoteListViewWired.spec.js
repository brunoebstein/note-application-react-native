import React from 'react';
import { Provider } from 'react-redux';
import { create } from 'react-test-renderer';
import { createStore } from 'redux';
import { ThemeProvider } from 'styled-components';

import { NoteListViewWired } from './NoteListViewWired';

describe('NoteListViewWired component', () => {
  function matchSnapshot(state) {
    const store = createStore(() => state);

    const list = create(
      <ThemeProvider theme={{}}>
        <Provider store={store}>
          <NoteListViewWired />
        </Provider>
      </ThemeProvider>,
    ).toJSON();

    expect(list).toMatchSnapshot();
  }

  it('should render a message with an empty list', () => {
    const state = {
      notes: [],
      selectedNote: null,
    };

    matchSnapshot(state);
  });

  it('should render a list of notes', () => {
    const state = {
      notes: [
        { title: 'a title 1', content: 'a content 1' },
        { title: 'a title 2', content: 'a content 2' },
      ],
      selectedNote: null,
    };

    matchSnapshot(state);
  });
});
