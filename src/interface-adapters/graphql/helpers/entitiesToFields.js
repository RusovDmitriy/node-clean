const { GraphQLBoolean, GraphQLInt, GraphQLFloat, GraphQLString } = require('graphql')

const TypeMap = new Map([[Number, GraphQLFloat], [String, GraphQLString], [Boolean, GraphQLBoolean]])

module.exports = (entitie, { only, exclude } = {}) => {
  const schema = entitie.schema
  return Object.keys(schema).reduce((fields, key) => {
    let type = TypeMap.get(schema[key].type || schema[key])
    if (schema[key].type === Number && schema[key].integer) type = GraphQLInt

    fields[key] = {
      type
    }
    return fields
  }, {})
}
