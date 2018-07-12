import { connect } from 'react-redux';

import { notesSelector } from './notesSelector';
import { selectNote } from './selectNoteAction.js';
import { NoteListView } from './NoteListView';

const mapStateToProps = state => ({
  notes: notesSelector(state),
});

export const NoteListViewWired = connect(
  mapStateToProps,
  { selectNote },
)(NoteListView);
