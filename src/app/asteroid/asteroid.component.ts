import { Component, OnInit } from '@angular/core';
import { BootScene } from './scenes/boot-scene';
import { MainMenuScene } from './scenes/main-menu-scene';
import { GameScene } from './scenes/game-scene';
import { Game } from './game';

const GameConfig: Phaser.Types.Core.GameConfig = {
	title: 'Asteroid',
	url: 'https://github.com/digitsensitive/phaser3-typescript',
	version: '2.0',
	width: 800,
	height: 600,
	type: Phaser.AUTO,
	parent: 'game',
	scene: [BootScene, MainMenuScene, GameScene],
	input: {
		keyboard: true,
		mouse: false,
		touch: false,
		gamepad: false
	},
	physics: {
		default: 'arcade',
		arcade: {
			debug: false
		}
	},
	backgroundColor: '#000000',
	render: { pixelArt: false, antialias: true }
};

@Component({
	selector: 'app-asteroid',
	templateUrl: './asteroid.component.html',
	styleUrls: ['./asteroid.component.scss']
})

export class AsteroidComponent implements OnInit {
	public game: Game;
	constructor() { }

	ngOnInit(): void {

		this.game = new Game(GameConfig);
	}

}
