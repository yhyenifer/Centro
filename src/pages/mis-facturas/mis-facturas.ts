import { Factura } from '../../app/models/factura';
import { Component } from '@angular/core';
import { IonicPage, MenuController, NavController, NavParams } from 'ionic-angular';
import {  AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


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
  
  public uid;
  facturas$: FirebaseListObservable<Factura[]>;
  raizFactura;

  constructor(public navCtrl: NavController, public navParams: NavParams,
     public database: AngularFireDatabase,
     public menu: MenuController) {
    this.uid= navParams.get("uid");
    //this.raizFactura = firebase.database().ref();
    this.facturas$ = this.database.list('/factura', {
      query: {
         orderByChild: 'uid',
        equalTo: this.uid
      }
    });
    this.menu1Active();
    

  }

  menu1Active() {
    this.menu.enable(true, 'menu1');
    this.menu.enable(false, 'menu2');
  }

  ionViewDidLoad() {
    this.uid= this.navParams.get("uid");
   }

  mostrarFactura(factura: Factura){
    //LO que se desee hacer cuando el usuario clique en una factura,
    //en la cariable factura esta la info de la factura clickada
    //this.navCtrl.setRoot('LoginPage');
  }

}
