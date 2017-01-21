// @flow
const {nodeEnv} = require('./util');
console.log(`Running in ${nodeEnv} mode!`);

const app = require("express")();
const schema = require("../schema");
const graphqlHTTP = require("express-graphql");
const {MongoClient} = require("mongodb");
const assert = require("assert");
const mongoConfig = require("../config/mongo")[nodeEnv];

MongoClient.connect(mongoConfig.url, (err, mPool) => {
    assert.equal(err, null);
    app.use("/graphql", graphqlHTTP({
        schema: schema,
        graphiql: true,
        context: {mPool},
    }));
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
        console.log(`server is listening on port ${PORT}`);
    });
});