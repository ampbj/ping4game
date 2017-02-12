
 // @flow

import React, {Component} from 'react';
import Relay from 'react-relay';
import {AppRegistry} from 'react-native';
import Registration from "./react_native/Registration";
const {nodeEnv} = require('./backend_libs/config/util');
const graphqlURL = 
      require("./backend_libs/config/main_config")[nodeEnv].graphqlURL;
import Ping4GameRoute from './relay/Ping4GameRoute';

Relay.injectNetworkLayer(
  new Relay.DefaultNetworkLayer(graphqlURL)
);

export default class ping4game extends Component {
  render() {
    return (
      <Relay.RootContainer
           Component={Registration}
           route={new Ping4GameRoute()}
        />
    );
  }
}
AppRegistry.registerComponent('ping4game', () => ping4game);


