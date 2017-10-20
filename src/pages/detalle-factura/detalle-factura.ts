import { FirebaseServicePrivider } from '../../providers/firebase-service/firebase-service';
import { Factura } from '../../app/models/factura';
import { FirebaseListObservable, FirebaseObjectObservable, AngularFireDatabase } from 'angularfire2/database';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import firebase from 'firebase';

/**
 * Generated class for the DetalleFacturaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalle-factura',
  templateUrl: 'detalle-factura.html',
})
export class DetalleFacturaPage {
  infoFactura$: FirebaseListObservable<Factura[]>;
  infoPerfil$: FirebaseListObservable<any[]>;
  factura : Factura;
  id : string;
  usuario: FirebaseObjectObservable<any>;
  nombreCliente: string;
  estado: string;
  almacen: string;
  url: string;
  public base64Image: string;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private database: AngularFireDatabase,
    public firebaseService: FirebaseServicePrivider, ) {
    let storageRef = firebase.storage().ref();
    this.infoFactura$ = this.database.list('factura');
    this.infoPerfil$ = this.database.list('perfil');
    this.factura = navParams.get('factura');
    this.id = navParams.get('id');
    this.usuario=this.firebaseService.getUserName(this.factura.uid);
    this.usuario.subscribe(nombreCliente=>{
      this.nombreCliente = nombreCliente.nombre + " "+ nombreCliente.apellido;
    });
    this.estado = this.factura.estado;
    this.almacen = this.factura.almacen;
    this.url = this.factura.url
    const imageRef = storageRef.child(this.url);
    imageRef.getDownloadURL().then(url =>
    this.base64Image = url);
  }

  ionViewDidLoad() {
   
  }

}
