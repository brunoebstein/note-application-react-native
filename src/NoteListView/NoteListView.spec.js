import React from 'react';
import renderer from 'react-test-renderer';
import { NoteListView } from './NoteListView';

describe('NoteListView component', () => {
  it('should display an empty list when no note', () => {
    const list = renderer.create(<NoteListView />).toJSON();
    expect(list).toMatchSnapshot();
  });

  it('should display title note when 1 note', () => {
    const notes = [{ title: 'my title' }];
    const list = renderer.create(<NoteListView notes={notes} />).toJSON();
    expect(list).toMatchSnapshot();
  });

  it('should display title note when 2 notes', () => {
    const notes = [{ title: 'my title' }, { title: 'my title 2' }];
    const list = renderer.create(<NoteListView notes={notes} />).toJSON();
    expect(list).toMatchSnapshot();
  });

  it('should display title note when many notes', () => {
    const notes = [...Array(20).keys()].map(i => ({ title: `my title ${i}` }));
    const list = renderer.create(<NoteListView notes={notes} />).toJSON();
    expect(list).toMatchSnapshot();
  });
});
