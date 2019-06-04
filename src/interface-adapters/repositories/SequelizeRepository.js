const sequelize = require('sequelize')
const getById = Symbol('getById')

class SequelizeRepository {
  constructor({ Mapper, Model, Errors }) {
    Object.assign(this, {
      Mapper,
      Model,
      Errors
    })
  }

  async [getById](id) {
    const { NotFoundError } = this.Errors

    const instance = await this.Model.findOne({ where: { id } })
    if (!instance) throw new NotFoundError(`User with id ${id} can't be found.`)

    return instance
  }

  async getAll(...args) {
    const collection = await this.Model.findAll(...args)
    return collection.map(item => this.Mapper.toEntity(item))
  }

  async getById(id) {
    const instance = await this[getById].call(this, id)

    return this.Mapper.toEntity(instance)
  }

  async add(entity) {
    const { ValidationError, InternalError } = this.Errors
    const { valid, errors } = entity.validate()

    if (!valid) throw new ValidationError(errors)

    try {
      const newInstance = await this.Model.create(this.Mapper.toDatabase(entity))
      return this.Mapper.toEntity(newInstance)
    } catch (err) {
      if (err instanceof sequelize.UniqueConstraintError) throw new ValidationError(err.errors)
      throw new InternalError(err.message)
    }
  }

  async remove(id) {
    const instance = await this[getById](id)

    await instance.destroy()
    return
  }

  async update(id, newData) {
    const { ValidationError } = this.Errors
    const instance = await this[getById](id)

    const transaction = await this.Model.sequelize.transaction()

    try {
      const updatedInstance = await instance.update(newData, { transaction })
      const entity = this.Mapper.toEntity(updatedInstance)

      const { valid, errors } = entity.validate()

      if (!valid) throw new ValidationError(errors)
      await transaction.commit()

      return entity
    } catch (error) {
      await transaction.rollback()

      throw error
    }
  }

  async count() {
    return await this.Model.count()
  }
}

module.exports = SequelizeRepository
