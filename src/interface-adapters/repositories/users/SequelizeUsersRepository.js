module.exports = cradle => {
  const SequelizeRepository = require('../SequelizeRepository')

  const SequelizeUserMapper = require('./SequelizeUserMapper')
  const { UserModel, Errors } = cradle

  return new SequelizeRepository({
    Mapper: new SequelizeUserMapper(cradle),
    Model: UserModel,
    Errors
  })
}
