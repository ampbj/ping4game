/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {AppRegistry} from 'react-native';
import Registration from "./react_native/Registration";

export default class ping4game extends Component {
  render() {
    return (
      <Registration />
    );
  }
}
AppRegistry.registerComponent('ping4game', () => ping4game);
