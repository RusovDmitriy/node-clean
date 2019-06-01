module.exports = (cradle, helpers, types, inputs) => {
  return {
    createUser: {
      type: types.user,
      args: {
        data: {
          type: inputs.userCreateInput
        }
      },
      resolve: require('./resolvers/create')(cradle, helpers)
    }
  }
}
