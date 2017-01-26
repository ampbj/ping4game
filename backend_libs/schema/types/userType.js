// @flow
const {
    GraphQLObjectType,
    GraphQLID,
    GraphQLString,
    GraphQLFloat,
    GraphQLList,
    GraphQLNonNull
} = require("graphql");
const mongoFunctions = require("../../database/mongo_functions");

const user = new GraphQLObjectType({
    name: "userType",
    fields: () => ({
        _id: {
            type: GraphQLID
        },
        name: {
            type: new GraphQLNonNull(GraphQLString)
        },
        email: {
            type: new GraphQLNonNull(GraphQLString)
        },
        location: {
            type: new GraphQLNonNull(GraphQLString)
        },
        imageUrl: {
            type: GraphQLString
        },
        howFar: {
            type: GraphQLFloat
        },
        games: {
            type: new GraphQLList(GraphQLString),
            resolve: () => {}
        },
        currentGame: {
            type: GraphQLString
        },
        when: {
            type: GraphQLFloat
        },
        friends: {
            type: new GraphQLList(user),
            args: {
                id: {
                    type: GraphQLID
                }
            },
            resolve: (parent, args, {mPool}, fourth) => {
                if(args.id !== undefined) {
                    return mongoFunctions(mPool).getUserValues(args.id);
                    // let result = [];
                    // result.push(mongoFunctions(mPool).
                    // getUserValues(args.id));
                    // return result;
                } 
                else{
                    return mongoFunctions(mPool).
                        getUserValues(args.id);
                    // let result = [];
                    // parent.friends.map((item) => {
                    //     result.push(mongoFunctions(mPool).
                    //     getUserValues(item.id));
                    // });
                    // return result;
                }
            }
        }
    })
});
module.exports = user;