class Application {
  constructor(config) {
    const container = require('./container')(config)
    const { server, sequelize, logger } = container.cradle

    Object.assign(this, { server, sequelize, logger })
  }

  async start() {
    await this.sequelize.authenticate()
    await this.server.start()

    this.logger.info('Start app')


  }
}

module.exports = Application
