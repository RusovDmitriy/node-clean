module.exports = ({ User }, helpers) => {
  const { GraphQLObjectType } = require('graphql')

  return {
    user: new GraphQLObjectType({
      name: 'user',
      description: 'User entities',
      fields() {
        return {
          ...helpers.entitiesToFields(User)
        }
      }
    })
  }
}
