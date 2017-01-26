// @flow
const {GraphQLNonNull, GraphQLSchema, 
    GraphQLObjectType, GraphQLID} = require("graphql");
const userType = require("./types/userType");
const mongoFunctions = require("../database/mongo_functions");
const addUserMutation = require("./mutation/addUser.js");
const RootQueryType = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        users: {
            type: userType,
            description: "top level users collection",
            args: {
                id: {
                    type: new GraphQLNonNull(GraphQLID)
                }
            },
            resolve: (par, args, {mPool}, fourth) => {
                return mongoFunctions(mPool).getUserValues(args.id);
            }
        }
    }
});

const RootMutationType = new GraphQLObjectType({
    name: "RootMutationType",
    fields: () => ({
        addUser: addUserMutation
    })
});

const schema = new GraphQLSchema({
    query: RootQueryType,
    mutation: RootMutationType
});
module.exports = schema;