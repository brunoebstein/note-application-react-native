/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Platform } from 'react-native';
import styled, { css } from 'styled-components/native';

import { NoteListView } from './src/NoteListView/NoteListView';
import { range } from './src/helper/range';

const Root = styled.View`
  flex: 1;

  ${Platform.select({
    ios: css`
      padding-top: 20;
    `,
  })};
`;

type Props = {};
export default class App extends Component<Props> {
  render() {
    const notes = range(20).map(i => ({
      title: `my title ${i + 1}`,
    }));
    return (
      <Root>
        <NoteListView notes={notes} />
      </Root>
    );
  }
}
