/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import { NoteListView } from './src/NoteListView/NoteListView';


type Props = {};
export default class App extends Component<Props> {
	render() {
		return <NoteListView/>
	}
}
