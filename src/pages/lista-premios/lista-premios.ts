import { Component } from '@angular/core';
import { IonicPage, MenuController, NavController, NavParams } from 'ionic-angular';
import { Premio } from '../../app/models/premio';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database';
import firebase from 'firebase';

/**
 * Generated class for the ListaPremiosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lista-premios',
  templateUrl: 'lista-premios.html',
})
export class ListaPremiosPage {
  premios$: FirebaseListObservable<Premio[]>;
  premio = {} as Premio;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public menu: MenuController,
    private database: AngularFireDatabase,) {
      this.menu1Active();
      this.premios$ = this.database.list('premio');
  }

  ionViewDidLoad() {
    this.premios$ = this.database.list('premio');
  }

  menu1Active() {
    this.menu.enable(true, 'menu2');
    this.menu.enable(false, 'menu1');
  }
  // este es para el editar, falta enviar parametros
  mostrarPremio(premio,premioId){
    console.log("antes "+premio.valorpuntos)
    this.navCtrl.setRoot('DetallePremiosPage',{
       premio : premio,
      id: premioId,
      accion: 1
    });
  }

  crearPremio(){
    this.navCtrl.setRoot('DetallePremiosPage',{
       accion: 2
     });
    }
}
