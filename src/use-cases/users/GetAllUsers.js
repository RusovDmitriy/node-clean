const Operation = require('../Operation')

class GetAllUsers extends Operation {
  constructor({ usersRepository }) {
    super()
    Object.assign(this, {
      usersRepository
    })
  }

  async execute(options) {
    try {
      return await this.usersRepository.getAll(options)
    } catch (err) {
      this.errorHandle(err)
    }
  }
}

module.exports = GetAllUsers
