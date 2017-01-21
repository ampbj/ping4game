// @flow
const {GraphQLNonNull, GraphQLSchema,
     GraphQLObjectType, GraphQLString} = require("graphql");
const userType = require("./types/userType");

const RootQueryType = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        users: {
            type: userType,
            description: "top level users collection",
            args: {
                name: {
                    type: new GraphQLNonNull(GraphQLString)
                }
            },
            resolve: (par, args, ctx, fourth) => {
                return {
                    "id": 42,
                    "name": "Ryan",
                    "email": "ampbj@yahoo.com",
                    "location": "Tehran",
                };
            },
        },
    },
});

const schema = new GraphQLSchema({query: RootQueryType});
module.exports = schema;