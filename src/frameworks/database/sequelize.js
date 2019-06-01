module.exports = ({ SequelizeConfig, logger }) => {
  const Sequelize = require('sequelize')

  const options = Object.assign(
    {
      timezone: '00:00',
      database: 'database',
      username: 'username',
      password: 'password',
      port: 5432,
      host: '127.0.0.1',
      dialect: 'postgres',
      debug: true
    },
    SequelizeConfig
  )

  const Op = Sequelize.Op

  const { timezone, database, username, password, port, host, dialect } = options

  const sequelize = new Sequelize(database, username, password, {
    port,
    host,
    dialect,
    timezone,
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    },
    // operatorsAliases: {
    //   $between: Op.between,
    //   $and: Op.and,
    //   $or: Op.or,
    //   $like: Op.like,
    //   $eq: Op.eq,
    //   $ne: Op.ne,
    //   $gte: Op.gte,
    //   $gt: Op.gt,
    //   $lte: Op.lte,
    //   $lt: Op.lt,
    //   $not: Op.not,
    //   $notIn: Op.notIn,
    //   $in: Op.in,
    //   $contains: Op.contains
    // },
    benchmark: options.debug,
    logging: logger.debug.bind(logger)
  })

  return sequelize
}
