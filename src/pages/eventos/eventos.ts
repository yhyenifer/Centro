import { Evento } from '../../app/models/evento';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database';
import { Component } from '@angular/core';
import { AlertController, IonicPage, MenuController, NavController, NavParams } from 'ionic-angular';
import firebase from 'firebase';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the EventosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-eventos',
  templateUrl: 'eventos.html',
})
export class EventosPage {
 
  items: Array<any>;
  loadItems: Array<any>;
  imagenes: string[];
  eventos: any[];
  evento = {} as Evento;
  eventos$: FirebaseListObservable<Evento[]>;
  
  nombre : string; //nombre del usuario autenticado
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public menu: MenuController,
    public alertCtrl : AlertController,
    private database: AngularFireDatabase,
    public storage: Storage) {
      this.menu1Active();
      this.eventos$ = this.database.list('eventos');
      this.eventos = [];
     
      this.database.list('eventos').subscribe(data => {
        this.eventos = data;
        console.log("y "+data);
        this.imagenes = Array(this.eventos.length);
        for (var index = 0; index < this.eventos.length; index++) {
                
          this.imagenes[index] = `img/eventos/`+this.eventos[index].nombre+`/`+this.eventos[index].url;
          this.generarFotos(index);
  
        }
      
      this.items=this.eventos;
      this.loadItems=this.eventos;
      });
  }

  ionViewDidLoad() {
    this.storage.get('nombre').then((data)=>{
      this.nombre=data;
     });
        
    
  }
   
  menu1Active() {
    this.menu.enable(true, 'menu1');
    this.menu.enable(false, 'menu2');
  }

  generarFotos(index){
    
      let storageRef = firebase.storage().ref();
      let imageRef = storageRef.child(this.imagenes[index]);
      imageRef.getDownloadURL().then(url =>{
        this.imagenes[index] = url;
        this.eventos[index].imagen = url;
      });
        
  
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
