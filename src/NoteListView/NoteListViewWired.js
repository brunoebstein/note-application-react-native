import { connect } from 'react-redux';

import { notesSelector } from './notesSelector';
import { NoteListView } from './NoteListView';

const mapStateToProps = state => ({
  notes: notesSelector(state),
});

export const NoteListViewWired = connect(
  mapStateToProps,
  null,
)(NoteListView);
