import { Component, OnInit } from '@angular/core';
import { GameConfig } from './config';
import { GameScene } from './scenes/game-scene';
import { Game } from './game';
@Component({
  selector: 'app-super-mario-land',
  templateUrl: './super-mario-land.component.html',
  styleUrls: ['./super-mario-land.component.scss']
})
export class SuperMarioLandComponent implements OnInit {

	public game: Game;
	constructor() { }

	ngOnInit(): void {

		this.game = new Game(GameConfig);
	}

}
