class WebServer {
  constructor(cradle) {
    const { config } = cradle
    const express = require('express')
    const server = require('./graphql-server')(cradle)

    const app = express()
    app.set('port', process.env.PORT || config.get('server:port') || 3000)

    server.applyMiddleware({ app })

    const router = require('./router')(cradle)
    app.use(router)

    this.app = app
  }

  start() {
    return new Promise(resolve => this.app.listen(this.app.get('port'), resolve))
  }

  stop() {
    return this.app.close()
  }
}

module.exports = WebServer
