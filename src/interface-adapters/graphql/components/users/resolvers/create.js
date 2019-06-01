module.exports = (cradle, helpers) => {
  const { createUser } = cradle

  return async (source, args, context, info) => {
    const { data } = args
    const instance = await createUser.execute(data)
    return instance
  }
}
