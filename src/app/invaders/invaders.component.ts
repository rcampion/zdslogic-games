import { Component, OnInit } from '@angular/core';
import 'phaser';
import { MainScene } from './scenes/main';
import { SpaceInvadersGame } from './game';

const config: Phaser.Types.Core.GameConfig = {
	title: "Space Invaders",
	type: Phaser.AUTO,
	backgroundColor: 'rgb(47, 52, 55)',
	width: 800,
	height: 600,
	scene: MainScene,
	physics: {
		default: "arcade"
	},
	parent: "SpaceInvaders"
};

@Component({
	selector: 'app-invaders',
	templateUrl: './invaders.component.html',
	styleUrls: ['./invaders.component.scss']
})

export class InvadersComponent implements OnInit {
	public game: SpaceInvadersGame;

	constructor() {
	}

	ngOnInit(): void {

		this.game = new SpaceInvadersGame(config);
		
	}

}
