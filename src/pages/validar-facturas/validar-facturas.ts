import { Component } from '@angular/core';
import { AlertController, IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
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
  nombre : String;
  valor : number;
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public alertCtrl : AlertController,
    public storage: Storage) {
  }

  ionViewDidLoad() {
    this.storage.get('nombre').then((data)=>{
      this.nombre=data;
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
