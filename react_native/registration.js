// @flow

import React, {Component} from 'react';
import {
  StyleSheet,
  TextInput,
  View
} from 'react-native';

export default class registration extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput style={styles.textInput}/>
        <TextInput style={styles.textInput}/>
        <TextInput style={styles.textInput}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5CD6F4'
  },
  textInput: {
    width: 200, 
    height: 50, 
    margin: 20,
    backgroundColor: 'white'
  }
});