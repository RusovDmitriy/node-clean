const Operation = require('../Operation')

class GetAllOrders extends Operation {
  constructor({ ordersRepository }) {
    super()
    Object.assign(this, {
      ordersRepository
    })
  }

  async execute(options) {
    try {
      return await this.ordersRepository.getAll(options)
    } catch (err) {
      this.errorHandle(err)
    }
  }
}

module.exports = GetAllOrders
