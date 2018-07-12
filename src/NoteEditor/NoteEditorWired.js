import { connect } from 'react-redux';

import { selectedNoteSelector } from './selectedNoteSelector';
import { saveNote } from './saveNoteAction';
import { NoteEditor } from './NoteEditor';

const mapStateToProps = state => ({
  note: selectedNoteSelector(state),
});

export const NoteEditorWired = connect(
  mapStateToProps,
  { saveNote },
)(NoteEditor);
