import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { Evento } from '../../app/models/evento';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database';

/**
 * Generated class for the ListaEventosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lista-eventos',
  templateUrl: 'lista-eventos.html',
})
export class ListaEventosPage {
  eventos: any[];
  evento = {} as Evento;
  eventos$: FirebaseListObservable<Evento[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams,
      public menu: MenuController,
      private database: AngularFireDatabase,) {
      this.menu1Active();
      this.eventos$ = this.database.list('eventos');
      this.eventos = [];
  }
  menu1Active() {
    this.menu.enable(true, 'menu2');
    this.menu.enable(false, 'menu1');
  }

  ionViewDidLoad() {
  }

    // este es para el editar, falta enviar parametros
  mostrarEvento(evento,eventoId){
    this.navCtrl.setRoot('DetalleEventosPage',{
      evento: evento,
      id: eventoId,
      accion: 1
    });
  }

  crearEvento(){
    this.navCtrl.setRoot('DetalleEventosPage',{
       accion: 2
     });
    }

}
