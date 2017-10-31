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
  premios: any[];
  imagenes: string[];
  premios$: FirebaseListObservable<Premio[]>;
  premio = {} as Premio;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public menu: MenuController,
    private database: AngularFireDatabase,) {
      this.menu1Active();
      this.premios$ = this.database.list('premio');
      this.premios = [];
      this.database.list('premio').subscribe(data => {

        this.premios = data;
        console.log(this.premios);
        this.imagenes = Array(this.premios.length);
        for (var index = 0; index < this.premios.length; index++) {
          
          
          this.imagenes[index] = `img/premios/`+this.premios[index].nombre+`/`+this.premios[index].url;
          this.generarFotos(index);
  
        }
      });
      
          
  }
  
  ionViewWillEnter(){
    this.premios = [];
    this.database.list('premio').subscribe(data => {

      this.premios = data;
      console.log(this.premios);
      this.imagenes = Array(this.premios.length);
      for (var index = 0; index < this.premios.length; index++) {
        
        
        this.imagenes[index] = `img/premios/`+this.premios[index].nombre+`/`+this.premios[index].url;
        this.generarFotos(index);

      }
    });
  }

  ionViewDidLoad() {
    this.premios$ = this.database.list('premio');
    this.premios = [];
    this.database.list('premio').subscribe(data => {

      this.premios = data;
      console.log(this.premios);
      this.imagenes = Array(this.premios.length);
      for (var index = 0; index < this.premios.length; index++) {
        
        
        this.imagenes[index] = `img/premios/`+this.premios[index].nombre+`/`+this.premios[index].url;
        this.generarFotos(index);

      }
    });
   
  }

  menu1Active() {
    this.menu.enable(true, 'menu2');
    this.menu.enable(false, 'menu1');
  }
  // este es para el editar, falta enviar parametros
  mostrarPremio(premio,premioId){
    
    this.navCtrl.setRoot('DetallePremiosPage',{
       premio : premio,
      id: premioId,
      accion: 1
    });
  }
  generarFotos(index){
    
    //for (var index = 0; index < this.almacen.url.length; index++) {
      let storageRef = firebase.storage().ref();
      let imageRef = storageRef.child(this.imagenes[index]);
      imageRef.getDownloadURL().then(url =>{
        this.imagenes[index] = url;
        console.log("contador"+this.imagenes[index]);
      });
        
    //}
  }
  

  crearPremio(){
    this.navCtrl.setRoot('DetallePremiosPage',{
       accion: 2
     });
    }
}