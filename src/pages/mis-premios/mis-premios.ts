import { PremioCanjeado } from '../../app/models/premioCanjeado';
import { Component } from '@angular/core';
import { AlertController, IonicPage, MenuController, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import firebase from 'firebase';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the MisPremiosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mis-premios',
  templateUrl: 'mis-premios.html',
})
export class MisPremiosPage {
  loadItems: any[];
  items: any;
  imagenes: any[];
  premiosCanjeados: any[];

  premiosCanjeados$: FirebaseListObservable<PremioCanjeado[]>;
  uid: string;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public menu: MenuController,
    public alertCtrl : AlertController,
    private database: AngularFireDatabase,
    public storage: Storage) {
      this.menu1Active();
      
      this.premiosCanjeados$ = this.database.list('premioCanjeado',{
        query: {
          orderByChild: 'usuario',
          equalTo: this.uid
        }
      });
      this.premiosCanjeados = [];
      this.database.list('premioCanjeado',{
        query: {
          orderByChild: 'usuario',
          equalTo: this.uid
        }
      }).subscribe(data => {

        this.premiosCanjeados = data;
        //this.imagenes = Array(this.premiosCanjeados.length);
        // for (var index = 0; index < this.premiosCanjeados.length; index++) {
       
          
        //   this.imagenes[index] = `img/premios/`+this.premiosCanjeados[index].nombre+`/`+this.premiosCanjeados[index].url;
        //   //this.generarFotos(index);
        //   this.premiosCanjeados[index].imagen = this.imagenes[index];
        // }
        //

      this.items=this.premiosCanjeados;
      this.loadItems=this.premiosCanjeados;
      });
  }
  menu1Active() {
    this.menu.enable(true, 'menu1');
    this.menu.enable(false, 'menu2');
  }

  ionViewDidLoad() {
    this.storage.get('uid').then((data)=>{
      this.uid=data;
     });
     this.premiosCanjeados$ = this.database.list('premioCanjeado',{
      query: {
        orderByChild: 'usuario',
        equalTo: this.uid
      }
    });
    this.premiosCanjeados = [];
    this.database.list('premioCanjeado',{
      query: {
        orderByChild: 'usuario',
        equalTo: this.uid
      }
    }).subscribe(data => {

      this.premiosCanjeados = data;
      this.imagenes = Array(this.premiosCanjeados.length);
      // for (var index = 0; index < this.premiosCanjeados.length; index++) {
     
        
      //   this.imagenes[index] = `img/premios/`+this.premiosCanjeados[index].nombre+`/`+this.premiosCanjeados[index].url;
      //   //this.generarFotos(index);
      //   this.premiosCanjeados[index].imagen = this.imagenes[index];
      // }
      //

    this.items=this.premiosCanjeados;
    this.loadItems=this.premiosCanjeados;
    });
    this.initializeItems();
  }

  initializeItems() {
    this.items=this.loadItems;
   }
     
     getItems(searchbar) {
       // Reset items back to all of the items
     this.initializeItems();
     
       // set q to the value of the searchbar
       let q = searchbar.target.value;
      if (q && q.trim()!= ''){
       this.items = this.items.filter((item) => {
           return (item.nombre.toLowerCase().indexOf(q.toLowerCase()) > -1);
         
       });
       
       console.log("f "+q, this.items.length);
     }
   }
   

}
