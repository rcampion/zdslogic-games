import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from './material/material.module';

import { AppRoutingModule } from './routing/app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './navigation/header/header.component';
import { FooterComponent } from './navigation/footer/footer.component';

import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { InvadersComponent } from './invaders/invaders.component';
import { BreakoutComponent } from './breakout/breakout.component';
import { BirdyNamNamComponent } from './birdy-nam-nam/birdy-nam-nam.component';
import { AsteroidComponent } from './asteroid/asteroid.component';
import { AlphaAdjustComponent } from './alpha-adjust/alpha-adjust.component';
import { BlockadeComponent } from './blockade/blockade.component';
import { BlocksComponent } from './blocks/blocks.component';
import { CandyCrushComponent } from './candy-crush/candy-crush.component';
import { CoinRunnerComponent } from './coin-runner/coin-runner.component';
import { FlappyBirdComponent } from './flappy-bird/flappy-bird.component';
import { SnakeComponent } from './snake/snake.component';
import { SpaceInvadersComponent } from './space-invaders/space-invaders.component';
import { SuperMarioLandComponent } from './super-mario-land/super-mario-land.component';
import { TankComponent } from './tank/tank.component';
import { GameOfLifeComponent } from './game-of-life/game-of-life.component';
import { BasicPlaybackAndEventsComponent } from './audio/web-audio/basic-playback-and-events/basic-playback-and-events.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    SidenavListComponent,
	AboutComponent,
	HomeComponent,
    InvadersComponent,
    BreakoutComponent,
    BirdyNamNamComponent,
    AsteroidComponent,
    AlphaAdjustComponent,
    BlockadeComponent,
    BlocksComponent,
    CandyCrushComponent,
    CoinRunnerComponent,
    FlappyBirdComponent,
    SnakeComponent,
    SpaceInvadersComponent,
    SuperMarioLandComponent,
    TankComponent,
    GameOfLifeComponent,
    BasicPlaybackAndEventsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
