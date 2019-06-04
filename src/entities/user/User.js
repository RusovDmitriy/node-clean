const Entitie = require('../Entitie')
const Joi = require('@hapi/joi')

class User extends Entitie {
  constructor({ id, email, password, role, status, orders }) {
    super()

    Object.assign(this, { id, email, password, role, status, orders })
  }

  get schema() {
    return Joi.object().keys({
      id: Joi.number(),
      email: Joi.string().required(),
      password: Joi.string().required(),
      role: Joi.string()
        .required()
        .allow(Object.values(Roles)),
      status: Joi.string()
        .required()
        .allow(Object.values(Statuses)),
      orders: Joi.object()
    })
  }

  static get Statuses() {
    return Statuses
  }

  static get Roles() {
    return Roles
  }
}

const Statuses = {
  ACTIVE: 'active',
  BANNED: 'banned'
}

const Roles = {
  USER: 'user',
  MODERATOR: 'moderator',
  ADMIN: 'admin'
}

module.exports = User
