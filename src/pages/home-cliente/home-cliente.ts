import { Component } from '@angular/core';
import { AlertController, IonicPage, MenuController, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database'
import { Factura } from '../../app/models/factura';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { LoadingController } from 'ionic-angular';


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
    public menu: MenuController,
    public loadingCtrl: LoadingController
  )
     {
    this.menu1Active();
    this.infoFactura$ = this.database.list('factura');
    this.alertCtrl = alertCtrl;
    this.uid = navParams.get("uid");
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
  }

  ir(){
    
    this.navCtrl.setRoot('SubirFacturaPage');
  }
  presentLoading() {
    let loader = this.loadingCtrl.create({
      content: "Cargando imagen...",
      duration: 3000
    });
    loader.present();
  }

}