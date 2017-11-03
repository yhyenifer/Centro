import { Component } from '@angular/core';
import { AlertController, IonicPage, MenuController, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Cliente } from '../../app/models/cliente';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database';

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
  auth: any[];
  auth$: FirebaseListObservable<any[]>;

  cliente = {} as Cliente;
  uid: string;
  id : any;
  infoCliente$: FirebaseListObservable<Cliente[]>;
  nombre : string;
  nombresCliente : string;
  apellidosCliente : string;
  direccionCliente: string;
  puntosCliente: number;
  tipoCliente: string;
  foto: string;
  correoCliente: string;
  telefonoCliente: string;
  campos : string;
  selectedEstado : string;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public menu: MenuController,
    private database: AngularFireDatabase,
    public storage: Storage,
    public alertCtrl : AlertController,) {
      this.infoCliente$ = this.database.list('perfil');
      this.menu1Active();
      this.cliente = navParams.get('cliente');
      this.id = navParams.get('id');
      this.nombresCliente = this.cliente.nombre;
      this.apellidosCliente = this.cliente.apellido;
      this.direccionCliente = this.cliente.direccion;
      this.puntosCliente= this.cliente.puntos;
      this.correoCliente = this.cliente.email;
      this.telefonoCliente= this.cliente.telefono;
      this.selectedEstado = this.cliente.estado;
      this.foto = this.cliente.foto;
      
     
  }

  ionViewDidLoad() {
    this.storage.get('nombre').then((data)=>{
      this.nombre=data;
     });
     this.storage.get('uid').then((data)=>{
      this.uid=data;
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
               this.infoCliente$.update( this.id, {
                
                  estado: this.selectedEstado, 
                
                                   
                    });
               
                  //notificacion de accion realizada
                  let alert = this.alertCtrl.create({
                    title: 'Notifiación',
                    subTitle: "Se ha modificado exitosamente el Premio",
                    buttons: [{
                      text: 'Aceptar',
                      role: 'Aceptar',
                      handler: () => {
                        this.navCtrl.setRoot("ListaClientesPage");
                    
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
   
  cancelar(){
    
        let alert = this.alertCtrl.create({
          title: 'Confirmación',
          subTitle: "¿"+ this.nombre +" está seguro que desea salir sin Guardar?",
          buttons:[
            {
              text: 'Si',
              role: 'si',
              handler: () => {
               
               
                this.selectedEstado=null;
                this.navCtrl.setRoot("ListaClientesPage");
            
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
