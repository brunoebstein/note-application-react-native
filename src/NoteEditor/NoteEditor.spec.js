import React from 'react';
import renderer from 'react-test-renderer';

import { NoteEditor } from './NoteEditor';

describe('a NoteEditor', () => {
  const note = {
    title: 'test title',
    content: 'test content',
  };

  describe('simple render', () => {
    it('should display the editor form when no Note', () => {
      const editor = renderer.create(<NoteEditor />).toJSON();
      expect(editor).toMatchSnapshot();
    });

    it('should display the editor form for an existing note', () => {
      const editor = renderer.create(<NoteEditor note={note} />).toJSON();
      expect(editor).toMatchSnapshot();
    });
  });
});
