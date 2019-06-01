const User = require('../../../entities/user/User')

const SequelizeUserMapper = {
  toEntity({ dataValues }) {
    const { id, email } = dataValues
    return new User({ id, email })
  },

  toDatabase(survivor) {
    const { email, password } = survivor
    return { email, password }
  }
}

module.exports = SequelizeUserMapper
