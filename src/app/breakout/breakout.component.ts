import { Component, OnInit } from '@angular/core';

import 'phaser';
//import { MainScene } from './scenes/main';
//import { SpaceInvadersGame } from './game';

/*
const config: Phaser.Types.Core.GameConfig = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    parent: 'phaser-example',
    scene: [ Breakout ],
    physics: {
        default: 'arcade'
    }
};
*/
@Component({
	selector: 'app-breakout',
	templateUrl: './breakout.component.html',
	styleUrls: ['./breakout.component.scss']
})
export class BreakoutComponent implements OnInit {
	//public game: SpaceInvadersGame;

	constructor() { }

	ngOnInit(): void {
		//this.game = new SpaceInvadersGame(config);
	}

}
