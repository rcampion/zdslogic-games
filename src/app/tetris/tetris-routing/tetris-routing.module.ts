import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AngularTetrisComponent } from '../containers/angular-tetris/angular-tetris.component';

const routes: Routes = [
    { path: '', component: AngularTetrisComponent },
    { path: 'tetris', component: AngularTetrisComponent },
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class TetrisRoutingModule { }
