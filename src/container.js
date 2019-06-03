module.exports = config => {
  const { asValue, asClass, asFunction, InjectionMode, createContainer } = require('awilix')

  const container = createContainer({
    injectionMode: InjectionMode.PROXY
  })

  container.register({
    config: asValue(config),
    SequelizeConfig: asValue(config.get('dataSources:sequelize'))
  })

  container.register({
    logger: asValue(require('./frameworks/logger')),
    sequelize: asFunction(require('./frameworks/database/sequelize')).singleton(),
    server: asClass(require('./frameworks/server')).singleton()
  })

  // Models
  container.register({
    UserModel: asFunction(require('./frameworks/database/models/User')).singleton()
  })

  // Repositories
  container.register({
    usersRepository: asFunction(require('./interface-adapters/repositories/users/SequelizeUsersRepository')).singleton()
  })

  // GraphQL
  container.register({
    graphQLSchema: asFunction(require('./interface-adapters/graphql/schema')).singleton()
  })

  container.register({
    JwtAccessTokenManager: asClass(require('./interface-adapters/JwtAccessTokenManager')).singleton()
  })

  // Operations

  container.register({
    Errors: asValue(require('./use-cases/Errors')),
    getUser: asClass(require('./use-cases/users/GetUser')).singleton(),
    createUser: asClass(require('./use-cases/users/CreateUser')).singleton()
  })

  // Entites
  container.register({
    User: asValue(require('./entities/user/User'))
  })

  return container
}
