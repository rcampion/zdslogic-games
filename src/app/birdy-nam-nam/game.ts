//import 'phaser';
import Phaser from 'phaser'
//import { MainScene } from './scenes/main';

//import LoaderScene from './scenes/LoaderScene'
//import BirdyNamNam from './scenes/BirdyNamNam'

import { LoaderScene } from './scenes/LoaderScene';
import { BirdyNamNam } from './scenes/BirdyNamNam';

const config: Phaser.Types.Core.GameConfig = {
    title: "Birdy Nam Nam",
    type: Phaser.AUTO,
    width: 640,
    height: 338,
    parent: 'phaser-example',
    scene: [LoaderScene, BirdyNamNam],
	scale: {
		mode: Phaser.Scale.ScaleModes.FIT
	}
}

//export default new Phaser.Game(config)

export class BirdyNamNamGame extends Phaser.Game {
    constructor(config: Phaser.Types.Core.GameConfig) {
        super(config)
    }
}
