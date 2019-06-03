const Errors = require('./Errors')

class Operation {
  constructor() {
    if (new.target === Operation) throw new TypeError('Cannot construct Operation instances directly')
    if (typeof this.execute !== 'function') throw new TypeError('Must override method execute')
  }

  errorHandle(err) {
    if (Object.values(Errors).every(ErrorClass => !(err instanceof ErrorClass)))
      throw new Errors.InternalError(err.message)

    throw err
  }
}

module.exports = Operation
