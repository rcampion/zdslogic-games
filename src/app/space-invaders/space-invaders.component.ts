import { Component, OnInit } from '@angular/core';
import { GameConfig } from './config';
import { GameScene } from './scenes/game-scene';
import { Game } from './game';

@Component({
  selector: 'app-space-invaders',
  templateUrl: './space-invaders.component.html',
  styleUrls: ['./space-invaders.component.scss']
})
export class SpaceInvadersComponent implements OnInit {

	public game: Game;
	constructor() { }

	ngOnInit(): void {

		this.game = new Game(GameConfig);
	}

}

