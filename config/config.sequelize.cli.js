const config = require('./index')
const ENV = process.env.NODE_ENV || 'development'

module.exports = {
  [ENV]: config.get('dataSources:sequelize')
}
