const Entitie = require('../Entitie')
const Joi = require('@hapi/joi')

const Roles = {
  USER: 'user',
  MODERATOR: 'moderator',
  ADMIN: 'admin'
}

const Statuses = {
  ACTIVE: 'active',
  BANNED: 'banned'
}

const schema = Joi.object().keys({
  id: Joi.number(),
  email: Joi.string().required(),
  password: Joi.string().required(),
  role: Joi.string()
    .required()
    .allow(Object.values(Roles)),
  status: Joi.string()
    .required()
    .allow(Object.values(Statuses))
})

class User extends Entitie {
  constructor({ id, email, password, role, status }) {
    super()

    Object.assign(this, { id, email, password, role, status })
  }

  get schema() {
    return schema
  }

  static get Statuses() {
    return Statuses
  }

  static get Roles() {
    return Roles
  }
}

module.exports = User
