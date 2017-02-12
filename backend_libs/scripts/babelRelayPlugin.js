// @flow

const getBabelRelayPlugin = require('babel-relay-plugin');
const introspectionQuery = require('graphql/utilities').introspectionQuery;
const request = require('sync-request');
const {nodeEnv} = require('../config/util');
const graphqlUrl = require("../config/main_config")[nodeEnv].graphqlURL;


const response = request('POST', graphqlUrl, {
  json: {
    query: introspectionQuery
  }
});
const schema = JSON.parse(response.body.toString('utf-8'));
module.exports = {
  plugins: [getBabelRelayPlugin(schema.data, {abortOnError: true})]
};