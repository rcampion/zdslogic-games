import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from '../about/about.component';
import { HomeComponent } from '../home/home.component';
import { AlphaAdjustComponent } from '../alpha-adjust/alpha-adjust.component';
import { AsteroidComponent } from '../asteroid/asteroid.component';
import { BirdyNamNamComponent } from '../birdy-nam-nam/birdy-nam-nam.component';
import { BlockadeComponent } from '../blockade/blockade.component';
import { InvadersComponent } from '../invaders/invaders.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'alpha', component: AlphaAdjustComponent },
    { path: 'asteroid', component: AsteroidComponent },
    { path: 'birds', component: BirdyNamNamComponent },
    { path: 'blockade', component: BlockadeComponent },
	{ path: 'home', component: HomeComponent },
    { path: 'invaders', component: InvadersComponent },	
    {
        path: 'tetris',
        loadChildren: () => import("./../tetris/tetris.module").then(m => m.TetrisModule),
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
