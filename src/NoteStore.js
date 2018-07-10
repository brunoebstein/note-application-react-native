import React from 'react';
import { Provider as StoreProvider } from 'react-redux';
import { createStore } from 'redux';

import { notesReducer } from './NoteListView/notesReducer';

const store = createStore(
  notesReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export const NoteStore = ({ children }) => (
  <StoreProvider store={store}>{children}</StoreProvider>
);
