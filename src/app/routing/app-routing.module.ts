import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from '../about/about.component';
import { HomeComponent } from '../home/home.component';
import { AlphaAdjustComponent } from '../alpha-adjust/alpha-adjust.component';
import { AsteroidComponent } from '../asteroid/asteroid.component';
import { BirdyNamNamComponent } from '../birdy-nam-nam/birdy-nam-nam.component';
import { BlockadeComponent } from '../blockade/blockade.component';
import { BlocksComponent } from '../blocks/blocks.component';
import { CandyCrushComponent } from '../candy-crush/candy-crush.component';
import { CoinRunnerComponent } from '../coin-runner/coin-runner.component';
import { FlappyBirdComponent } from '../flappy-bird/flappy-bird.component';
import { InvadersComponent } from '../invaders/invaders.component';
import { SnakeComponent } from '../snake/snake.component';
import { SpaceInvadersComponent } from '../space-invaders/space-invaders.component';
import { SuperMarioLandComponent } from '../super-mario-land/super-mario-land.component';
import { TankComponent } from '../tank/tank.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'alpha', component: AlphaAdjustComponent },
    { path: 'asteroid', component: AsteroidComponent },
    { path: 'birds', component: BirdyNamNamComponent },
    { path: 'blockade', component: BlockadeComponent },
    { path: 'blocks', component: BlocksComponent },
    { path: 'candy', component: CandyCrushComponent },
    { path: 'coins', component: CoinRunnerComponent },
    { path: 'flappy', component: FlappyBirdComponent },
	{ path: 'home', component: HomeComponent },
    { path: 'invaders', component: InvadersComponent },
    { path: 'mario', component: SuperMarioLandComponent },		
    { path: 'snake', component: SnakeComponent },	
    { path: 'space', component: SpaceInvadersComponent },
    { path: 'tank', component: TankComponent },	
    {
        path: 'tetris',
        loadChildren: () => import("./../tetris/tetris.module").then(m => m.TetrisModule),
    },
	
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
