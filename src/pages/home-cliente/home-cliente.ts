import { Component } from '@angular/core';
import { AlertController, IonicPage, MenuController, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database'
import { Factura } from '../../app/models/factura';
import { Camera, CameraOptions } from '@ionic-native/camera'
import firebase from 'firebase';
declare var FCMPlugin;

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
 
  firestore = firebase.database().ref('/pushtokens');
  firemsg = firebase.database().ref('/messages');

  public uid;
  public nombre;
  public email;
  public puntos;

  options1: CameraOptions = {
    quality: 25,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE,
    sourceType: 1
  }
  options2: CameraOptions = {
    quality: 25,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE,
    sourceType: 0
  }
  alertCtrl: AlertController;
  public photos : any;
  public base64Image : string;
  factura = {} as Factura;
  infoFactura$: FirebaseListObservable<Factura[]>

  constructor(private camera: Camera, 
    public navCtrl: NavController, 
    public navParams: NavParams,
    private database: AngularFireDatabase, 
    alertCtrl: AlertController,
    public menu: MenuController

  )
     {
    this.menu1Active();
    this.infoFactura$ = this.database.list('factura');
    this.alertCtrl = alertCtrl;
    this.uid = navParams.get("uid");

    this.tokensetup().then((token) => {
         this.storetoken(token);
       })


  }
 
  

  menu1Active() {
    this.menu.enable(true, 'menu1');
    this.menu.enable(false, 'menu2');
  }
   async tomarFoto(): Promise<any>{
    
      try{
        
        this.camera.getPicture(this.options1).then((ImageData) => {
          this.base64Image = 'data:image/jpeg;base64,' + ImageData;
          this.navCtrl.setRoot('SubirFacturaPage',{
            base64Image: this.base64Image,
            uid: this.uid
          });
        }, (err) => {
        });
      }
      catch(e){
      }
  }

  async sacarFoto(): Promise<any>{
    try{
      //this.uid = 'asfdfhsfhgjsfhj';
  
      this.camera.getPicture(this.options2).then((ImageData) => {
        this.base64Image = 'data:image/jpeg;base64,' + ImageData;
        this.navCtrl.setRoot('SubirFacturaPage',{
          base64Image: this.base64Image,
          uid: this.uid
        });
      }, (err) => {
        
      });

    }
    catch(e){

    }
}


  upload() {
    this.navCtrl.push('SubirFacturaPage',{
      base64Image: this.base64Image,
      uid: this.uid,
      nombre: this.nombre
    });

  }


 
  ionViewDidLoad() {
    this.uid = this.navParams.get("uid");
    this.nombre =this.navParams.get("nombre");
    this.email =this.navParams.get("email");
    this.puntos =this.navParams.get("puntos");
    // console.log('nombre: ' + this.nombre + ' email: '+this.puntos);
    // console.log('email: ' + this.email);
    FCMPlugin.onNotification(function(data){
        if(data.wasTapped){
           //Notification was received on device tray and tapped by the user.
           alert( JSON.stringify(data) );
         }else{
           //Notification was received in foreground. Maybe the user needs to be notified.
           alert( JSON.stringify(data) );
         }
         });
    
       FCMPlugin.onTokenRefresh(function(token){
           alert( token );
       });    
  }

  ir(){
    
    this.navCtrl.setRoot('SubirFacturaPage');
  }
  tokensetup() {
     var promise = new Promise((resolve, reject) => {
       FCMPlugin.getToken(function(token){
         alert(token)
     resolve(token);
       }, (err) => {
         reject(err);
 });
     })
     return promise;
   }

   storetoken(t) {
     this.database.list(this.firestore).push({
       uid: firebase.auth().currentUser.uid,
       devtoken: t
        
     }).then(() => {
       alert('Token stored');
       }).catch(() => {
         alert('Token not stored');
       })

     this.database.list(this.firemsg).push({
       sendername: 'mauro',//firebase.auth().currentUser.displayName,
       message: 'hello'
     }).then(() => {
       alert('Message stored');
       }).catch(() => {
         alert('Message not stored');
   })  
 }

}