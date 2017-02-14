const{
    GraphQLNonNull,
    GraphQLString
} = require("graphql");
const mongoFunctions = require("../../database/mongo_functions");
const userType = require("../query/userType");
const {mutationWithClientMutationId} = require('graphql-relay');
const {MongoClient} = require("mongodb");
const {nodeEnv} = require('../../config/util');
const mongoConfig = require("../../config/main_config")[nodeEnv].mongoURL;

module.exports = mutationWithClientMutationId({
  name: 'addUser',
  inputFields: {
      // new user mutation. three values are non null.
    name: {
            type: new GraphQLNonNull(GraphQLString)
        },
        email: {
            type: new GraphQLNonNull(GraphQLString)
        },
        location: {
            type: new GraphQLNonNull(GraphQLString)
        }
  },
  outputFields: {
    user: {
      type: userType,
      // after finishing mutation. return the newly added user.
      resolve: (result) => result.ops[0]
    }
  },
  mutateAndGetPayload: ({name, email, location}) => {
    let input = {name, email, location};
    MongoClient.connect(mongoConfig, (err, mPool) => {
        return mongoFunctions(mPool).addNewUser(input);
    });
  }
});