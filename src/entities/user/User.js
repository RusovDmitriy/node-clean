const { attributes } = require('structure')

const schema = {
  id: {
    type: Number,
    integer: true
  },
  email: {
    type: String,
    required: true,
    email: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    required: true
  }
}

const User = attributes(schema)(
  class User {
    static get schema() {
      return schema
    }
  }
)

module.exports = User
