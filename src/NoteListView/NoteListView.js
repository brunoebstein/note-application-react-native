import React from 'react';
import { Button, ScrollView, FlatList } from 'react-native';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';

const NoteListContainer = styled.View`
  flex: 1;
  justify-content: flex-start;
  align-items: stretch;
  background-color: #f5fcff;
`;

const NoNote = styled.Text`
  font-size: 20;
  text-align: center;
  margin: 10px;
`;

const NoteTitle = styled.Text`
  padding: 20px;
  font-size: 26;
  border-bottom-color: darkgrey;
  border-bottom-width: 1;
`;

const AddNoteButton = styled.View`
  position: absolute;
  bottom: 20;
  right: 20;
`;

export const NoteListView = ({ notes }) => (
  <NoteListContainer>
    {!notes || notes.length === 0 ? (
      <NoNote>Vous n'avez pas de notes</NoNote>
    ) : (
      <ScrollView>
        <FlatList
          data={notes}
          renderItem={({ item: note }) => <NoteTitle>{note.title}</NoteTitle>}
          keyExtractor={note => note.title}
        />
      </ScrollView>
    )}
    <AddNoteButton>
      <Button
        onPress={() => {
          debugger;
        }}
        title="Create"
      />
    </AddNoteButton>
  </NoteListContainer>
);

NoteListView.propTypes = {
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
    }),
  ),
};
