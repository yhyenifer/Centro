import { Component } from '@angular/core';
import { AlertController, IonicPage, MenuController, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the DetalleClientesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@IonicPage()
@Component({
  selector: 'page-detalle-clientes',
  templateUrl: 'detalle-clientes.html',
})
export class DetalleClientesPage {
 
  nombre : string;
  campos : string;
  selectedEstado : string;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public menu: MenuController,
    public storage: Storage,
    public alertCtrl : AlertController,) {
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
    if (this.selectedEstado==null){
      
        this.campos="Estado, ";
       }
       if(this.campos!=null){
        let alert = this.alertCtrl.create({
         title: 'Error',
         subTitle: "Verifica los datos ingresados, el campo " + this.campos + "es requerido",
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
    

  
}
