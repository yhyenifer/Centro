import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Factura } from '../../app/models/factura';
import { FirebaseServicePrivider } from '../../providers/firebase-service/firebase-service';
import firebase from 'firebase';

/**
 * Generated class for the DetalleFacturaClientePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalle-factura-cliente',
  templateUrl: 'detalle-factura-cliente.html',
})
export class DetalleFacturaClientePage {
  infoFactura$: FirebaseListObservable<Factura[]>;
  factura : Factura;
  id : string;
  estado: string;
  url: string;
  valor: number =0;
  puntos: number = 0;
  factor:number;
  politica:any;
  public base64Image: string;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private database: AngularFireDatabase,
    public firebaseService: FirebaseServicePrivider,)
     {
    let storageRef = firebase.storage().ref();  
    this.infoFactura$ = this.database.list('factura');
    this.factura = navParams.get('factura');
    this.id = navParams.get('id');
    this.estado = this.factura.estado;
    this.url = this.factura.url;
    const imageRef = storageRef.child(this.url);
    imageRef.getDownloadURL().then(url =>
    this.base64Image = url);
    this.database.list('CentroComercial').subscribe(_data => {
      this.politica = _data;
      this.factor=this.politica[0].factorpuntos;
    });
    if (this.estado=="Aprobada"){
    this.valor=this.factura.valor;
    this.puntos= Number(Math.floor(this.valor/this.factor));
    }
    else{
      this.valor=0;
      this.puntos=0;
    }
  }

  ionViewDidLoad() {
  }

}
