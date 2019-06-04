module.exports = cradle => {
  const SequelizeRepository = require('../SequelizeRepository')

  const SequelizeOrderMapper = require('./SequelizeOrderMapper')
  const { OrderModel, Errors } = cradle

  return new SequelizeRepository({
    Mapper: new SequelizeOrderMapper(cradle),
    Model: OrderModel,
    Errors
  })
}
