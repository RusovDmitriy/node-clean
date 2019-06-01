module.exports = cradle => {
  const { GraphQLObjectType, GraphQLSchema } = require('graphql')

  const helpers = {
    entitiesToFields: require('./helpers/entitiesToFields')
  }

  const types = {}
  Object.assign(types, require('./components/users/types')(cradle, helpers, types))

  const queries = {}
  Object.assign(queries, require('./components/users/queries')(cradle, helpers, types))

  const inputs = {}
  Object.assign(inputs, require('./components/users/inputs')(cradle, helpers))

  const mutations = {}
  Object.assign(mutations, require('./components/users/mutations')(cradle, helpers, types, inputs))

  return new GraphQLSchema({
    query: new GraphQLObjectType({
      name: 'Query',
      fields: queries
    }),
    mutation: new GraphQLObjectType({
      name: 'Mutation',
      fields: mutations
    })
  })
}