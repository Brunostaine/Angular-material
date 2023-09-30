import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

import { MatCardModule } from '@angular/material/card';
import { HomeComponent } from './home/home.component';
import { SidnavComponent } from './sidnav/sidnav.component';

import { MatGridListModule } from '@angular/material/grid-list';
import { CardsComponent } from './components/cards/cards.component';
import { GridListComponent } from './components/grid-list/grid-list.component';

@NgModule({
  declarations: [
    AppComponent,
    SidnavComponent,
    HomeComponent,
    GridListComponent,
    CardsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatGridListModule,
    MatProgressBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
