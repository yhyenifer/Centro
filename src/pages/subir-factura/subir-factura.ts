import { ListHeader } from 'ionic-angular/umd';
import { isTab } from 'ionic-angular/navigation/nav-util';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, MenuController } from 'ionic-angular';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database';
import { Factura } from '../../app/models/factura';
import { AlmacenServiceProvider } from '../../providers/almacen-service/almacen-service';
import firebase from 'firebase';

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
  factura = {} as Factura;
  infoFactura$: FirebaseListObservable<Factura[]>
  public base64Image;
  alertCtrl: AlertController;
  almacenes: FirebaseListObservable<any>;
  public selectedvalue;
  constructor(public navCtrl: NavController, public navParams: NavParams, 
    alertCtrl: AlertController, 
    private database: AngularFireDatabase,
    public menu: MenuController,
    public almacenService: AlmacenServiceProvider
  ) {
    this.menu1Active();
    this.base64Image = this.navParams.get("base64Image");
    this.uid = this.navParams.get("uid");
    this.alertCtrl = alertCtrl;
    this.infoFactura$ = this.database.list('factura');
    this.almacenes = this.database.list('/Almacen');
    console.log(this.selectedvalue);
  }

  menu1Active() {
    this.menu.enable(true, 'menu1');
  }

  ListarAlmacen(){


  }

  ionViewDidLoad() {
    this.base64Image = this.navParams.get("base64Image");
    this.uid = this.navParams.get("uid");

    //this.almacenes=this.ListarAlmacen();
   
  }


  agregar(){
    //console.log(this.selectedvalue);
    let storageRef = firebase.storage().ref();
    // Create a timestamp as filename
    const filename = "factura "+Math.floor(Date.now() / 1000);

    // Create a reference to 'images/todays-date.jpg'
    const imageRef = storageRef.child(`img/facturas/${filename}.jpg`);
    imageRef.putString(this.base64Image, firebase.storage.StringFormat.DATA_URL).then((snapshot)=> {
      // Do something here when the data is succesfully uploaded!
      
      
      this.agregarFoto(filename);
      
      this.navCtrl.setRoot('MisFacturasPage',{
        uid: this.uid
      });
     });
  }

  subir(){
    this.navCtrl.push('HomeClientePage');
  }
  showSuccesfulUploadAlert() {
    let alert = this.alertCtrl.create({
      title: 'Uploaded!',
      subTitle: 'Picture is uploaded to Firebase',
      buttons: ['OK']
    });
    alert.present();

    // clear the previous photo data in the variable
    this.base64Image = "";
  }
  agregarFoto(filename){
    
        //this.uid = 'asfdfhsfhgjsfhj';
        console.log(this.selectedvalue);
        this.infoFactura$.push({
    
          uid: this.uid,
          almacen: this.selectedvalue,
          estado: 'Pendiente',
          url: `img/facturas/'${filename}'.jpg`
    
        })
      }

      
}