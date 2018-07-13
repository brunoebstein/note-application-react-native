import './ReactotronConfig';

import React from 'react';
import { Platform } from 'react-native';
import styled, { css, ThemeProvider } from 'styled-components/native';

import { NoteStore } from './src/NoteStore';
import { NoteNavigator } from './src/NoteNavigator/NoteNavigator';

const theme = {
  main: {
    fgColor: '#FFF',
    bgColor: '#222',
  },
  primary: {
    color: 'royalblue',
  },
};

const SystemBarFixer = styled.View`
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
      <SystemBarFixer>
        <NoteNavigator screenProps={{ theme }} />
      </SystemBarFixer>
    </NoteStore>
  </ThemeProvider>
);

export default App;
