const nconf = require('nconf')
const path = require('path')

const ENV_PRODUCTION = 'production'
const ENV_DEVELOPMENT = 'development'
const ENV_TEST = 'test'

const NODE_ENV = (process.env.NODE_ENV || '').toLowerCase()

const environments = [ENV_PRODUCTION, ENV_DEVELOPMENT, ENV_TEST]
const environment = ~environments.indexOf(NODE_ENV) ? NODE_ENV : ENV_DEVELOPMENT

nconf
  .argv()
  .env()
  .file({ file: path.join(__dirname, `config.${environment}.json`) })
  .defaults(require('./config.json'))

module.exports = nconf
