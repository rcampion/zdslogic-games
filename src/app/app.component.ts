import { Component, OnInit, NgZone, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
//import { ChartControlsService } from './core/services/chart-controls.service';

import { getLocaleDateFormat } from '@angular/common';

//import { UsersService } from './core/services/users.service';
//import { SocketClientService } from './core/services/socket-client.service';
//import { AuthenticationService } from './core/services/authentication.service';
//import { Subject } from 'rxjs';
//import { takeUntil } from 'rxjs/operators';
//import { AppService } from './core/services/app.service';

//import { DataSharingService } from './core/services/datasharing.service';
//import { User } from './core/models/user';

//https://stackoverflow.com/questions/38087013/angular2-web-speech-api-voice-recognition
export interface IWindow extends Window {
	webkitSpeechRecognition: any;
	webkitAudioContext: any;
}

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit, AfterViewInit {
	title = 'ZdsLogic Technologies';
	speechRecogitionState = false;
	flashMob = false;

	date: string;

	//sessionUser: User;
	//currentUser: User;

	messages01: any;
	mysubid01 = 'my-subscription-id-001';

	//private unsubscribeSubject: Subject<void> = new Subject<void>();
	
	href: string;

	constructor(
		private router: Router,
		private ngZone: NgZone,

	) {
		this.date = this.getDate();
	}

	ngOnInit() {

		//const isLoggedIn = this.appService.checkCredentials();

		//if (isLoggedIn) {
		//	this.userService.getUserViaSSO();
		//}

		this.router.routeReuseStrategy.shouldReuseRoute = function() {
			return false;
		};

		this.router.events.subscribe((evt) => {
			if (evt instanceof NavigationEnd) {
				this.router.navigated = false;
				window.scrollTo(0, 0);
			}
		});

	}

	ngAfterViewInit(): void {


	}



	navigate(path) {
		this.ngZone.run(() => {
			this.router.navigate([path]);
		});

	}
	getDate() {
		var theDate = new Date();
		var theTime = theDate.getTime();
		var months = new Array("January", "February", "March",
			"April", "May", "June", "July", "August",
			"September", "October", "November", "December");
		//Ensure correct for language. English is "January 1, 2020"
		var TODAY = months[theDate.getMonth()] + " "
			+ theDate.getDate() + ", " + theDate.getFullYear();
		var DATETIME = months[theDate.getMonth()] + " "
			+ theDate.getDate() + ", " + theDate.getFullYear()
			+ ", " + theTime;
		var DAYS = (((((theTime / 1000) / 60) / 60) / 24) / 365);

		return TODAY;
	}
}
