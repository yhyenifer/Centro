import { Component } from '@angular/core';
import { IonicPage, MenuController, NavController, NavParams } from 'ionic-angular';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database';
import { Factura } from '../../app/models/factura';

/**
 * Generated class for the FacturasDenegadasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-facturas-denegadas',
  templateUrl: 'facturas-denegadas.html',
})
export class FacturasDenegadasPage {

  facturas$: FirebaseListObservable<Factura[]>;
  

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
      public menu: MenuController,
      public database: AngularFireDatabase
    ) {
      this.menu1Active();

      this.facturas$ = this.database.list('/factura', {
        query: {
           orderByChild: 'estado',
          equalTo: 'Denegada'
        }
      }).map((array) => array.reverse()) as FirebaseListObservable<Factura[]>;

  }

  menu1Active() {
    this.menu.enable(true, 'menu2');
    this.menu.enable(false, 'menu1');
  }

  openPage(page){
    this.navCtrl.setRoot(page);
  }
  ionViewDidLoad() {

  }

  mostrarFactura(factura, facturaId){
    
        this.navCtrl.setRoot('DetalleFacturaPage', {
          factura: factura,
          id: facturaId
        });
    
      }

}
