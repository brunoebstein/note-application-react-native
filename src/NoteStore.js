import React from 'react';
import { Provider as StoreProvider } from 'react-redux';
import { createStore } from 'redux';

import { notesReducer } from './NoteListView/notesReducer';

const store = createStore(notesReducer);

export const NoteStore = ({ children }) => (
  <StoreProvider store={store}>{children}</StoreProvider>
);
