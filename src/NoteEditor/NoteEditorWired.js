import { connect } from 'react-redux';

import { selectedNoteSelector } from './selectedNoteSelector';
import { NoteEditor } from './NoteEditor';

const mapStateToProps = state => ({
  note: selectedNoteSelector(state),
});

export const NoteEditorWired = connect(
  mapStateToProps,
  null,
)(NoteEditor);
