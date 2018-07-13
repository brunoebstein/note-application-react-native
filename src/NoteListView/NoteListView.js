import React from 'react';
import { Button, ScrollView, FlatList } from 'react-native';
import styled, { withTheme } from 'styled-components/native';
import get from 'lodash.get';
import PropTypes from 'prop-types';

const NoteListContainer = styled.View`
  flex: 1;
  background-color: ${props => get(props, 'theme.main.bgColor', 'white')};
`;

const NoNote = styled.Text`
  margin: 10px;
  font-size: 20px;
  text-align: center;
  color: ${props => get(props, 'theme.main.fgColor', 'black')};
`;

const NoteTitle = styled.Text`
  padding: 20px;
  font-size: 26px;
  color: ${props => get(props, 'theme.main.fgColor', 'black')};
  border-bottom-color: ${props => get(props, 'theme.main.fgColor', 'black')};
  border-bottom-width: 1px;
`;

const FloatingActionButton = styled.View`
  position: absolute;
  bottom: 20px;
  right: 20px;
`;

const NoteListViewWithoutTheme = ({
  notes,
  theme,
  selectNote,
  onSelectedNote,
}) => (
  <NoteListContainer>
    {!notes || notes.length === 0 ? (
      <NoNote>Vous n'avez pas de notes</NoNote>
    ) : (
      <ScrollView>
        <FlatList
          data={notes}
          renderItem={({ item: note }) => (
            <NoteTitle
              onPress={() => {
                if (typeof selectNote !== 'function') return;

                selectNote(note);

                if (typeof onSelectedNote === 'function') {
                  onSelectedNote();
                }
              }}
              key={note.title}
            >
              {note.title}
            </NoteTitle>
          )}
          keyExtractor={note => note.title}
        />
      </ScrollView>
    )}
    <FloatingActionButton>
      <Button
        onPress={() => {
          selectNote();

          if (typeof onSelectedNote === 'function') {
            onSelectedNote();
          }
        }}
        title="Create"
        color={get(theme, 'primary.color')}
      />
    </FloatingActionButton>
  </NoteListContainer>
);

NoteListViewWithoutTheme.propTypes = {
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
    }),
  ),
  selectNote: PropTypes.func,
  onSelectedNote: PropTypes.func,
};

export const NoteListView = withTheme(NoteListViewWithoutTheme);
