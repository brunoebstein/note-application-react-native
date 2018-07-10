import React, { Component } from 'react';
import { View, TextInput, StyleSheet, Button } from 'react-native';
import PropTypes from 'prop-types';
import isEqual from 'lodash.isequal';

export class NoteEditor extends Component {
  static propTypes = {
    note: PropTypes.shape({
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    }),
  };

  constructor(props) {
    super(props);

    const note = props.note;
    this.state = { note };
  }

  componentWillReceiveProps(newProps) {
    const note = newProps.note;
    this.setState({ note });
  }

  render() {
    const { note: propsNote } = this.props;
    const { note: stateNote, note: { title, content } = {} } = this.state;

    return (
      <View style={styles.container}>
        <TextInput
          placeholder="Title"
          defaultValue={title}
          onChangeText={this._updateTitle}
        />
        <View style={styles.contentInput}>
          <TextInput
            placeholder="Content"
            multiline={true}
            defaultValue={content}
            onChangeText={this._updateContent}
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
            disabled={isEqual(stateNote, propsNote)}
          />
        </View>
      </View>
    );
  }

  _updateTitle = title => {
    this.setState(state => ({
      ...state,
      note: {
        ...state.note,
        title,
      },
    }));
  };

  _updateContent = content => {
    this.setState(state => ({
      ...state,
      note: {
        ...state.note,
        content,
      },
    }));
  };
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