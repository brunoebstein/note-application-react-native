import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

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

  describe('behavior', () => {
    it('should have a disabled save button', () => {
      const editor = shallow(<NoteEditor note={note} />);

      expect(
        editor
          .find('Button')
          .last()
          .prop('disabled'),
      ).toEqual(true);
    });

    it('should enable the save button when title change', () => {
      const editor = shallow(<NoteEditor note={note} />);

      editor.setState({
        note: {
          title: 'test title changed',
          content: 'test content',
        },
      });

      expect(
        editor
          .find('Button')
          .last()
          .prop('disabled'),
      ).toEqual(false);
    });

    it('should enable the save button when content change', () => {
      const editor = shallow(<NoteEditor note={note} />);

      editor.setState({
        note: {
          title: 'test title',
          content: 'test content changed',
        },
      });

      expect(
        editor
          .find('Button')
          .last()
          .prop('disabled'),
      ).toEqual(false);
    });
  });
});
