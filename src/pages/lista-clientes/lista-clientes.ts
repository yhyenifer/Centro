import { Component } from '@angular/core';
import { IonicPage, MenuController, NavController, NavParams } from 'ionic-angular';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database';
import firebase from 'firebase';


/**
 * Generated class for the ListaClientesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.k
 * 
 * 
 */

@IonicPage()
@Component({
  selector: 'page-lista-clientes',
  templateUrl: 'lista-clientes.html',
})
export class ListaClientesPage {
 
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public menu: MenuController,
    private database: AngularFireDatabase,) {
      this.menu1Active();
     
  
  }

  ionViewDidLoad() {

  }

  mostrar(){
    this.navCtrl.setRoot('DetalleClientesPage');
  }


  menu1Active() {
    this.menu.enable(true, 'menu2');
    this.menu.enable(false, 'menu1');
  }
  
}


