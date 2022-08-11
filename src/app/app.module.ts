import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { BioPageComponent } from './bio-page/bio-page.component';
import { SongsPageComponent } from './songs-page/songs-page.component';
import { SongCardComponent } from './song-card/song-card.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    BioPageComponent,
    SongsPageComponent,
    SongCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
