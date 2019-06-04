const Entitie = require('../Entitie')
const Joi = require('@hapi/joi')

class Order extends Entitie {
  constructor({ id, userId, status, created, updated }) {
    super()

    Object.assign(this, { id, userId, status, created, updated })
  }

  get schema() {
    return schema
  }

  static get Statuses() {
    return Statuses
  }
}

const Statuses = {
  CREATED: 'active',
  CONFIRMED: 'confirmed',
  CANCELED: 'canceled'
}

const schema = Joi.object().keys({
  id: Joi.number(),
  userId: Joi.number(),
  status: Joi.string()
    .required()
    .allow(Object.values(Statuses)),
  created: Joi.string().required(),
  updated: Joi.string().required()
})

module.exports = Order
