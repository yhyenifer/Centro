import { Factura } from '../../app/models/factura';
import { FirebaseServicePrivider } from '../../providers/firebase-service/firebase-service';
import { FirebaseListObservable, FirebaseObjectObservable, AngularFireDatabase } from 'angularfire2/database';
import { Component } from '@angular/core';
import { AlertController, IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import firebase from 'firebase';
/**
 * Generated class for the ValidarFacturasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-validar-facturas',
  templateUrl: 'validar-facturas.html',
})
export class ValidarFacturasPage {
  public base64Image: string;
  id : string;
  nombre : String;
  valor : number;
  factura : Factura;
  nombreCliente: string;
  estado: string;
  url: string;
  almacen: string;
  infoFactura$: FirebaseListObservable<Factura[]>
  infoPerfil$: FirebaseListObservable<any[]>
  usuario: FirebaseObjectObservable<any>;
  puntos: FirebaseObjectObservable<any>;
  puntosacum :number;
  contador: number;
  notificacion: FirebaseObjectObservable<any>;
  constructor(public navCtrl: NavController,
    public firebaseService: FirebaseServicePrivider, 
    public navParams: NavParams,
    private database: AngularFireDatabase,
    public alertCtrl : AlertController,
    public storage: Storage
  ) {
      let storageRef = firebase.storage().ref();
      this.infoFactura$ = this.database.list('factura');
      this.infoPerfil$ = this.database.list('perfil');
      this.factura = navParams.get('factura');
      this.id = navParams.get('id');
      this.usuario=this.firebaseService.getUserName(this.factura.uid);
      this.puntos=this.firebaseService.getUserName(this.factura.uid);
      this.puntos.subscribe(nombreCliente=>{
        this.nombreCliente = nombreCliente.nombre + " "+ nombreCliente.apellido;
      });
      this.nombreCliente = this.factura.uid;
      this.estado = this.factura.estado;
      this.url = this.factura.url;
      this.almacen = this.factura.almacen;
      

      const imageRef = storageRef.child(this.url);
      imageRef.getDownloadURL().then(url =>
      this.base64Image = url);
        
      this.puntosacum = 0;
      
  }

  ionViewDidLoad() {
    this.storage.get('nombre').then((data)=>{
      this.nombre=data;
     });
   this.puntos.subscribe( usersnapshot => {
    this.puntosacum = parseInt(usersnapshot.puntos);
    this.contador= parseInt(usersnapshot.notificacion);
    this.puntos.subscribe(nombreCliente=>{
      this.nombreCliente = nombreCliente.nombre + " "+ nombreCliente.apellido;
    });
  });
  
  }

  aprobar(){
    
    if(this.valor > 0){
    console.log("numero valr: "+ this.valor);
    let alert = this.alertCtrl.create({
      title: 'Confirmación',
      subTitle: "¿"+ this.nombre +" está seguro de  APROBAR ésta factura?",
      buttons:[
        {
          text: 'Si',
          role: 'si',
          handler: () => {
            console.log('si');
            // va el codigo que debe actualizar el estado de la 
            //factura  a "aprobada" y sumar los puntos al cliente 
            //y enviar notificacion
            // se decide que por cada 1000 pesos de valor de la 
            //factura se ortoga 1 punto al cliente
            this.factura.estado = 'Aprobada';
            
            this.infoFactura$.update( this.id, {
              
                      estado: this.factura.estado,
                      valor: this.valor
                                 
                  })
            this.puntosacum = Number(this.puntosacum) + Number(Math.floor(this.valor/1000));
            this.contador= Number(this.contador)+1;
            this.infoPerfil$.update( this.factura.uid, {
              puntos: this.puntosacum,
              notificacion: this.contador
            })
            this.navCtrl.setRoot('FacturasAprobadasPage');
          }
        },
        {
          text: 'No',
          role: 'no',
          handler: () => {
            //la ventana de confirmacion solo se cierra
          }
        }
      ]
    });
    alert.present();
  }
  else{
    let alert = this.alertCtrl.create({
      title: 'Error',
      subTitle: "El valor de la factura debe ser mayor a cero",
      buttons: ['Aceptar']
    });
    alert.present();
  }
  }

  denegar(){

    let alert = this.alertCtrl.create({
      title: 'Confirmación',
      subTitle: "¿"+ this.nombre +" está seguro de DENEGAR ésta factura?",
      buttons:[
        {
          text: 'Si',
          role: 'si',
          handler: () => {
            console.log('si');
            // va el codigo que debe actualizar el estado de la 
            //factura  a "denegada"  
            //y enviar notificacion
            this.factura.estado = 'Denegada';
            
            this.infoFactura$.update( this.id, {
              
                      estado: this.factura.estado
                                 
                  })

            this.navCtrl.setRoot('FacturasDenegadasPage');
          
          }
        },
        {
          text: 'No',
          role: 'no',
          handler: () => {
            //la ventana de confirmacion solo se cierra
          }
        }
      ]
    });
    alert.present();

  }

}
