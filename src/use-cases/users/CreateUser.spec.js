const { expect } = require('chai')
const CreateUser = require('./CreateUser')
const User = require('../../entities/user/User')
const Errors = require('../Errors')

describe('Use cases => users => CreateUser', () => {
  it('when user is valid, expect user instance', async () => {
    const createUser = new CreateUser({
      User,
      usersRepository: {
        add: user => Promise.resolve(user)
      }
    })

    const userData = { email: 'user@mail.com', password: 'Some password' }
    const user = await createUser.execute(userData)

    expect(user.email).to.equal(userData.email)
  })

  it('when user is invalid, expect ValidationError', async () => {
    const { ValidationError } = Errors

    const createUser = new CreateUser({
      User,
      usersRepository: {
        add: () => Promise.reject(new ValidationError([{ message: 'Some field invalid', type: 'email' }]))
      }
    })

    const userData = { email: 'user@mail.com', password: 'Some password' }

    try {
      await createUser.execute(userData)
      throw new Error('createUser must throw ValidationError')
    } catch (err) {
      expect(err).to.be.an.instanceof(ValidationError)
    }
  })

  it('when there is an internal error, expect InternalError', async () => {
    const { InternalError } = Errors

    const createUser = new CreateUser({
      User,
      usersRepository: {
        add: () => Promise.reject(new InternalError('Some Error'))
      }
    })

    const userData = { email: 'user@mail.com', password: 'Some password' }

    try {
      await createUser.execute(userData)
      throw new Error('createUser must throw InternalError')
    } catch (err) {
      expect(err).to.be.an.instanceof(InternalError)
    }
  })
})
