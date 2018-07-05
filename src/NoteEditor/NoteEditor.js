import React, { Component } from 'react';
import { View, TextInput, StyleSheet, Button } from 'react-native';
import PropTypes from 'prop-types';

export class NoteEditor extends Component {
  static propTypes = {
    note: PropTypes.shape({
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    }),
  };

  render() {
    const { note: { title, content } = {} } = this.props;
    return (
      <View style={styles.container}>
        <TextInput placeholder="Title" defaultValue={title} />
        <View style={styles.contentInput}>
          <TextInput
            placeholder="Content"
            multiline={true}
            defaultValue={content}
          />
        </View>
        <View style={styles.buttonGroup}>
          <Button
            onPress={() => {
              debugger;
            }}
            title="Cancel"
          />
          <Button
            onPress={() => {
              debugger;
            }}
            title="Save"
            disabled={true}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  contentInput: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
