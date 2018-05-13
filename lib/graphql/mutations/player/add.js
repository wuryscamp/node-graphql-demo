import {GraphQLNonNull} from 'graphql';

import{playerType, playerInputType} from '../../types/player';
import PlayerModel from '../../../models/player';

export default {
  type: playerType,
  args: {
    data: {
      name: 'data',
      type: new GraphQLNonNull(playerInputType)
    }
  },
  resolve(root, params) {
    const playerModel = new PlayerModel(params.data);
    const newPlayer = playerModel.save();
    if(!newPlayer) {
      throw new Error('Cannot create new Player');
    }

    return newPlayer;
  }
};
