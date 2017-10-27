import { Component } from '@angular/core';
import { AlertController, IonicPage, MenuController, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the DetalleEventosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalle-eventos',
  templateUrl: 'detalle-eventos.html',
})
export class DetalleEventosPage {
  ocultar1: boolean     = false;
  ocultar2: boolean     = false;
  accion: number;
  campos : string;
  nombreEvento : string;
  descEvento : string;
  fechaEvento : string;
  horaEvento : string;
  selectedEstado : string;
  nombre : String;
  eventoImagen : string;
  eventos = {} as any;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public menu: MenuController,
    public alertCtrl : AlertController,
    public storage: Storage,) {
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
    if (this.nombreEvento==null){
      this.campos="Nombre, ";
    }
    if (this.nombreEvento==""){
      this.campos="Nombre, ";
    }
    if (this.fechaEvento==null){
     if(this.campos==null){
      this.campos="Fecha, ";
     }
     else{
      this.campos=this.campos + "Fecha, ";
     } 
    
   }
   if (this.horaEvento==null){
    if(this.campos==null){
      this.campos="Hora, ";
     }
     else{
     this.campos=this.campos + "Hora, ";
     }
   }
   if (this.descEvento==null){
    if(this.campos==null){
      this.campos="Descripción, ";
     }
     else{
     this.campos=this.campos + "Descripción, ";
     }
   }
   if (this.descEvento==""){
    if(this.campos==null){
      this.campos="Descripción, ";
     }
     else{
     this.campos=this.campos + "Descripción, ";
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
        subTitle: "¿"+ this.nombre +" está seguro de Modificar éste Evento?",
        buttons:[
          {
            text: 'Si',
            role: 'si',
            handler: () => {
              console.log('si');
             //aqui va el codigo de modificar Evento

                //notificacion de accion realizada
                let alert = this.alertCtrl.create({
                  title: 'Notifiación',
                  subTitle: "Se ha modificado exitosamente el Evento",
                  buttons: [{
                    text: 'Aceptar',
                    role: 'Aceptar',
                    handler: () => {
                      this.navCtrl.setRoot("ListaEventosPage");
                  
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
      subTitle: "¿"+ this.nombre +" está seguro de  Agregar éste Evento?",
      buttons:[
        {
          text: 'Si',
          role: 'si',
          handler: () => {
            console.log('si');
            //aqui va el codigo para guardar el evento
        

            //notificacion de accion realizada
             let alert = this.alertCtrl.create({
            title: 'Notifiación',
            subTitle: "Se ha creado exitosamente el Evento",
            buttons: [{
              text: 'Aceptar',
              role: 'Aceptar',
              handler: () => {
                this.navCtrl.setRoot("ListaEventosPage");
            
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
           
            this.nombreEvento=" ";
            this.descEvento=" ";
            this.fechaEvento = null; 
            this.horaEvento = null;
            this.navCtrl.setRoot("ListaEventosPage");
        
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
