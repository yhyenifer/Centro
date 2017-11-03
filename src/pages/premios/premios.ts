import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database';
import { Component } from '@angular/core';
import { AlertController, IonicPage, MenuController, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Premio } from '../../app/models/premio';
import firebase from 'firebase';
import { Cliente } from '../../app/models/cliente';

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
  
  firebaseService: any;
  premios: any[];
  items: Array<any>;
  loadItems: Array<any>;
  imagenes: string[];
  premios$: FirebaseListObservable<Premio[]>;
  premiosCanjeados$: FirebaseListObservable<any[]>;
  usuarios$: FirebaseListObservable<Cliente[]>;
  usuario : any;
  premio = {} as Premio;
  puntosCliente: number;
  diferencia: number =0;
  nombre : string; //nombre del usuario autenticado
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public menu: MenuController,
    public alertCtrl : AlertController,
    private database: AngularFireDatabase,
    public storage: Storage) {
      this.menu1Active();
       
      
      this.database.list('premio',{
        query: {
          orderByChild: 'estado',
          equalTo: 'Activo'
        }
      }).subscribe(data1 => {
        
        this.premios = data1;
        this.premios.sort((a, b) => {
          return parseFloat(a.valorPuntos) - parseFloat(b.valorPuntos);
        });
        this.imagenes = Array(this.premios.length);
        for (var index = 0; index < this.premios.length; index++) {
          this.hacerResta(index);
         
          console.log('constructor '+this.premios[index].imagen);
          this.imagenes[index] = `img/premios/`+this.premios[index].nombre+`/`+this.premios[index].url;
          this.generarFotos(index);
         
        }
        //
        
      this.items=this.premios;
      this.loadItems=this.premios;
      });
      this.usuarios$ = this.database.list('perfil');
      
      this.premios$ = this.database.list('premio',{
        query: {
          orderByChild: 'estado',
          equalTo: 'Activo'
        }
      }).map((array) => array.reverse()) as FirebaseListObservable<Premio[]>;
      this.premiosCanjeados$ = this.database.list('premioCanjeado'); 
      this.premios = [];     
  } 

  ionViewDidLoad() {
    this.storage.get('nombre').then((data)=>{
      this.nombre=data;
     });
     this.storage.get('puntos').then((data)=>{
      this.puntosCliente=data;
     });
  }
  menu1Active() {
    this.menu.enable(true, 'menu1');
    this.menu.enable(false, 'menu2');
  }

   hacerResta(index){
    this.storage.get('puntos').then((data)=>{
      this.puntosCliente=data;
      this.premios[index].diferencia = Number(this.premios[index].valorPuntos) - Number(this.puntosCliente);
      if(this.premios[index].diferencia<0){
        this.premios[index].diferencia = 0;
      }
     }); 
  }

  generarFotos(index){
      let storageRef = firebase.storage().ref();
      let imageRef = storageRef.child(this.imagenes[index]);
      imageRef.getDownloadURL().then(url =>{
        this.imagenes[index] = url;
      this.premios[index].imagen = url;
      });
  }
//validar que el cliente si tenga los puntos requeridos y validar que el premio si tenga cantidad dispobible
  validarDatos(premio){
   if (premio.cantidad<0){
    let alert = this.alertCtrl.create({
      title: 'Error',
      subTitle:  this.nombre +" el premio que deseas canjear no esta disponible",
      buttons:['Aceptar']
    }
  );
  alert.present();
     return false;
   }
   else{
   if(this.puntosCliente<premio.valorPuntos){
    let alert = this.alertCtrl.create({
      title: 'Error',
      subTitle:  this.nombre +" no tienes puntos suficientes para realizar el canje",
      buttons:['Aceptar']
    }
  );
  alert.present();
     return false;
   }
   else{
    return true;
   }
  } 
  }
  canjear(premio,premio_key){
    var uid;
    this.storage.get('uid').then((data)=>{
      uid=data;
     });


    if(this.validarDatos(premio)==true){
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
             if (premio.cantidad - 1 == 0){
              this.premios$.update(premio_key,{
                cantidad: premio.cantidad-1,
                estado: 'Inactivo'
             })
             }else{
              this.premios$.update(premio_key,{
                cantidad: premio.cantidad-1,
             })
             }
             
              this.premiosCanjeados$.push({
                nombre: premio.nombre,
                descripcion: premio.descripcion,
                valorPuntos: premio.valorPuntos,
                usuario: uid,
                url: premio.imagen
              })
             
              this.usuarios$.update(uid,{
                  puntos: Number(this.puntosCliente) - Number(premio.valorPuntos)
              })
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
    
  }
}


  }



