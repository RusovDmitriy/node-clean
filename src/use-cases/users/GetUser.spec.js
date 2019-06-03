const { expect } = require('chai')
const GetUser = require('./GetUser')
const Errors = require('../Errors')

describe('Use cases => users => GetUser', () => {
  it('When user exists, valid args, expect user instance', async () => {
    const getUser = new GetUser({
      usersRepository: {
        getById: userId =>
          Promise.resolve({
            id: userId,
            email: 'user@mail.ru'
          })
      }
    })

    const id = 1
    const user = await getUser.execute(id)

    expect(user.id).to.equal(id)
  })

  it('When user not exists, valid args, expect NotFoundError', async () => {
    const { NotFoundError } = Errors

    const getUser = new GetUser({
      usersRepository: {
        getById: () => Promise.reject(new NotFoundError("User with id 1 can't be found."))
      }
    })

    const id = 1
    try {
      await getUser.execute(id)
      throw new Error('getUser must throw NotFoundError')
    } catch (err) {
      expect(err).to.be.an.instanceof(NotFoundError)
    }
  })

  it('When user not exists, valid args, expect InternalError', async () => {
    const { InternalError } = Errors

    const getUser = new GetUser({
      usersRepository: {
        getById: () => Promise.reject(new InternalError('Some error'))
      }
    })

    const id = 1
    try {
      await getUser.execute(id)
      throw new Error('getUser must throw NotFoundError')
    } catch (err) {
      expect(err).to.be.an.instanceof(InternalError)
    }
  })
})
