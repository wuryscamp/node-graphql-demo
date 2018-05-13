import {GraphQLList} from 'graphql';

import {playerType} from '../../types/player';
import PlayerModel from '../../../models/player';

export default {
  type: new GraphQLList(playerType),
  resolve(root, params) {
    const players = PlayerModel.find().exec();
    if(!players) {
      throw new Error('Error getting players');
    }

    return players;
  }
};
