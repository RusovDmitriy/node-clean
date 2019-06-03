const Operation = require('../Operation')

class CreateUser extends Operation {
  constructor({ User, usersRepository }) {
    super()

    Object.assign(this, {
      User,
      usersRepository
    })
  }

  async execute(data) {
    const { usersRepository, User } = this

    try {
      return await usersRepository.add(new User(data))
    } catch (err) {
      this.errorHandle(err)
    }
  }
}

module.exports = CreateUser
