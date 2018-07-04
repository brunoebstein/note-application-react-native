import React from 'react';
import renderer from 'react-test-renderer';
import { NoteListView } from './NoteListView';


describe('NoteListView component', () => {
	it('should display an empty list with no note', () => {
		const list = renderer.create(<NoteListView />).toJSON();
		expect(list).toMatchSnapshot();
	})
});

