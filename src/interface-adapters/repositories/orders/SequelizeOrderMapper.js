const SequelizeMapper = require('../SequelizeMapper')

class SequelizeOrderMapper extends SequelizeMapper {
  constructor({ Order }) {
    super()
    this.Order = Order
  }

  toEntity({ dataValues }) {
    const { id, userId, status, created, updated } = dataValues
    return new this.Order({ id, userId, status, created, updated })
  }

  toDatabase(survivor) {
    const { userId, status, created, updated } = survivor
    return { userId, status, created, updated }
  }
}

module.exports = SequelizeOrderMapper
