import { Component, OnInit } from '@angular/core';
import { GameConfig } from './config';
import { GameScene } from './scenes/game-scene';
import { Game } from './game';
@Component({
  selector: 'app-tank',
  templateUrl: './tank.component.html',
  styleUrls: ['./tank.component.scss']
})
export class TankComponent implements OnInit {

	public game: Game;
	constructor() { }

	ngOnInit(): void {

		this.game = new Game(GameConfig);
	}

}