import React from 'react'
import {
	StyleSheet,
	Text,
	View,
	Button,
} from 'react-native';


export const NoteListView = () => (
	<View style={styles.container}>
		<Text style={styles.welcome}>
			Vous n'avez pas de notes
		</Text>
		<View style={styles.addNoteButton}>
			<Button
				onPress={() => null}
				title="Create"
			/>
		</View>
	</View>
)


const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
	},
	addNoteButton: {
		position: 'absolute',
		bottom: 20,
		right: 20,
	},
});
