
 // @flow

import React, {Component} from 'react';
import Relay from 'react-relay';
import {AppRegistry} from 'react-native';
import Registration from "./react_native/Registration";
const {nodeEnv} = require('./backend_libs/config/util');
const graphqlURL = 
      require("./backend_libs/config/main_config")[nodeEnv].graphqlURL;
import RegistrationRoute from './relay/relayRoute';

Relay.injectNetworkLayer(
  new Relay.DefaultNetworkLayer(graphqlURL)
);

export default class ping4game extends Component {
  render() {
    let RegistrationRoute = new RegistrationRoute();
    return (
      <Relay.RootContainer
           Component={Registration}
           route={RegistrationRoute}
        />
    );
  }
}
AppRegistry.registerComponent('ping4game', () => ping4game);


