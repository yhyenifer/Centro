import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database';
import { Component } from '@angular/core';
import { IonicPage, MenuController, NavController, NavParams } from 'ionic-angular';
import { Almacen } from '../../app/models/almacen';
import firebase from 'firebase';

/**
 * Generated class for the ListaAlmacenesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lista-almacenes',
  templateUrl: 'lista-almacenes.html',
})
export class ListaAlmacenesPage {
  almacenes$: FirebaseListObservable<Almacen[]>;
  almacen = {} as Almacen; 
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private database: AngularFireDatabase,
    public menu: MenuController) {
    this.menu1Active();
    this.almacenes$ = this.database.list('Almacen');
  }

  ionViewDidLoad() {
    this.almacenes$ = this.database.list('Almacen');
  }
  menu1Active() {
    this.menu.enable(true, 'menu2');
    this.menu.enable(false, 'menu1');
  }
  // este es para el editar, falta enviar parametros
  mostrarAlmacen(almacen, almacenId){
    this.navCtrl.setRoot('DetalleAlmacenPage',{
      almacen : almacen,
      id: almacenId,
      accion: 1
    });
  }

  crearAlmacen(){
    this.navCtrl.setRoot('DetalleAlmacenPage',{
     
      accion: 2
    });
  }
}
