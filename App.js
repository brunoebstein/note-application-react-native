import './ReactotronConfig';

import React from 'react';
import { Platform } from 'react-native';
import styled, { css, ThemeProvider } from 'styled-components/native';

import { NoteStore } from './src/NoteStore';
import { NoteListViewWired } from './src/NoteListView/NoteListViewWired';
import { NoteEditorWired } from './src/NoteEditor/NoteEditorWired';

const theme = {
  main: {
    fgColor: '#FFF',
    bgColor: '#222',
  },
  primary: {
    color: 'royalblue',
  },
};

const Root = styled.View`
  flex: 1;

  ${Platform.select({
    ios: css`
      padding-top: 20;
    `,
  })};
`;

const App = () => (
  <ThemeProvider theme={theme}>
    <NoteStore>
      <Root>
        <NoteListViewWired />
        <NoteEditorWired />
      </Root>
    </NoteStore>
  </ThemeProvider>
);

export default App;
