// @flow
import React, {Component} from 'react';
import {StyleSheet, Text, ScrollView} from 'react-native';
import CustomTextInput from './CustomTextInput';
import AwesomeButton from 'react-native-awesome-button';
import AddUserMutation from '../relay/AddUserMutation';

export default class Registration extends Component {
  constructor(props) {
    super(props);
    this.state = {
        buttonState: 'default'
    };
    this.onPressButton = this.onPressButton.bind(this);
  }
  onPressButton(event) {
    this.setState({buttonState: "logging"});
     this.props.relay.commitUpdate(
      new AddUserMutation(
        {
          name: this.state.name,
          email: this.state.email,
          location: this.state.location
        })
    );
  }
  render() {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.text}>
          Welcome to ping4game!
        </Text>
        <CustomTextInput placeholder="choose an id" 
            onChangeText={(value) => this.setState({name: value})}
            maxLength={30}/>
        <CustomTextInput placeholder="add your email" 
            onChangeText={(value) => this.setState({email: value})}/>
        <CustomTextInput placeholder="current location" 
            onChangeText={(value) => this.setState({location: value})}
            maxLength={30}/>
        <AwesomeButton
          buttonState={this.state.buttonState}
          transitionDuration={200}
          backgroundStyle={styles.submitButton}
          labelStyle={styles.loginButtonLabel}
          states={{
            default: {
              text: 'Log In',
              onPress: this.onPressButton,
              backgroundColor: '#087f52'
            },
            logging: {
              text: 'Logging In',
              backgroundColor: '#002299'
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
    height: 40,
    width: 180,
    alignSelf: 'center',
    marginTop: 40,
    marginBottom: 30,
    borderRadius: 10
  },
  loginButtonLabel: {
    color: 'white'
  }
});
