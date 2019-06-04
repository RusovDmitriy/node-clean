const Joi = require('@hapi/joi')

class Entitie {
  constructor() {
    if (new.target === Entitie) throw new TypeError('Cannot construct Entitie instances directly')
    if (!this.schema) throw new TypeError('Must define joi validate schema')
  }

  validate() {
    const data = { ...this }
    const { error } = Joi.validate(data, this.schema)
    return { valid: error === null, errors: error ? error.details : undefined }
  }
}

module.exports = Entitie
