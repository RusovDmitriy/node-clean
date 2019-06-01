class Operation {
  static get Errors() {
    return {
      ServerError: class ServerError extends Error {
        constructor(message) {
          super()
          this.message = {
            code: 'ServerError',
            details: message
          }
        }
      },
      NotFoundError: class NotFoundError extends Error {
        constructor(details) {
          super()
          this.message = {
            code: 'NotFoundError',
            details
          }
        }
      },
      ValidationError: class ValidationError extends Error {
        constructor(details) {
          super()
          this.message = {
            code: 'ValidationError',
            details: details.map(detail => ({
              message: detail.message,
              type: detail.type
            }))
          }
        }
      }
    }
  }
}

module.exports = Operation
