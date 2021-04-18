import { Component, OnInit } from '@angular/core';
import { GameConfig } from './config';
import { GameScene } from './scenes/game-scene';
import { Game } from './game';

@Component({
  selector: 'app-candy-crush',
  templateUrl: './candy-crush.component.html',
  styleUrls: ['./candy-crush.component.scss']
})
export class CandyCrushComponent implements OnInit {

	public game: Game;
	constructor() { }

	ngOnInit(): void {

		this.game = new Game(GameConfig);
	}

}
