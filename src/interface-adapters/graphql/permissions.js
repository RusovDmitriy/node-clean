module.exports = () => {
  const { rule, shield, and, or, not } = require('graphql-shield')

  const isAuthenticated = rule()(async (parent, args, ctx, info) => {
    return ctx.user !== null
  })

  const isAdmin = rule()(async (parent, args, ctx, info) => {
    return ctx.user.role === 'admin'
  })

  const isModerator = rule()(async (parent, args, ctx, info) => {
    return ctx.user.role === 'moderator'
  })

  return shield({
    // Query: {
    //   user: and(isAuthenticated, or(isAdmin, isModerator))
    // },
    // Mutation: {
    //   createUser: isAuthenticated
    // },
    // user: isAuthenticated
  })
}
