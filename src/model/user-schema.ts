import { GraphQLObjectType, GraphQLSchema ,GraphQLString, GraphQLList } from 'graphql';
import { queryConversionPromise } from '../db';

const errorItemOject = new GraphQLObjectType({
  name: 'ErrorItem',
  fields: {
    id: { type: GraphQLString },
    date: { type: GraphQLString },
    type: { type: GraphQLString },
    system_name: { type: GraphQLString },
    user_id: { type: GraphQLString },
    user_name: { type: GraphQLString },
    err: { type: GraphQLString },
    info: { type: GraphQLString },
    component: { type: GraphQLString }
  }
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQuery',
  fields: {
    errorList: {
      type: new GraphQLList(errorItemOject),
      args: {
        id: { type: GraphQLString }
      },
      resolve: async (parent, arg) => {
        console.log(arg, 'asd');
        const res = await queryConversionPromise('SELECT * FROM error_item');
        console.log()
        return res;
      }
    }
  }
});

export const userSchema = new GraphQLSchema({
  query: RootQuery
});
