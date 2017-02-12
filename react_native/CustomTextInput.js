// @flow
import React, {Component} from 'react';
import {
  StyleSheet, 
  TextInput
} from 'react-native';

export default class CustomTextInput extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let maxLength = this.props.maxLength || 40;
    return (
        <TextInput style = {styles.textInput}
            placeholder = {this.props.placeholder} 
            maxLength = {maxLength}/>
    );
  }
}

const styles = StyleSheet.create({
  textInput: {
    alignSelf: 'center',
    textAlign: 'center',
    width: 300,
    height: 70,
    marginTop: 40,
    borderRadius: 20,
    overflow: 'hidden',
    backgroundColor: 'white',
    color: "#466068"
  }
});
