import { createStackNavigator } from 'react-navigation';

import { NoteListScreen } from '../NoteListView/NoteListScreen';
import { NoteEditorScreen } from '../NoteEditor/NoteEditorScreen';

export const NoteNavigator = createStackNavigator({
  NoteListView: NoteListScreen,
  NoteEditorView: NoteEditorScreen,
});
