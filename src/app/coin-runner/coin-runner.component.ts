import { Component, OnInit } from '@angular/core';

import { GameConfig } from './config';
import { GameScene } from './scenes/game-scene';
import { Game } from './game';

@Component({
  selector: 'app-coin-runner',
  templateUrl: './coin-runner.component.html',
  styleUrls: ['./coin-runner.component.scss']
})
export class CoinRunnerComponent implements OnInit {

	public game: Game;
	constructor() { }

	ngOnInit(): void {

		this.game = new Game(GameConfig);
	}

}
