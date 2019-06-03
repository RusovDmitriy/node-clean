module.exports = {
  InternalError: class InternalError extends Error {
    constructor(message) {
      super('InternalError')
      this.details = message
    }
  },
  NotFoundError: class NotFoundError extends Error {
    constructor(details) {
      super('NotFoundError')
      this.details = details
    }
  },
  ValidationError: class ValidationError extends Error {
    constructor(details) {
      super('ValidationError')
      this.details = details.map(detail => ({
        message: detail.message,
        field: detail.path
      }))
    }
  }
}
