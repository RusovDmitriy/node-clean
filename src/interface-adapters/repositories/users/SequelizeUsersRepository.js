module.exports = cradle => {
  const UserMapper = require('./SequelizeUserMapper')
  const { UserModel } = cradle

  async function getById(id) {
    const instance = await UserModel.findOne({ where: { id } })

    if (!instance) {
      const error = new Error('NotFoundError')
      error.details = `User with id ${id} can't be found.`
      throw error
    }

    return instance
  }

  return {
    async getAll(...args) {
      const users = await UserModel.findAll(...args)
      return users.map(UserMapper.toEntity)
    },

    async getById(id) {
      const user = await getById(id)

      return UserMapper.toEntity(user)
    },

    async add(user) {
      const { valid, errors } = user.validate()

      if (!valid) {
        const error = new Error('ValidationError')
        error.details = errors

        throw error
      }

      const newUser = await UserModel.create(UserMapper.toDatabase(user))
      return UserMapper.toEntity(newUser)
    },

    async remove(id) {
      const user = await getById(id)

      await user.destroy()
      return
    },

    async update(id, newData) {
      const user = await getById(id)

      const transaction = await UserModel.sequelize.transaction()

      try {
        const updatedUser = await user.update(newData, { transaction })
        const userEntity = UserMapper.toEntity(updatedUser)

        const { valid, errors } = userEntity.validate()

        if (!valid) {
          const error = new Error('ValidationError')
          error.details = errors

          throw error
        }

        await transaction.commit()

        return userEntity
      } catch (error) {
        await transaction.rollback()

        throw error
      }
    },

    async count() {
      return await UserModel.count()
    }
  }
}
