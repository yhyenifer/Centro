import { Component } from '@angular/core';
import { IonicPage, MenuController, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FacturasPendientesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-facturas-pendientes',
  templateUrl: 'facturas-pendientes.html',
})
export class FacturasPendientesPage {

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public menu: MenuController) {
      this.menu1Active();
  }

  ionViewDidLoad() {
    
  }

  menu1Active() {
    this.menu.enable(true, 'menu2');
    this.menu.enable(false, 'menu1');
  }

  openPage(page){
    console.log(page);
    if (page != 'ValidarFacturasPage'){
      this.navCtrl.setRoot(page);
      
    }
    else{
        //aqui van los parametros de la factura
        // esto abre factura detalle
      this.navCtrl.setRoot(page);
   
    }
    
  }
}
