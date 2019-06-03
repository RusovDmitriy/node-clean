// Abstract
class SequelizeMapper {
  constructor() {
    if (new.target === SequelizeMapper) throw new TypeError('Cannot construct SequelizeMapper instances directly')
    
    if (typeof this.toEntity !== 'function') throw new TypeError('Must override method toEntity')
    if (typeof this.toDatabase !== 'function') throw new TypeError('Must override method toDatabase')
  }
}

module.exports = SequelizeMapper
