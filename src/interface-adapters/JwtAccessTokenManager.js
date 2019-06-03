const jwt = require('jsonwebtoken')

class JwtAccessTokenManager {
  constructor({ config }) {
    this.JWT_SECRET_KEY = config.get('auth:jwt:secret')
  }

  generate(payload) {
    return jwt.sign(payload, this.JWT_SECRET_KEY)
  }

  decode(accessToken) {
    return jwt.verify(accessToken, this.JWT_SECRET_KEY)
  }
}

module.exports = JwtAccessTokenManager
