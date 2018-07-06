/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { NoteListView } from './src/NoteListView/NoteListView';

type Props = {};
export default class App extends Component<Props> {
  render() {
    const notes = [...Array(1).keys()].map(i => ({
      title: `my title ${i + 1}`,
    }));
    return <NoteListView notes={notes} />;
  }
}
