import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router, RouterModule, Routes } from '@angular/router';
import { PlacesModule } from './places/places.module';
import { KanchipuramComponent } from './pages/kanchipuram/kanchipuram.component';
import { VelloreComponent } from './vellore/vellore.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ThiruvannamalaiComponent } from './pages/thiruvannamalai/thiruvannamalai.component';
import { MatIconModule } from '@angular/material/icon';
import { VelloreV1Component } from './pages/vellore-v1/vellore-v1.component';
import { NilgiriComponent } from './pages/nilgiri/nilgiri.component';

// import { LikeComponent } from './like/like.component';

// RouterModule.forRoot([
//   { path:'chennai', component: ChennaiComponent }
// ])

@NgModule({
  declarations: [
    AppComponent,
    KanchipuramComponent,
    VelloreComponent,
    ThiruvannamalaiComponent,
    VelloreV1Component,
    NilgiriComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    PlacesModule,
    MatSlideToggleModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
