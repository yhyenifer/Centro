import { Component } from '@angular/core';
import { IonicPage, MenuController, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FacturasAprobadasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-facturas-aprobadas',
  templateUrl: 'facturas-aprobadas.html',
})
export class FacturasAprobadasPage {

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public menu: MenuController) {
      this.menu1Active();
  }

  menu1Active() {
    this.menu.enable(true, 'menu2');
    this.menu.enable(false, 'menu1');
  }

  ionViewDidLoad() {
  }

  openPage(page){
    this.navCtrl.setRoot(page);
  }

}
