import {GraphQLID, GraphQLNonNull} from 'graphql';

import {playerType} from '../../types/player';
import PlayerModel from '../../../models/player';

export default {
  type: playerType,
  args: {
    id: {
      name: 'id',
      type: new GraphQLNonNull(GraphQLID)
    }
  },
  resolve(root, params) {
    return PlayerModel.findById(params.id).exec();
  }
};
