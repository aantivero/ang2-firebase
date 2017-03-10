import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AngularFireModule} from 'angularfire2';
import { DataobjectComponent } from './dataobject/dataobject.component';
import { DatalistComponent } from './datalist/datalist.component';

export const firebaseConfig = {
  apiKey: 'AIzaSyAVpIqYpetwJi3i87kKCwv72TEXBKDaa5Y',
  authDomain: 'project-3608165319188981417.firebaseapp.com',
  databaseURL: 'https://project-3608165319188981417.firebaseio.com',
  storageBucket: 'project-3608165319188981417.appspot.com',
  messagingSenderId: '356376049697'
}

@NgModule({
  declarations: [
    AppComponent,
    DataobjectComponent,
    DatalistComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
