import { Component, OnInit } from '@angular/core';
import {AngularFire, FirebaseObjectObservable} from 'angularfire2';

@Component({
  selector: 'app-dataobject',
  templateUrl: './dataobject.component.html',
  styleUrls: ['./dataobject.component.css']
})
export class DataobjectComponent implements OnInit {

  item: FirebaseObjectObservable<any>;

  constructor(af: AngularFire) {
    this.item = af.database.object('/messages/-KL7oVKLQ7ioZ0w7eanC');
    console.log(this.item);
   }

  ngOnInit() {
  }

  save(newName: string) {
    this.item.set({name: newName});
  }

  update(newSize: String) {
    this.item.update({size: newSize});
  }

  delete() {
    console.log("this.item.remove");
    this.item.remove();
  }

}
