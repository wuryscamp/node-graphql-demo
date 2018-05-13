import {
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLID
} from 'graphql';

import GraphQLDate from 'graphql-date';

export const playerType = new GraphQLObjectType({
  name: 'Player',
  description: 'Player Type',
  fields: () => ({
    _id: {
      type: GraphQLID
    },
    name: {
      type: GraphQLString
    },
    club: {
      type: GraphQLString
    },
    position: {
      type: GraphQLString
    },
    nationality: {
      type: GraphQLString
    },
    createdAt: {
      type: GraphQLDate
    },
    updatedAt: {
      type: GraphQLDate
    }
  })
});

export const playerInputType = new GraphQLInputObjectType({
  name: 'PlayerInput',
  description: 'Player Input Type',
  fields: () => ({
    name: {
      type: GraphQLString
    },
    club: {
      type: GraphQLString
    },
    position: {
      type: GraphQLString
    },
    nationality: {
      type: GraphQLString
    }
  })
});
