// @flow
import React, {Component} from 'react';
import {StyleSheet, Text, ScrollView} from 'react-native';
import CustomTextInput from './TextInput';
import AwesomeButton from 'react-native-awesome-button';

export default class Registration extends Component {
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
          idle: {
            text: 'Log In',
            onPress: this.onPressButton,
            backgroundColor: '#027046'
          },
          busy: {
            text: 'Logging In',
            backgroundColor: '#002299',
            spinner: true
          },
          success: {
            text: 'Logged In',
            backgroundColor: '#339944'
          }
        }}></AwesomeButton>
      </ScrollView>
    );
  }
  onPressButton(event) {}
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
    width: 150,
    alignSelf: 'center',
    marginTop: 30,
    marginBottom: 30,
    borderRadius: 10,
    borderColor: 'black'
  },
  loginButtonLabel: {
    color: 'white'
  }
});
