import { Component } from '@angular/core';
import { AlertController, IonicPage, MenuController, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the DetallePremiosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalle-premios',
  templateUrl: 'detalle-premios.html',
})
export class DetallePremiosPage {
 
  campos : string;
  nombrePremio : string;
  descPremio : string;
  cantidad : number;
  valorPuntos : number;
  estado : string;
  nombre : String;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public alertCtrl : AlertController,
    public storage: Storage,
    public menu: MenuController) {
    this.menu1Active();
  }

  ionViewDidLoad() {
    this.storage.get('nombre').then((data)=>{
      this.nombre=data;
     });
   
  }
  menu1Active() {
    this.menu.enable(true, 'menu2');
    this.menu.enable(false, 'menu1');
  }
  
  validarDatos(){
    if (this.nombrePremio==null){
      this.campos="Nombre, ";
    }
    if (this.cantidad==null){
     this.campos=this.campos + "Cantidad Disponible, ";
   }
   else{
     if(this.cantidad<0){
       let alert = this.alertCtrl.create({
         title: 'Error',
         subTitle: "La Cantidad Disponible debe ser mayor a Cero",
         buttons: ['Aceptar']
       });
       alert.present();
     }
   }
   if (this.valorPuntos==null){
     this.campos=this.campos + "Valor en Puntos, ";
   }
   else{
     if(this.valorPuntos<0){
       let alert = this.alertCtrl.create({
         title: 'Error',
         subTitle: "El Valor en Puntos debe ser mayor a Cero",
         buttons: ['Aceptar']
       });
       alert.present();
     }
   }
   if (this.estado==null){
     this.campos=this.campos + "Estado, ";
   }
    
    let alert = this.alertCtrl.create({
     title: 'Error',
     subTitle: "Verifica los datos ingresados, los campos " + this.campos + "son requeridos",
     buttons: ['Aceptar']
   });
   alert.present();
   }
  

  modificar(){

  }

  guardar(){
    this.validarDatos();
    let alert = this.alertCtrl.create({
      title: 'Confirmación',
      subTitle: "¿"+ this.nombre +" está seguro de  Agregar éste Premio?",
      buttons:[
        {
          text: 'Si',
          role: 'si',
          handler: () => {
            console.log('si');
            //aqui va el codigo para guardar el premio
        
          } 
         },
      {
        text: 'No',
        role: 'no',
        handler: () => {
          console.log('no');
        }
      }]
      });
      alert.present();


    

  }
 
  cancelar(){

    let alert = this.alertCtrl.create({
      title: 'Confirmación',
      subTitle: "¿"+ this.nombre +" está seguro que desea salir sin Guardar?",
      buttons:[
        {
          text: 'Si',
          role: 'si',
          handler: () => {
           
            this.nombrePremio=" ";
            this.descPremio=" ";
            this.cantidad = null; 
            this.valorPuntos = null;
            this.navCtrl.setRoot("ListaPremiosPage");
        
          } 
         },
      {
        text: 'No',
        role: 'no',
        handler: () => {
          
        }
      }]
      });
      alert.present();
   
  }

}
