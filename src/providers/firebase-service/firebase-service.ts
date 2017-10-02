import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { AngularFireDatabase } from 'angularfire2/database';


@Injectable()
export class FirebaseServicePrivider {

  constructor(public afd: AngularFireDatabase) {  }

  getUserID(){

   

  }

  getUserTipo(userID: String){
     this.afd.list('/perfil/',{
      
            query: {
              orderByChild: 'tipo',
              equalTo: 'usuario'
            }
      
      
          });
    return this.afd.object('/perfil/'+ userID);
  }

  getUserName(userID: String){
    this.afd.list('/perfil/',{
      
            query: {
              orderByChild: 'nombre',
              equalTo: 'usuario'
            }
      
      
          });
    return this.afd.object('/perfil/'+ userID);
  }
  
  getUserPuntos(userID: String){
    this.afd.list('/perfil/',{
      
            query: {
              orderByChild: 'puntos',
              equalTo: 'usuario'
            }
      
      
          });
    return this.afd.object('/perfil/'+ userID);
  }

  getUserFoto(userID: String){
    this.afd.list('/perfil/',{
      
            query: {
              orderByChild: 'foto',
              equalTo: 'usuario'
            }
      
      
          });
    return this.afd.object('/perfil/'+ userID);
  }

  getUserNotificacion(userID: String){
    this.afd.list('/perfil/',{
      
            query: {
              orderByChild: 'notificacion',
              equalTo: 'usuario'
            }
      
      
          });
    return this.afd.object('/perfil/'+ userID);
  }


}
