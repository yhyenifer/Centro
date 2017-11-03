import { InAppBrowser } from '@ionic-native/in-app-browser';
import { Component } from '@angular/core';
import { IonicPage, MenuController, NavController, NavParams } from 'ionic-angular';
import { Almacen } from '../../app/models/almacen';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database';
import firebase from 'firebase';

/**
 * Generated class for the AlmacenDetallePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 @IonicPage()
@Component({
  selector: 'page-almacen-detalle',
  templateUrl: 'almacen-detalle.html',
})
export class AlmacenDetallePage {
   urls: any;

  id : string;
  almacen = {} as Almacen;
  file:any[];
  almacenes$ : FirebaseListObservable<Almacen[]>;
  public selectedCategoria;
  public nombreAlmacen;
  public descAlmacen;
  public horarioAlmacen;
  public localAlmacen;
  public telAlmacen;
  public webAlmacen;
  public selectedEstado;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private iap: InAppBrowser,
    private database: AngularFireDatabase,
    public menu: MenuController) {
    this.menu1Active();
    this.file = [];
    this.urls = [];
    this.almacen = navParams.get("almacen");
    this.id = navParams.get("id");
    for (var index = 0; index < this.almacen.url.length; index++) {
      this.generarFotos(index);
    }
    this.descAlmacen = this.almacen.descripcion;
    this.horarioAlmacen = this.almacen.horario;
    this.telAlmacen = this.almacen.telefono;
    this.webAlmacen = this.almacen.web;
    this.nombreAlmacen = this.almacen.nombre;
    this.selectedCategoria = this.almacen.categoria;
    this.selectedEstado = this.almacen.estado;
    this.localAlmacen = this.almacen.local;
    
  }


  menu1Active() {
    this.menu.enable(true, 'menu1');
    this.menu.enable(false, 'menu2');
  }
  onPageDidEnter() {
    
  }

  url(){
    // this.iap.create("https://megacity.herokuapp.com/");
    this.iap.create(this.webAlmacen);
  }

  generarFotos(index){
    
      let storageRef = firebase.storage().ref();
      let imageRef = storageRef.child("img/almacenes/"+this.almacen.nombre+"/"+this.almacen.url[index]);
      imageRef.getDownloadURL().then(url =>{
        this.urls[index] = url;
      //this.premios[index].imagen = url;
      //console.log("imagen" + url);
      });
  
  }

}
