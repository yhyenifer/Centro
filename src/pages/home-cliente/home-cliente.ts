import { parseDate } from 'ionic-angular/util/datetime-util';
import { Evento } from '../../app/models/evento';
import { Component, NgZone } from '@angular/core';
import { AlertController, IonicPage, MenuController, NavController, NavParams } from 'ionic-angular';
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
  nombreEvento: any;
  imagenes: any[];
  eventos: any[];

  firestore = firebase.database().ref('/pushtokens');
  firemsg = firebase.database().ref('/messages');
  evento = {} as Evento;
  eventos$: FirebaseListObservable<Evento[]>;
  fileT:any[];
  file:any[];
  preview:any;
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
    public zone: NgZone

  )
     {
    this.menu1Active();
    this.infoFactura$ = this.database.list('factura');
    this.alertCtrl = alertCtrl;
    this.uid = navParams.get("uid");
    this.eventos$ = this.database.list('eventos');
    this.eventos = [];
    this.nombreEvento=[];
    this.database.list('eventos').subscribe(data => {
      this.eventos = data;
      this.eventos.sort((a,b)=>{
        a=new Date(a.fecha);
        b=new Date (b.fecha);
        return (a<b ? -1 : a>b ? 1 : 0);
      })

      this.imagenes = Array(this.eventos.length);
      for (var index = 0; index <= 2; index++) {
        this.nombreEvento[index]=this.eventos[index].nombre;      
        this.imagenes[index] = `img/eventos/`+this.eventos[index].nombre+`/`+this.eventos[index].url;
        this.generarFotos(index);

      }
    })
    
  }

  generarFotos(index){
    
      let storageRef = firebase.storage().ref();
      let imageRef = storageRef.child(this.imagenes[index]);
      imageRef.getDownloadURL().then(url =>{
        this.imagenes[index] = url;
        this.eventos[index].imagen = url;
      });
        
  
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
 
    
  }

  ir(){
    
    this.navCtrl.setRoot('SubirFacturaPage');
  }
  

  seleccionar(e){
    this.fileT = e.target.files[0];
    this.readPhoto(this.fileT);
  
  }

  readPhoto(file) {

   let reader = new FileReader();
   reader.onload = (e)=>{
     this.zone.run(()=>{
       let path:any = e.target;
       this.base64Image= path.result;
       this.navCtrl.setRoot('SubirFacturaPage',{
        base64Image :  this.base64Image,
       uid: this.uid
     });
     });
     
   }
    reader.readAsDataURL(file);
   
  }

}