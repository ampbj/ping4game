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
const DataLoader = require("dataloader");
const {ObjectID} = require("mongodb");
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
                const getUsersDataLoader = new DataLoader(mongoFunctions(mPool)
                                            .getUsersValues);
                if (args.id !== undefined) {
                    let mongoId = new ObjectID(args.id);
                    return [getUsersDataLoader.load(mongoId)];
                } else {
                    return parent.friends.map((friend) => {
                        return getUsersDataLoader.load(friend.id);
                    });
                }
            }
        }
    })
});
module.exports = user;