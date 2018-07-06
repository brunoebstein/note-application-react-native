/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { NoteListView } from './src/NoteListView/NoteListView';
import { range } from './src/helper/range';

type Props = {};
export default class App extends Component<Props> {
  render() {
    const notes = range(20).map(i => ({
      title: `my title ${i + 1}`,
    }));
    return <NoteListView notes={notes} />;
  }
}
