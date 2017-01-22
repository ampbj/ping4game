// @flow
const {nodeEnv} = require('./util');
/*eslint-disable */
console.log(`Running in ${nodeEnv} mode!`);
/*eslint-enable */
const app = require("express")();
const schema = require("../schema/model");
const graphqlHTTP = require("express-graphql");
const {MongoClient} = require("mongodb");
const assert = require("assert");
const mongoConfig = require("../config/main_config")[nodeEnv];

MongoClient.connect(mongoConfig.url, (err, mPool) => {
    assert.equal(err, null);
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