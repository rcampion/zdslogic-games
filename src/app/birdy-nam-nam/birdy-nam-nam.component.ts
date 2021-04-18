import { Component, OnInit } from '@angular/core';
import 'phaser';

import { BirdyNamNam } from './scenes/BirdyNamNam';
import { LoaderScene } from './scenes/LoaderScene';

import { BirdyNamNamGame } from './game';

const config: Phaser.Types.Core.GameConfig = {
	title: "Space Invaders",
	type: Phaser.AUTO,
	backgroundColor: 'rgb(47, 52, 55)',
	width: 800,
	height: 600,
    scene: [LoaderScene, BirdyNamNam],
	physics: {
		default: "arcade"
	},
	parent: "phaser-example"
};

@Component({
  selector: 'app-birdy-nam-nam',
  templateUrl: './birdy-nam-nam.component.html',
  styleUrls: ['./birdy-nam-nam.component.scss']
})
export class BirdyNamNamComponent implements OnInit {
	public game: BirdyNamNamGame;
  
constructor() { }

  ngOnInit(): void {
	
		this.game = new BirdyNamNamGame(config);

  }

}
