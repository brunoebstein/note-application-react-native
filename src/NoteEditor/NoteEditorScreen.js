import React, { Component } from 'react';

import { themedNavigationOptions } from '../NoteNavigator/themedNavigationOptions';
import { NoteEditorWired } from '../NoteEditor/NoteEditorWired';

export class NoteEditorScreen extends Component {
  static navigationOptions = themedNavigationOptions({
    title: 'Edit note',
  });

  render() {
    const {
      navigation: { navigate, goBack },
    } = this.props;
    return (
      <NoteEditorWired
        onSavedNote={() => navigate('NoteListView')}
        onCancel={() => goBack()}
      />
    );
  }
}
