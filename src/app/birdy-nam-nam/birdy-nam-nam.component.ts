import { Component, OnInit } from '@angular/core';
import 'phaser';

import { GameConfig } from './config';
import { BirdyNamNam } from './scenes/BirdyNamNam';
import { LoaderScene } from './scenes/LoaderScene';

import { BirdyNamNamGame } from './game';

@Component({
  selector: 'app-birdy-nam-nam',
  templateUrl: './birdy-nam-nam.component.html',
  styleUrls: ['./birdy-nam-nam.component.scss']
})
export class BirdyNamNamComponent implements OnInit {
	public game: BirdyNamNamGame;
  
constructor() { }

  ngOnInit(): void {
	
		this.game = new BirdyNamNamGame(GameConfig);

  }

}
