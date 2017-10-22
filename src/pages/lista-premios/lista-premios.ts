import { Component } from '@angular/core';
import { IonicPage, MenuController, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ListaPremiosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lista-premios',
  templateUrl: 'lista-premios.html',
})
export class ListaPremiosPage {
  premios$: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public menu: MenuController) {
      this.menu1Active();
  }

  ionViewDidLoad() {
  }

  menu1Active() {
    this.menu.enable(true, 'menu2');
    this.menu.enable(false, 'menu1');
  }
  // este es para el editar, falta enviar parametros
  mostrarPremio(){
    this.navCtrl.setRoot('DetallePremiosPage');
  }

  crearPremio(){
    this.navCtrl.setRoot('DetallePremiosPage');
  }
}
