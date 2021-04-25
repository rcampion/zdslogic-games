import { Component, OnInit } from '@angular/core';

import { GameConfig } from './config';
import { BasicPlaybackAndEvents } from './scenes/BasicPlaybackAndEvents';
import { Game } from './game';

@Component({
  selector: 'app-basic-playback-and-events',
  templateUrl: './basic-playback-and-events.component.html',
  styleUrls: ['./basic-playback-and-events.component.scss']
})
export class BasicPlaybackAndEventsComponent implements OnInit {

	public game: Game;
	constructor() { }

	ngOnInit(): void {

		this.game = new Game(GameConfig);
	}

}
