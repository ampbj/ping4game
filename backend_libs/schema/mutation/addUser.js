const{
    GraphQLInputObjectType,
    GraphQLNonNull,
    GraphQLString
} = require("graphql");
const mongoFunctions = require("../../database/mongo_functions");
const userType = require("../types/userType");

const newUserType = new GraphQLInputObjectType({
    name: "newUserType",
    fields: {
        name: {
            type: new GraphQLNonNull(GraphQLString)
        },
        email: {
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
    resolve(parent, {input}, {mPool}) {
        return mongoFunctions(mPool).addNewUser(input);
    }
}