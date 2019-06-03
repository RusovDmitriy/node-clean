module.exports = cradle => {
  const { GraphQLObjectType, GraphQLSchema } = require('graphql')
  const { applyMiddleware } = require('graphql-middleware')

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

  const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
      name: 'Query',
      fields: queries
    }),
    mutation: new GraphQLObjectType({
      name: 'Mutation',
      fields: mutations
    })
  })

  const permissions = require('./permissions')(cradle)
  return applyMiddleware(schema, permissions)
}
