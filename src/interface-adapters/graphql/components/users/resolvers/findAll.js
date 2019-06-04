module.exports = (cradle, helpers) => {
  const { getAllUsers } = cradle

  return async (source, args, context, info) => {
    const { where, limit, offset } = args
    return await getAllUsers.execute({ where, limit, offset })
  }
}
