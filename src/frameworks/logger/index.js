const moment = require('moment')
const colors = require('colors')

function dateFormat() {
  return moment().format('YYYY-MM-DD HH:mm:ss')
}

module.exports.log = (...args) => {
  if (process.env.LOG_OFF !== '1') console.log.apply(console, [dateFormat(), process.pid, '[log]'.gray, ...args])
}

module.exports.info = (...args) => {
  if (process.env.LOG_OFF !== '1') console.log.apply(console, [dateFormat(), process.pid, '[info]'.blue, ...args])
}

module.exports.error = (...args) => {
  console.error.apply(console, [dateFormat(), process.pid, '[error]'.red, ...args])
}

module.exports.debug = (...args) => {
  if (process.env.DEBUG === '1') console.log.apply(console, [dateFormat(), process.pid, '[debug]'.gray, ...args])
}
