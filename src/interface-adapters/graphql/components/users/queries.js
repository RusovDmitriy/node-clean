module.exports = (cradle, helpers, types) => {
  const { GraphQLInt, GraphQLNonNull } = require('graphql')

  return {
    user: {
      type: types.user,
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLInt)
        }
      },
      resolve: require('./resolvers/findById')(cradle, helpers)
    }
  }
}
