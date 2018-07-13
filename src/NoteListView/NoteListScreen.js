import React, { Component } from 'react';

import { themedNavigationOptions } from '../NoteNavigator/themedNavigationOptions';
import { NoteListViewWired } from '../NoteListView/NoteListViewWired';

export class NoteListScreen extends Component {
  static navigationOptions = themedNavigationOptions({
    title: 'Notes',
  });

  render() {
    const {
      navigation: { navigate },
    } = this.props;
    return (
      <NoteListViewWired onSelectedNote={() => navigate('NoteEditorView')} />
    );
  }
}
