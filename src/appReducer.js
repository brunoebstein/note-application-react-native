import { combineReducers } from 'redux';

import { notesReducer } from './NoteListView/notesReducer';
import { selectedNoteReducer } from './NoteEditor/selectedNoteReducer';

export const appReducer = combineReducers({
  notes: notesReducer,
  selectedNote: selectedNoteReducer,
});
