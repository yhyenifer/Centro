import { Factura } from '../../app/models/factura';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseObjectObservable, AngularFireDatabase } from 'angularfire2/database';

/**
 * Generated class for the MisFacturasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mis-facturas',
  templateUrl: 'mis-facturas.html',
})
export class MisFacturasPage {
  // facturas= { } as Factura;
 
  constructor(public navCtrl: NavController, public navParams: NavParams, public database: AngularFireDatabase) {
  
  }

  ionViewDidLoad() {
   
  }

}
