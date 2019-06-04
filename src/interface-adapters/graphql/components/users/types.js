module.exports = ({ User }, helpers) => {
  const { GraphQLObjectType, GraphQLInt, GraphQLString } = require('graphql')

  return {
    user: new GraphQLObjectType({
      name: 'user',
      description: 'User entities',
      fields() {
        return {
          id: {
            type: GraphQLInt
          },
          email: {
            type: GraphQLString
          },
          role: {
            type: GraphQLString
          },
          status: {
            type: GraphQLString
          }
        }
      }
    })
  }
}
