module.exports = ({ getAllOrders }, helpers, types) => {
  const { GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLList } = require('graphql')

  return {
    user: new GraphQLObjectType({
      name: 'user',
      description: 'User entities',
      fields() {
        return {
          id: {
            type: GraphQLInt
          },
          email: {
            type: GraphQLString
          },
          role: {
            type: GraphQLString
          },
          status: {
            type: GraphQLString
          },
          orders: {
            type: new GraphQLList(types.order),
            async resolve(obj, args, context, info) {
              const where = { userId: obj.id }
              return await getAllOrders.execute({ where })
            }
          }
        }
      }
    })
  }
}
