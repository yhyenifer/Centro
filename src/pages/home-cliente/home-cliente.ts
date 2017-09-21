import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database'
import { Factura } from '../../app/models/factura';
import { Camera, CameraOptions } from '@ionic-native/camera'
import firebase from 'firebase';
/**
 * Generated class for the HomeClientePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home-cliente',
  templateUrl: 'home-cliente.html',
})
export class HomeClientePage {

  public uid;
  options1: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE,
    sourceType: 1
  }
  options2: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE,
    sourceType: 0
  }
  alertCtrl: AlertController;
  public photos : any;
  public base64Image : string;
  private imageSrc: string;
  factura = {} as Factura;
  infoFactura$: FirebaseListObservable<Factura[]>
  constructor(private camera: Camera, public navCtrl: NavController, public navParams: NavParams, private database: AngularFireDatabase, alertCtrl: AlertController) {

    this.infoFactura$ = this.database.list('factura');
    this.alertCtrl = alertCtrl;
    this.uid = navParams.get("uid");
    console.log('cosa  ' + this.uid);

  }

  goBack(){
    console.log("poping");
    this.navCtrl.pop();
  }

  async tomarFoto(): Promise<any>{
    
      try{
        
        this.camera.getPicture(this.options1).then((ImageData) => {
          this.base64Image = 'data:image/jpeg;base64,' + ImageData;
        }, (err) => {
          console.log(err);

        });
       
      }
      catch(e){
        console.log(e);
      }
      //this.upload();
      
  }

  async sacarFoto(): Promise<any>{
    try{
      //this.uid = 'asfdfhsfhgjsfhj';
      console.log(this.uid);
      this.camera.getPicture(this.options2).then((ImageData) => {
        this.base64Image = 'data:image/jpeg;base64,' + ImageData;
      }, (err) => {
        console.log(err);
      });
      
    }
    catch(e){
      console.log(e);
    }
}
  // agregarFoto(filename){

  //   //this.uid = 'asfdfhsfhgjsfhj';

  //   this.infoFactura$.push({

  //     uid: this.uid,
    
  //     almacen: 'cita',
  //     estado: 'sinValidar',
  //     url: `img/facturas/'${filename}'.jpg`

  //   })
  // }

  upload() {
    this.navCtrl.push('SubirFacturaPage',{
      base64Image: this.base64Image,
      uid: this.uid
    });
    // let storageRef = firebase.storage().ref();
    // // Create a timestamp as filename
    // const filename = Math.floor(Date.now() / 1000);

    // // Create a reference to 'images/todays-date.jpg'
    // const imageRef = storageRef.child(`img/facturas/${filename}.jpg`);
    // imageRef.putString(this.base64Image, firebase.storage.StringFormat.DATA_URL).then((snapshot) => {
    //   // Do something here when the data is succesfully uploaded!
    //   this.showSuccesfulUploadAlert();
    //   this.agregarFoto(filename);
    // });

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
  ionViewDidLoad() {
    this.uid = this.navParams.get("uid");
  }

}