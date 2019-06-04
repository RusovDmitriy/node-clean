module.exports = ({ User }, helpers) => {
  const { GraphQLInputObjectType, GraphQLString } = require('graphql')

  return {
    userCreateInput: new GraphQLInputObjectType({
      name: 'userCreateInput',
      description: 'User create input',
      fields() {
        return {
          email: {
            type: GraphQLString
          },
          password: {
            type: GraphQLString
          }
        }
      }
    })
  }
}
