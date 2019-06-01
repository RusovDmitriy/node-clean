module.exports = (cradle, helpers) => {
  const { getUser } = cradle

  return async (source, args, context, info) => {
    const { id } = args
    const instance = await getUser.execute(id)
    return instance
  }
}
