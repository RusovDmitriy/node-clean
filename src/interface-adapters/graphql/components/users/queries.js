module.exports = (cradle, helpers, types) => {
  const { GraphQLInt, GraphQLNonNull, GraphQLList } = require('graphql')
  const { GraphQLJSON } = require('graphql-type-json')

  return {
    user: {
      type: types.user,
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLInt)
        }
      },
      resolve: require('./resolvers/findById')(cradle, helpers)
    },
    users: {
      type: new GraphQLList(types.user),
      args: {
        where: {
          type: GraphQLJSON
        },
        limit: {
          type: GraphQLInt
        },
        offset: {
          type: GraphQLInt
        }
      },
      resolve: require('./resolvers/findAll')(cradle, helpers)
    }
  }
}
