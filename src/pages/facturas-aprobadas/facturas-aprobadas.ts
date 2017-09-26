import { Component } from '@angular/core';
import { IonicPage, MenuController, NavController, NavParams } from 'ionic-angular';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database';
import { Factura } from '../../app/models/factura';

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
          equalTo: 'Aprobada'
        }
      }).map((array) => array.reverse()) as FirebaseListObservable<Factura[]>;
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
