import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GridListComponent } from './components/grid-list/grid-list.component';
import { HomeComponent } from './home/home.component';
import { CardsComponent } from './components/cards/cards.component';
import { BadgeComponent } from './components/badge/badge.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { RadioButtonComponent } from './components/radio-button/radio-button.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'badge', component: BadgeComponent },
  { path: 'card', component: CardsComponent },
  { path: 'grid-list', component: GridListComponent },
  { path: 'progress-bar', component: ProgressBarComponent },
  { path: 'radio-button', component: RadioButtonComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
