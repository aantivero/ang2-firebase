import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AngularFireModule} from 'angularfire2';
import { DataobjectComponent } from './dataobject/dataobject.component';
import { DatalistComponent } from './datalist/datalist.component';
import 'hammerjs';

import {MaterialModule} from '@angular/material';
import {AuthService} from './providers/auth.service';
import { LoginPageComponent } from './login-page/login-page.component';
import {Routes, Router, RouterModule} from "@angular/router";
import { HomePageComponent } from './home-page/home-page.component';

export const firebaseConfig = {
  apiKey: 'AIzaSyAVpIqYpetwJi3i87kKCwv72TEXBKDaa5Y',
  authDomain: 'project-3608165319188981417.firebaseapp.com',
  databaseURL: 'https://project-3608165319188981417.firebaseio.com',
  storageBucket: 'project-3608165319188981417.appspot.com',
  messagingSenderId: '356376049697'
}

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'login', component: LoginPageComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    DataobjectComponent,
    DatalistComponent,
    LoginPageComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    MaterialModule,
    RouterModule.forRoot(routes),
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
