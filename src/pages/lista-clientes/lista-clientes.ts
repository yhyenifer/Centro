import { Component } from '@angular/core';
import { IonicPage, MenuController, NavController, NavParams } from 'ionic-angular';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database';
import firebase from 'firebase';
import { Cliente } from '../../app/models/cliente';


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
  clientes: any[];
  cliente =  {} as Cliente;
  clientes$: FirebaseListObservable<Cliente[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public menu: MenuController,
    private database: AngularFireDatabase,) {
      this.menu1Active();
      this.clientes$ = this.database.list('perfil',{
        query: {
          orderByChild: 'tipo',
          equalTo: 'cliente'
        }
      });
      this.clientes = []; 
     
  
  }

  ionViewDidLoad() {

  }

  mostrarCliente(cliente,clienteId){
    this.navCtrl.setRoot('DetalleClientesPage',{
      cliente: cliente,
      id: clienteId,
      accion: 1
    });
  }


  menu1Active() {
    this.menu.enable(true, 'menu2');
    this.menu.enable(false, 'menu1');
  }
  
}


