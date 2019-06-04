module.exports = (cradle, helpers) => {
  const { createUser, User } = cradle

  return async (source, args, context, info) => {
    const { data } = args
    data.role = User.Roles.USER
    data.status = User.Statuses.ACTIVE

    const instance = await createUser.execute(data)
    return instance
  }
}
