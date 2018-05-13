import {GraphQLNonNull, GraphQLID} from 'graphql';

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
    const removedPlayer = PlayerModel.findByIdAndRemove(params.id).exec();
    if(!removedPlayer) {
      throw new Error('Cannot remove Player');
    }

    return removedPlayer;
  }
};
