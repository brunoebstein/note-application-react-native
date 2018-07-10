import React from 'react';
import { Provider } from 'react-redux';
import { create } from 'react-test-renderer';
import { createStore } from 'redux';

import { NoteEditorWired } from './NoteEditorWired';

describe('NoteEditorWired component', () => {
  function matchSnapshot(state) {
    const store = createStore(() => state);

    const wrapper = create(
      <Provider store={store}>
        <NoteEditorWired />
      </Provider>,
    ).toJSON();

    expect(wrapper).toMatchSnapshot();
  }

  it('should render an empty form without selected note', () => {
    const state = {
      notes: [{ title: 'a title', content: 'a content' }],
      selectedNote: null,
    };

    matchSnapshot(state);
  });

  it('should render a prefilled form with selected note', () => {
    const state = {
      notes: [{ title: 'a title', content: 'a content' }],
      selectedNote: { title: 'a title', content: 'a content' },
    };

    matchSnapshot(state);
  });
});
