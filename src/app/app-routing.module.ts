import { NgModule } from '@angular/core';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { BioPageComponent } from './bio-page/bio-page.component';
import { RouterModule, Routes } from '@angular/router';
import { SongsPageComponent } from './songs-page/songs-page.component';
import { TourDateComponent } from './tour-date/tour-date.component';

const routes: Routes = [
  { path: '', redirectTo:'landing-page', pathMatch:'full'},
  { path: 'landing-page', component: LandingPageComponent },
  { path: 'bio-page', component: BioPageComponent },
  { path: 'songs-page', component: SongsPageComponent },
  { path: 'tour-date-page', component: TourDateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
