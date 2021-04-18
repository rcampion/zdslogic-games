import { Component, OnInit } from '@angular/core';

import { GameConfig } from './config';
import { GameScene } from './scenes/game-scene';
import { Game } from './game';

@Component({
  selector: 'app-alpha-adjust',
  templateUrl: './alpha-adjust.component.html',
  styleUrls: ['./alpha-adjust.component.scss']
})
export class AlphaAdjustComponent implements OnInit {

	public game: Game;
	constructor() { }

	ngOnInit(): void {

		this.game = new Game(GameConfig);
	}

}
