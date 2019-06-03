module.exports = cradle => {
  const { ApolloServer } = require('apollo-server-express')
  const { graphQLSchema, JwtAccessTokenManager, getUser, logger } = cradle

  return new ApolloServer({
    schema: graphQLSchema,
    formatError(error) {
      error.message = error.message
      error.details = error.extensions.exception.details

      delete error.extensions
      return error
    },
    context: async ({ req }) => {
      const context = {}
      try {
        const token = (req.headers.authorization || '').replace('Bearer ', '')
        if (token) {
          const payload = JwtAccessTokenManager.decode(token)
          const user = await getUser.execute(payload.id)
          context.user = user
        }

        return context
      } catch (err) {
        logger.error(err)
      }

      return {}
    }
  })
}
