module.exports = ({ getUser }, helpers, types) => {
  const { GraphQLObjectType, GraphQLInt, GraphQLString } = require('graphql')

  return {
    order: new GraphQLObjectType({
      name: 'order',
      description: 'Order entities',
      fields() {
        return {
          id: {
            type: GraphQLInt
          },
          status: {
            type: GraphQLString
          },
          created: {
            type: GraphQLString
          },
          updated: {
            type: GraphQLString
          },
          user: {
            type: types.user,
            async resolve(obj, args, context, info) {
              console.log(obj)
              return await getUser.execute(obj.userId)
            }
          }
        }
      }
    })
  }
}
