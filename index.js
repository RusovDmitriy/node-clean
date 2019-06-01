const Application = require('./src/Application')

async function main() {
  const config = require('./config')
  const app = new Application(config)

  try {
    await app.start()
  } catch (err) {
    app.logger.error(err.stack)
    process.exit()
  }
}

main()
