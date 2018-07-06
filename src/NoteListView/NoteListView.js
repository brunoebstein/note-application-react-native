import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
  FlatList,
} from 'react-native';
import PropTypes from 'prop-types';

export const NoteListView = ({ notes }) => (
  <View style={styles.container}>
    {!notes || notes.length === 0 ? (
      <Text style={styles.welcome}>Vous n'avez pas de notes</Text>
    ) : (
      <ScrollView>
        <FlatList
          data={notes}
          renderItem={({ item: note }) => (
            <Text style={styles.noteTitle}>{note.title}</Text>
          )}
          keyExtractor={note => note.title}
        />
      </ScrollView>
    )}
    <View style={styles.addNoteButton}>
      <Button
        onPress={() => {
          debugger;
        }}
        title="Create"
      />
    </View>
  </View>
);

NoteListView.propTypes = {
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
    }),
  ),
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  noteTitle: {
    fontSize: 26,
    padding: 20,
    borderBottomColor: 'darkgrey',
    borderBottomWidth: 1,
  },
  addNoteButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
});
