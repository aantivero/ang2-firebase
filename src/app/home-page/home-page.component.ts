import { Component, OnInit } from '@angular/core';
import {FirebaseListObservable, AngularFire} from "angularfire2";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  items: FirebaseListObservable<any[]>;

  constructor(af: AngularFire ) {
    this.items = af.database.list('/entidadesfinancieras');

  }

  ngOnInit() {
  }

}
