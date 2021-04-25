import 'phaser';
//import Phaser from 'phaser'

import { GameConfig } from './config';

export class Game extends Phaser.Game {
  constructor(config: Phaser.Types.Core.GameConfig) {
    super(config);
  }
}

// export default new Phaser.Game(config)
