import { FirebaseServicePrivider } from '../../providers/firebase-service/firebase-service';
import { MyApp } from '../../app/app.component';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, MenuController } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { Factura } from '../../app/models/factura';
import { AlmacenServiceProvider } from '../../providers/almacen-service/almacen-service';
import firebase from 'firebase';
import { LoadingController } from 'ionic-angular';


/**
 * Generated class for the SubirFacturaPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-subir-factura',
  templateUrl: 'subir-factura.html',
})
export class SubirFacturaPage {
 
  public uid;
  public nombre;
  factura = {} as Factura;
  infoFactura$: FirebaseListObservable<Factura[]>
  public base64Image;
  alertCtrl: AlertController;
  almacenes: FirebaseListObservable<any>;
  public selectedvalue;
  constructor(public navCtrl: NavController, public navParams: NavParams, 
    alertCtrl: AlertController, 
    public loadingCtrl: LoadingController,
    private database: AngularFireDatabase,
    public menu: MenuController,
    public almacenService: AlmacenServiceProvider,
    public global: MyApp
  ) {
    this.menu1Active();
    this.base64Image = this.navParams.get("base64Image");
    
    this.alertCtrl = alertCtrl;
    this.infoFactura$ = this.database.list('factura');
    this.almacenes = this.database.list('/Almacen');
  
    console.log(this.selectedvalue);
    
  }

  menu1Active() {
    this.menu.enable(true, 'menu1');
  }

   ionViewDidLoad() {
    this.base64Image = this.navParams.get("base64Image");
    this.uid = this.global.uid;
    this.nombre = this.global.nombre;
    
  }


  agregar(){
    let storageRef = firebase.storage().ref();
    const filename = "factura "+Math.floor(Date.now() / 1000);
    const imageRef = storageRef.child(`img/facturas/${filename}.jpg`);
    if(this.selectedvalue == undefined){
      let alert = this.alertCtrl.create({
        title: 'Error',
        subTitle: 'Debe seleccionar el almacén de la factura.',
        buttons: ['Aceptar']
      });
      alert.present();
    }
    else{
      this.presentLoading();
      imageRef.putString(this.base64Image, firebase.storage.StringFormat.DATA_URL).then((snapshot)=> {
      this.agregarFoto(filename);
      this.navCtrl.setRoot('MisFacturasPage',{
          uid: this.uid
      });
     });
    }
  }

  atras(){
    this.navCtrl.setRoot('HomeClientePage');
  }
  agregarFoto(filename){
          this.infoFactura$.push({
            uid: this.uid,
            almacen: this.selectedvalue,
            estado: 'Pendiente',
            url: `img/facturas/${filename}.jpg`
    
        })
      }
     
      presentLoading() {
        let loader = this.loadingCtrl.create({
          content: "Por favor espere...",
          duration: 3000
        });
        loader.present();
      }    
}