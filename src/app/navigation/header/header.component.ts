import { Component, OnInit, Output, EventEmitter, AfterViewInit, OnDestroy, ViewChild, AfterContentInit, ChangeDetectorRef } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Router, NavigationEnd } from '@angular/router';
//import { User } from '../../core/models/user';
//import { ChatAdapter, IChatController } from 'ng-chat';
//import { Cookie } from 'ng2-cookies';

//import { AppService } from 'src/app/core/services/app.service';

//import { SocketClientSixService } from 'src/app/core/services/socket-client-six.service';
//import { SocketClientSevenService } from 'src/app/core/services/socket-client-seven.service';

//import { ChatService } from 'src/app/core/services/chat.service';
//import { UsersService } from 'src/app/core/services/users.service';
//import { ContactsService } from 'src/app/core/services/contacts.service';
//import { DataSharingService } from 'src/app/core/services/datasharing.service';
//import { ErrorHandlerService } from 'src/app/core/services/error-handler.service';
//import { OpenfireAdapter } from 'src/app/core/services/openfire-adapter';
//import { ActiveFriendsService } from 'src/app/core/services/active-friends.service';
//import { NgChatFriendsListComponent } from 'ng-chat/ng-chat/components/ng-chat-friends-list/ng-chat-friends-list.component';
//import { NgChat } from 'ng-chat/ng-chat/ng-chat.component';
//import { MyAdapter } from 'src/app/core/services/my-adapter';
import { environment } from 'src/environments/environment';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit, AfterContentInit, OnDestroy {

	@Output() public sidenavToggle = new EventEmitter();
	//currentUser: User;

	//@ViewChild('ngChatInstance', { static: true }) protected ngChatInstance: IChatController;

	userId = 999;
	title = 'Messaging';
	isCollapsed = true;
	browserNotificationsEnabled = false;
	theme = 'dark';
	emojisEnabled = true;
	fileUploadUrl = '';
	mySubscription: any;

	isUserLoggedIn: boolean = false;

	//public adapter: OpenfireAdapter = null;

	constructor(
		private ref: ChangeDetectorRef,
		private router: Router,
	) {

		//this.fileUploadUrl = this.createCompleteRoute('uploadChatFile', environment.api_url);
		/*
				this.adapter = new OpenfireAdapter(this.http,
					this.wsDataServiceSix,
					this.wsDataServiceSeven,
					this.chatService,
					this.userService,
					this.appService,
					this.contactsService,
					this.dataSharingService,
					this.errorService,
					this.activeFriendsService);
		
				this.router.routeReuseStrategy.shouldReuseRoute = function () {
					return false;
				};
		
				this.mySubscription = this.router.events.subscribe((event) => {
					if (event instanceof NavigationEnd) {
						// Trick the Router into believing it's last link wasn't previously loaded
						this.router.navigated = false;
					}
				});
		*/
	}

	ngOnInit() {
		/*
				const isLoggedIn = this.appService.checkCredentials();
				const i = window.location.href.indexOf('code');
				if (!isLoggedIn && i !== -1) {
		
					this.appService.retrieveToken(window.location.href.substring(i + 5));
		
				}
		
				this.userService.currentUser.subscribe(
					(userData) => {
		
						this.currentUser = userData;
						this.userId = +this.currentUser.contactId;
		
					}
				);
		
		*/
	}

	ngAfterViewInit(): void {

		/*
		
				// Subscribe here, this will automatically update 
				// "isUserLoggedIn" whenever a change to the subject is made.
				this.dataSharingService.isUserLoggedIn.subscribe(value => {
					this.isUserLoggedIn = value;
		
					if (this.isUserLoggedIn) {
		
						this.adapter.refreshFriends();
		
						this.dataSharingService.ngChatInstance.next(this.ngChatInstance);
		
					}
				});
		*/
	}

	ngAfterContentInit(): void {
		this.ref.detectChanges();
	}

	ngOnDestroy(): void {
		if (this.mySubscription) {
			this.mySubscription.unsubscribe();
		}
	}

	public onToggleSidenav = () => {
		this.sidenavToggle.emit();
	}
/*
	login() {
		this.userService.purgeAuth();
		this.appService.login();
	}

	logout(): void {
		this.userService.logout();
		this.appService.logout();
	}

	public redirectToRegister = () => {
		const url = `/register`;
		this.router.navigate([url]);
	}

	private createCompleteRoute = (route: string, envAddress: string) => {
		return `${envAddress}/${route}`;
	}

	private generateHeaders() {
		return {

			headers: new HttpHeaders(
				{
					'Content-Type': 'application/json',
					'Access-Control-Allow-Origin': '*',
					'Authorization': 'Bearer ' + Cookie.get('access_token')
				})
		};
	}
*/
}
