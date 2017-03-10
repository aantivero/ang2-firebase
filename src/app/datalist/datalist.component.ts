import { Component } from '@angular/core';
import {AngularFire, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2';

@Component({
  selector: 'app-datalist',
  templateUrl: './datalist.component.html',
  styleUrls: ['./datalist.component.css']
})
export class DatalistComponent{

  mensajes: FirebaseListObservable<any>;

  constructor(af: AngularFire) {
    this.mensajes = af.database.list('/mensajes');
   }

   addMensaje(newMensaje: string) {
     this.mensajes.push({text: newMensaje});
   }

   updateMensaje(key: string, newText: string) {
     this.mensajes.update(key, {text: newText});
   }

   deleteMensaje(key: string){
     this.mensajes.remove(key);
   }

   deleteEverything() {
     this.mensajes.remove();
   }

}
