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
  ocultar1: boolean     = false;
  ocultar2: boolean     = false;
  accion: number;
  campos : string;
  nombrePremio : string;
  descPremio : string;
  cantidad : number;
  valorPuntos : number;
  selectedEstado : string;
  nombre : string;
  
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public alertCtrl : AlertController,
    public storage: Storage,
    public menu: MenuController) {
    this.menu1Active();
    this.accion= navParams.get("accion");
    if(this.accion==1){ //opcion para cuando se va a modificar
      this.ocultar2= !this.ocultar2;
    }
    else{ //opcion para cuando se va a crear
     
      this.ocultar1= !this.ocultar1;

    }
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
    this.campos=null;
    if (this.nombrePremio==null){
      this.campos="Nombre, ";
    }
    if (this.cantidad==null){
     if(this.campos==null){
      this.campos="Cantidad Disponible, ";
     }
     else{
      this.campos=this.campos + "Cantidad Disponible, ";
     } 
    
   }
   else{
     if(this.cantidad<0){
       let alert = this.alertCtrl.create({
         title: 'Error',
         subTitle: "La Cantidad Disponible debe ser mayor a Cero",
         buttons: ['Aceptar']
       });
       alert.present();
       return false;
     }
   }
   if (this.valorPuntos==null){
    if(this.campos==null){
      this.campos="Valor en Puntos, ";
     }
     else{
     this.campos=this.campos + "Valor en Puntos, ";
     }
   }
   else{
     if(this.valorPuntos<0){
       let alert = this.alertCtrl.create({
         title: 'Error',
         subTitle: "El Valor en Puntos debe ser mayor a Cero",
         buttons: ['Aceptar']
       });
       alert.present();
       return false;
     }
   }
   if (this.selectedEstado==null){
    if(this.campos==null){
      this.campos="Estado, ";
     }
     else{
     this.campos=this.campos + "Estado, ";
     }
   }
    if(this.campos!=null){
    let alert = this.alertCtrl.create({
     title: 'Error',
     subTitle: "Verifica los datos ingresados, los campos " + this.campos + "son requeridos",
     buttons: ['Aceptar']
   });
   alert.present();
   return false;
   }
   else{
     return true;
   }
  }
  

  modificar(){
    if(this.validarDatos()==true){
      let alert = this.alertCtrl.create({
        title: 'Confirmación',
        subTitle: "¿"+ this.nombre +" está seguro de Modificar éste Premio?",
        buttons:[
          {
            text: 'Si',
            role: 'si',
            handler: () => {
              console.log('si');
             //aqui va el codigo de modificar

                //notificacion de accion realizada
                let alert = this.alertCtrl.create({
                  title: 'Notifiación',
                  subTitle: "Se ha modificado exitosamente el Premio",
                  buttons: [{
                    text: 'Aceptar',
                    role: 'Aceptar',
                    handler: () => {
                      this.navCtrl.setRoot("ListaPremiosPage");
                  
                    } 
                  }
                  ]
                });
                alert.present();
                   }

       } 
       ,
       {
         text: 'No',
         role: 'no',
         handler: () => {
           
         }
       }]
       });
       alert.present();
}}

  guardar(){
   if(this.validarDatos()==true){
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
        

            //notificacion de accion realizada
             let alert = this.alertCtrl.create({
            title: 'Notifiación',
            subTitle: "Se ha creado exitosamente el Premio",
            buttons: [{
              text: 'Aceptar',
              role: 'Aceptar',
              handler: () => {
                this.navCtrl.setRoot("ListaPremiosPage");
            
              } 
            }
            ]
          });
          alert.present();
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
