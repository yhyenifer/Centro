import { Component } from '@angular/core';
import { IonicPage, MenuController, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DetalleAlmacenPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalle-almacen',
  templateUrl: 'detalle-almacen.html',
})
export class DetalleAlmacenPage {

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

  modificar(){

  }

  guardar(){
    
  }
}
