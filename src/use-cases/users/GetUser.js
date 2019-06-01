const Operation = require('../Operation')

class GetUser extends Operation {
  constructor({ usersRepository }) {
    super()
    this.usersRepository = usersRepository
  }

  async execute(id) {
    const { ServerError, NotFoundError } = Operation.Errors

    try {
      return await this.usersRepository.getById(id)
    } catch (error) {
      if (error.message === 'NotFoundError') throw new NotFoundError(error.details)
      throw new ServerError(error.message)
    }
  }
}

module.exports = GetUser
