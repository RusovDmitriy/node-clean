'use strict'

module.exports = ({ sequelize }) => {
  const { INTEGER, STRING, DATE } = require('sequelize')

  return sequelize.define(
    'users',
    {
      id: {
        type: INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      email: {
        type: STRING,
        allowNull: false,
        unique: true
      },
      password: {
        type: STRING,
        allowNull: false
      },
      role: {
        type: STRING,
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
      tableName: 'users'
    }
  )
}
