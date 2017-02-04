// @flow
import React, {Component} from 'react';
import {StyleSheet, Text, ScrollView} from 'react-native';
import CustomTextInput from './TextInput';
import AwesomeButton from 'react-native-awesome-button';

export default class Registration extends Component {
  constructor(props) {
    super(props);
    this.onPressButton = this.onPressButton.bind(this);
  }
  onPressButton(event) {
    console.log("here I am");
  }
  render() {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.text}>
          Welcome to ping4game!
        </Text>
        <CustomTextInput placeholder="choose an id" maxLength={30}/>
        <CustomTextInput placeholder="add your email"/>
        <CustomTextInput placeholder="current location" maxLength={30}/>
        <AwesomeButton
          backgroundStyle={styles.submitButton}
          labelStyle={styles.loginButtonLabel}
          transitionDuration={200}
          states={{
          default: {
            text: 'Log In',
            onPress: this.onPressButton,
            backgroundColor: '#087f52'
          }
        }}/>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0398bc'
  },
  text: {
    textAlign: 'center',
    marginTop: 50,
    marginBottom: 30,
    fontWeight: 'bold',
    fontSize: 16
  },
  submitButton: {
    height: 50,
    width: 200,
    alignSelf: 'center',
    marginTop: 40,
    marginBottom: 30,
    borderRadius: 10
  },
  loginButtonLabel: {
    color: 'white'
  }
});
