import { LoaderScene } from './scenes/LoaderScene';
import { BirdyNamNam } from './scenes/BirdyNamNam';

export const GameConfig: Phaser.Types.Core.GameConfig = {
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
