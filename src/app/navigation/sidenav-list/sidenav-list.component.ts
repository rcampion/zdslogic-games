import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
//import { UsersService } from '../../core/services/users.service';
//import { AppService } from '../../core/services/app.service';
//import { DataSharingService } from '../../core/services/datasharing.service';

@Component({
    selector: 'app-sidenav-list',
    templateUrl: './sidenav-list.component.html',
    styleUrls: ['./sidenav-list.component.scss']
})
export class SidenavListComponent implements OnInit, OnDestroy {
    
    @Output() sidenavClose = new EventEmitter();

    constructor(

        private router: Router){

    }

    ngOnInit() {
    }

    ngOnDestroy(): void {

    }

    public onSidenavClose = () => {
        this.sidenavClose.emit();
    }

}
