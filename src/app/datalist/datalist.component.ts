import { Component } from '@angular/core';
import {AngularFire, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2';

@Component({
  selector: 'app-datalist',
  templateUrl: './datalist.component.html',
  styleUrls: ['./datalist.component.css']
})
export class DatalistComponent{

  mensajes: FirebaseListObservable<any>;
  mismensajes: FirebaseListObservable<any>;
  private af: AngularFire;

  constructor(af: AngularFire) {
    this.af = af;
    this.af.auth.subscribe(auth => {
      if (auth != null) {
        this.mensajes = af.database.list('/mensajes', {
          query: {
            orderByChild: 'uid',
            equalTo:auth.auth.uid
          }
        });
      }
    });

   }

   addMensaje(newMensaje: string) {
     this.af.auth.subscribe(auth => {
       if (auth != null) {
         console.log("-------------");
         console.log("1->"+auth.auth);
         console.log("2->"+auth.auth.uid);
         console.log("3->"+auth.auth.email);
         console.log("3->"+auth.auth.displayName);
         console.log("3->"+auth.auth.providerId);
         console.log("4->"+auth.google.uid);

         this.mensajes.push({text: newMensaje, uid: auth.auth.uid, usuario: auth.google.displayName});
       }
     });

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
