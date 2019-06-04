'use strict'

module.exports = ({ sequelize }) => {
  const { INTEGER, STRING, DATE } = require('sequelize')

  return sequelize.define(
    'orders',
    {
      id: {
        type: INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      userId: {
        type: INTEGER,
        allowNull: false
      },
      status: {
        type: STRING,
        allowNull: false
      },
      created: {
        type: DATE,
        allowNull: false
      },
      updated: {
        type: DATE,
        allowNull: true
      }
    },
    {
      timestamps: true,
      createdAt: 'created',
      updatedAt: 'updated',
      tableName: 'orders'
    }
  )
}
