import { mount } from '../helper/mount';
import { matchSnapshot } from '../helper/matchSnapshot';

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
      const wrapper = mount(<NoteEditor note={note} />);

      expect(
        wrapper
          .find('Button')
          .last()
          .prop('disabled'),
      ).toEqual(true);
    });

    it('should enable the save button when title change', () => {
      const wrapper = mount(<NoteEditor note={note} />);

      const input = wrapper.find('TextInput').first();
      input.prop('onChangeText')('New title');
      wrapper.update();

      expect(
        wrapper
          .find('Button')
          .last()
          .prop('disabled'),
      ).toEqual(false);
    });

    it('should enable the save button when content change', () => {
      const wrapper = mount(<NoteEditor note={note} />);

      const input = wrapper.find('TextInput').last();
      input.prop('onChangeText')('New content');
      wrapper.update();

      expect(
        wrapper
          .find('Button')
          .last()
          .prop('disabled'),
      ).toEqual(false);
    });

    it('should call the save callback when tapping on save button', () => {
      const callback = jest.fn();
      const wrapper = mount(<NoteEditor note={note} saveNote={callback} />);
      wrapper.setState({
        note: {
          title: 'test title',
          content: 'test content changed',
        },
      });

      wrapper
        .find('Button')
        .last()
        .prop('onPress')();

      expect(callback).toHaveBeenCalledTimes(1);
      expect(callback).toHaveBeenCalledWith({
        title: 'test title',
        content: 'test content changed',
      });
    });
  });
});
