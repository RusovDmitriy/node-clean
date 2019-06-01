const Operation = require('../Operation')

class CreateUser extends Operation {
  constructor({ usersRepository, User }) {
    super()

    Object.assign(this, {
      User,
      usersRepository
    })
  }

  async execute(data) {
    const { User, usersRepository } = this
    const { ServerError, ValidationError } = Operation.Errors

    try {
      return await usersRepository.add(new User(data))
    } catch (error) {
      if (error.message === 'Validation error')throw new ValidationError(error.errors)
      throw new ServerError(error)
    }
  }
}

module.exports = CreateUser
