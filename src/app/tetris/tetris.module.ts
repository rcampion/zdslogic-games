import { ErrorHandler, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterStateSnapshot, ActivatedRouteSnapshot, Router } from '@angular/router';

import * as Sentry from '@sentry/angular';

import { SharedModule } from './../shared/shared.module';

import { AngularTetrisComponent } from './containers/angular-tetris/angular-tetris.component';
import { KeyboardComponent } from './components/keyboard/keyboard.component';
import { ButtonComponent } from './components/button/button.component';
import { ScreenDecorationComponent } from './components/screen-decoration/screen-decoration.component';
import { MatrixComponent } from './components/matrix/matrix.component';
import { NumberComponent } from './components/number/number.component';
import { ClockComponent } from './components/clock/clock.component';
import { SoundComponent } from './components/sound/sound.component';
import { PauseComponent } from './components/pause/pause.component';
import { PointComponent } from './components/point/point.component';
import { NextComponent } from './components/next/next.component';
import { LevelComponent } from './components/level/level.component';
import { StartLineComponent } from './components/start-line/start-line.component';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { TileComponent } from './components/tile/tile.component';
import { LogoComponent } from './components/logo/logo.component';
import { GithubComponent } from './components/github/github.component';
import { TwitterButtonComponent } from './components/twitter-button/twitter-button.component';
import { TetrisRoutingModule } from './tetris-routing/tetris-routing.module';

@NgModule({
	imports: [
		CommonModule,
		SharedModule,
		TetrisRoutingModule,
		AkitaNgDevtools.forRoot()
	],
	declarations: [
		AngularTetrisComponent,
		KeyboardComponent,
		ButtonComponent,
		ScreenDecorationComponent,
		MatrixComponent,
		NumberComponent,
		ClockComponent,
		SoundComponent,
		PauseComponent,
		PointComponent,
		NextComponent,
		LevelComponent,
		StartLineComponent,
		TileComponent,
		LogoComponent,
		GithubComponent,
		TwitterButtonComponent,

	],
	providers: [
		{
			provide: ErrorHandler,
			useValue: Sentry.createErrorHandler(),
		}
	],
})
export class TetrisModule { }

