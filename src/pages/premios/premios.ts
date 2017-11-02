import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database';
import { Component } from '@angular/core';
import { AlertController, IonicPage, MenuController, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Premio } from '../../app/models/premio';
import firebase from 'firebase';

/**
 * Generated class for the PremiosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-premios',
  templateUrl: 'premios.html',
})
export class PremiosPage {
  premios: any[];
  items: any[];
  imagenes: string[];
  premios$: FirebaseListObservable<Premio[]>;
  premio = {} as Premio;
  puntosCliente: number =0;
  diferencia: number =0;
  nombre : string; //nombre del usuario autenticado
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public menu: MenuController,
    public alertCtrl : AlertController,
    private database: AngularFireDatabase,
    public storage: Storage) {
      this.menu1Active();
      this.premios$ = this.database.list('premio');
      
      this.premios = [];
      this.database.list('premio').subscribe(data => {

        this.premios = data;
        // console.log(this.premios);
        this.imagenes = Array(this.premios.length);
        for (var index = 0; index < this.premios.length; index++) {
          
          this.premios[index].diferencia = Number(this.premios[index].valorPuntos) - Number(this.puntosCliente);
          if(this.premios[index].diferencia<0){
            this.premios[index].diferencia = 0;
          }
          
          this.imagenes[index] = `img/premios/`+this.premios[index].nombre+`/`+this.premios[index].url;
          this.generarFotos(index);
  
        }
      });
  }

  ionViewDidLoad() {
    this.storage.get('nombre').then((data)=>{
      this.nombre=data;
     });
     this.storage.get('puntos').then((data)=>{
      this.puntosCliente=data;
     });
    
    this.premios$ = this.database.list('premio');
    this.premios = [];
    this.database.list('premio').subscribe(data => {
      this.premios = data;
      this.imagenes = Array(this.premios.length);
      for (var index = 0; index < this.premios.length; index++) {
        this.premios[index].diferencia = Number(this.premios[index].valorPuntos) - Number(this.puntosCliente);
        this.imagenes[index] = `img/premios/`+this.premios[index].nombre+`/`+this.premios[index].url;
        this.generarFotos(index);

      }
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
      });
        
  
  }
//validar que el cliente si tenga los puntos requeridos y validar que el premio si tenga cantidad dispobible
  validarDatos(){
    return true;
  }
  canjear(premio,premio_key){
    if(this.validarDatos()==true){
      let alert = this.alertCtrl.create({
        title: 'Confirmación',
        subTitle: "¿"+ this.nombre +" está seguro de Canjear éste Premio?",
        buttons:[
          {
            text: 'Si',
            role: 'si',
            handler: () => {
              // console.log('si');
             //aqui va el codigo de canjear
              
             
                //notificacion de accion realizada
                let alert = this.alertCtrl.create({
                  title: 'Notifiación',
                  subTitle: "Se ha canjeado exitosamente el Premio",
                  buttons: [{
                    text: 'Aceptar',
                    role: 'Aceptar',
                    handler: () => {
                      this.navCtrl.setRoot("PremiosPage");
                  
                    } 
                  }
                  ]
                });
                alert.present();
                   }

       } 
       ,
       {
         text: 'No',
         role: 'no',
         handler: () => {
           
         }
       }]
       });
       alert.present();
}
}

initializeItems() {
  this.premios$=this.database.list('premio');
}
  
  getItems(searchbar) {
    // Reset items back to all of the items
  this.initializeItems();
  
    // set q to the value of the searchbar
    let q = searchbar.target.value;
   if (q && q.trim()!= ''){
    this.premios = this.premios.filter((item) => {
        console.log("ye "+item.nombre.toLowerCase().indexOf(q.toLowerCase()) );
        return (item.nombre.toLowerCase().indexOf(q.toLowerCase()) > -1);
      
    });
  }
}


  }



