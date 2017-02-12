const{
    GraphQLInputObjectType,
    GraphQLNonNull,
    GraphQLString
} = require("graphql");
const mongoFunctions = require("../../database/mongo_functions");
const userType = require("../query/userType");

// new user mutation. three values are non null.

const newUserType = new GraphQLInputObjectType({
    name: "newUserType",
    fields: {
        name: {
            type: new GraphQLNonNull(GraphQLString)
        },
        email: {
            type: new GraphQLNonNull(GraphQLString)
        },
        location: {
            type: new GraphQLNonNull(GraphQLString)
        }
    }
});
module.exports = {
    type: userType,
    args: {
        input: {
            type: new GraphQLNonNull(newUserType)
        }
    },
    // after finishing mutation. return the newly added user.
    resolve(parent, {input}, {mPool}) {
        return mongoFunctions(mPool).addNewUser(input);
    }
};