import React from 'react';
import { Provider as StoreProvider } from 'react-redux';
import { createStore } from 'redux';

import { appReducer } from './appReducer';

const store = createStore(
  appReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export const NoteStore = ({ children }) => (
  <StoreProvider store={store}>{children}</StoreProvider>
);
