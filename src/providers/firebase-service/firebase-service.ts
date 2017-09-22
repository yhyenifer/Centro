import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { AngularFireDatabase } from 'angularfire2/database';


@Injectable()
export class FirebaseServicePrivider {

  constructor(public afd: AngularFireDatabase) {  }

  getUserID(){

    return this.afd.list('/perfil/',{

      query: {
        orderByChild: 'tipo',
        equalTo: 'usuario'
      }


    });

  }

  getUserTipo(userID: String){

    
    return this.afd.object('/perfil/'+ userID);

  }


  


}
