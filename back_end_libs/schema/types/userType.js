// @flow
const {
    GraphQLObjectType,
    GraphQLID,
    GraphQLString,
    GraphQLFloat,
    GraphQLList,
    GraphQLNonNull,
} = require("graphql");

module.exports = new GraphQLObjectType({
    name: "userType",
    fields: {
        id: {
            type: GraphQLID,
        },
        name: {
            type: new GraphQLNonNull(GraphQLString),
        },
        email: {
            type: new GraphQLNonNull(GraphQLString),
        },
        location: {
            type: new GraphQLNonNull(GraphQLString),
        },
        imageUrl: {
            type: GraphQLString,
        },
        how_far: {
            type: GraphQLFloat,
        },
        games: {
            type: new GraphQLList(GraphQLString),
            resolve: () => {},
        },
        current_game: {
            type: GraphQLString,
        },
        when: {
            type: GraphQLFloat,
        },
        friends_matched: {
            type: new GraphQLList(GraphQLString),
            resolve: () => {},
        },
    },
});