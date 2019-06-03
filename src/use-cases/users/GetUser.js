const Operation = require('../Operation')

class GetUser extends Operation {
  constructor({ usersRepository }) {
    super()
    Object.assign(this, {
      usersRepository
    })
  }

  async execute(id) {
    try {
      return await this.usersRepository.getById(id)
    } catch (err) {
      this.errorHandle(err)
    }
  }
}

module.exports = GetUser
