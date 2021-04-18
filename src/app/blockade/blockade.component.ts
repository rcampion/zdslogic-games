import { Component, OnInit } from '@angular/core';
import { GameConfig } from './config';
import { GameScene } from './scenes/game-scene';
import { Game } from './game';
@Component({
  selector: 'app-blockade',
  templateUrl: './blockade.component.html',
  styleUrls: ['./blockade.component.scss']
})
export class BlockadeComponent implements OnInit {

	public game: Game;
	constructor() { }

	ngOnInit(): void {

		this.game = new Game(GameConfig);
	}

}
