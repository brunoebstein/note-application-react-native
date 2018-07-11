import { shallow } from 'enzyme';

import { NoteEditor } from './NoteEditor';

describe('a NoteEditor', () => {
  const note = {
    title: 'test title',
    content: 'test content',
  };

  describe('simple render', () => {
    it('should display the editor form when no Note', () => {
      matchSnapshot(<NoteEditor />);
    });

    it('should display the editor form for an existing note', () => {
      matchSnapshot(<NoteEditor note={note} />);
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

    it('should call the save callback when tapping on save button', () => {
      const callback = jest.fn();
      const editor = shallow(<NoteEditor note={note} saveNote={callback} />);
      editor.setState({
        note: {
          title: 'test title',
          content: 'test content changed',
        },
      });

      editor
        .find('Button')
        .last()
        .simulate('press');

      expect(callback).toHaveBeenCalledTimes(1);
      expect(callback).toHaveBeenCalledWith({
        title: 'test title',
        content: 'test content changed',
      });
    });
  });
});
