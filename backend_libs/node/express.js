// @flow
const {nodeEnv} = require('../config/util');
/*eslint-disable */
console.log(`Running in ${nodeEnv} mode!`);
/*eslint-enable */
const app = require("express")();
const schema = require("../schema/model");
const graphqlHTTP = require("express-graphql");
const {MongoClient, Logger} = require("mongodb");
const assert = require("assert");
const mongoConfig = require("../config/main_config")[nodeEnv].mongoURL;

// app entry file!
// Here we use MongoClient express graphql and node assertion library

MongoClient.connect(mongoConfig, (err, mPool) => {
    // using asser to let us know if err is not equal to null.
    assert.equal(err, null);
    // debugger for mongo to stdout
    Logger.setLevel("debug");
    Logger.filter("class", ["Server"]);
    app.use("/graphql", graphqlHTTP({
        schema: schema,
        graphiql: true,
        context: {mPool}
    }));
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
        /*eslint-disable */
        console.log(`server is listening on port ${PORT}`);
        /*eslint-enable */
    });
});