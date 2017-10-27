import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams,
      public menu: MenuController) {
      this.menu1Active();
  
  }
  menu1Active() {
    this.menu.enable(true, 'menu2');
    this.menu.enable(false, 'menu1');
  }

  ionViewDidLoad() {
  }

    // este es para el editar, falta enviar parametros
  mostrarEvento(){
    this.navCtrl.setRoot('DetalleEventosPage',{
      accion: 1
    });
  }

  crearEvento(){
    this.navCtrl.setRoot('DetalleEventosPage',{
       accion: 2
     });
    }

}
