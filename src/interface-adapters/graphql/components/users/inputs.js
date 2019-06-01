module.exports = ({ User }, helpers) => {
  const { GraphQLInputObjectType } = require('graphql')

  return {
    userCreateInput: new GraphQLInputObjectType({
      name: 'userCreateInput',
      description: 'User create input',
      fields() {
        return {
          ...helpers.entitiesToFields(User)
        }
      }
    })
  }
}
