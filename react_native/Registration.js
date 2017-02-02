// @flow
import React, {Component} from 'react';
import {
  StyleSheet, 
  TextInput, TouchableHighlight,
  Text, Button, View
} from 'react-native';

export default class Registration extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          Welcome to ping4game!
        </Text>
        <TextInput style={styles.textInput} placeholder="choose an id"/>
        <TextInput style={styles.textInput} placeholder="add your email"/>
        <TextInput style={styles.textInput} placeholder="current location"/>
        <TouchableHighlight onPress={this.onPressButton}>
          <View>
          <Button style={styles.submitButton} title="Submit"></Button>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
  onButtonPress(event) {}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#0398bc'
  },
  textInput: {
    alignSelf: 'center',
    textAlign: 'center',
    width: 300,
    height: 70,
    marginTop: 40,
    borderRadius: 20,
    overflow: 'hidden',
    backgroundColor: 'white'
  },
  text: {
    textAlign: 'center',
    marginTop: 80,
    marginBottom: 50,
    fontWeight: 'bold',
    fontSize: 16
  },
  submitButton: {
    textAlign: 'center',
    color: '#008080',
    marginTop: 40
  }
});
