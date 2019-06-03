const SequelizeMapper = require('../SequelizeMapper')

class SequelizeUserMapper extends SequelizeMapper {
  constructor({ User }) {
    super()
    this.User = User
  }

  toEntity({ dataValues }) {
    const { id, email, role } = dataValues
    return new this.User({ id, email, role })
  }

  toDatabase(survivor) {
    const { email, password, role } = survivor
    return { email, password, role }
  }
}

module.exports = SequelizeUserMapper
