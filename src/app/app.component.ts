import { Component } from '@angular/core';
import {AngularFire, FirebaseListObservable} from 'angularfire2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(af: AngularFire) {
    this.items = af.database.list('/entidadesfinancieras');
  }

  title = 'Angular Firebase Material Design';
  items: FirebaseListObservable<any[]>;
}
