import { Component, OnInit } from '@angular/core';

import { GameConfig } from './config';
import { GameScene } from './scenes/game-scene';
import { Game } from './game';

@Component({
  selector: 'app-game-of-life',
  templateUrl: './game-of-life.component.html',
  styleUrls: ['./game-of-life.component.scss']
})
export class GameOfLifeComponent implements OnInit {

	public game: Game;
	constructor() { }

	ngOnInit(): void {

		this.game = new Game(GameConfig);
	}

}