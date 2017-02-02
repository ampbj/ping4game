// @flow
import React, {Component} from 'react';
import {
  StyleSheet,
  TextInput,
  View
} from 'react-native';

export default class Registration extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput style={styles.textInput} placeholder="choose an id"/>
        <TextInput style={styles.textInput} placeholder="add your email"/>
        <TextInput style={styles.textInput} placeholder="current location"/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#5CD6F4'
  },
  textInput: {
    alignSelf: 'center',
    textAlign: 'center',
    width: 300,
    height: 70,
    marginTop: 50,
    borderRadius: 20,
    overflow: 'hidden',
    backgroundColor: 'white'
  }
});
