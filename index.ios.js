/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {AppRegistry} from 'react-native';
import registration from "./react_native/registration";

export default class ping4game extends Component {
  render() {
    return (
      <registration></registration>
    );
  }
}
AppRegistry.registerComponent('ping4game', () => ping4game);
