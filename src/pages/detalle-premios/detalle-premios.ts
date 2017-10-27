import { Component, NgZone } from '@angular/core';
import { AlertController, IonicPage, MenuController, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import firebase from 'firebase';
import { Premio } from '../../app/models/premio';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database';


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
  url: string
  id: any;
  premio = {} as Premio;
  infoPremio$: FirebaseListObservable<Premio[]>;
  img: any;
  file: any;
  ocultar1: boolean = false;
  ocultar2: boolean     = false;
  accion: number;
  campos : string;
  nombrePremio : string;
  descPremio : string;
  cantidad : number;
  valorPuntos : number;
  selectedEstado : string;
  nombre : String;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public alertCtrl : AlertController,
    public zone: NgZone,
    private database: AngularFireDatabase,
    public storage: Storage,
    public menu: MenuController) {
    this.infoPremio$ = this.database.list('premio');
    this.menu1Active();
    this.accion= navParams.get("accion");
    if(this.accion==1){ //opcion para cuando se va a modificar
      this.premio=navParams.get("premio");
      this.id = navParams.get("id");
      this.descPremio = this.premio.descripcion;
      this.nombrePremio = this.premio.nombre;
      this.cantidad = this.premio.cantidad;
      console.log("premio "+this.premio.cantidad);
      this.valorPuntos = this.premio.valorPuntos;
      this.selectedEstado = this.premio.estado;
      //this.url = this.premio.url;
      this.url = `img/premios/${this.premio.nombre}/${this.premio.url}`;
      let storageRef = firebase.storage().ref();
      let imageRef = storageRef.child(this.url);
      imageRef.getDownloadURL().then(url =>
      this.img = url);
      this.ocultar2= !this.ocultar2;
    }
    else{ //opcion para cuando se va a crear
      this.descPremio = "";
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
  seleccionarFoto(e){
    this.file = e.target.files[0];
    console.log(this.file);
    this.readPhoto(this.file)
  }
  readPhoto(file) {
    
       let reader = new FileReader();
       reader.onload = (e)=>{
         this.zone.run(()=>{
           let path:any = e.target;
           this.img = path.result;
         });
         
       }
        reader.readAsDataURL(file);
       
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
              
              var name = "";
             if (this.file != undefined){
              console.log("cleto"+this.file.name);
             let storageRef = firebase.storage().ref();
             //this.url = this.file.name;
             const imageRefBorrar = storageRef.child(`${this.url}`);
             name = this.file.name;
             imageRefBorrar.delete().then((snapshot)=> {
              
              });
                const imageRef = storageRef.child(`img/premios/${this.nombrePremio}/${this.file.name}`);
                imageRef.put(this.file).then((snapshot)=> {
              
              });  
            }else{
              name = this.premio.url;
            }
              this.infoPremio$.update( this.id, {
                
                    nombre: this.nombrePremio,
                    descripcion : this.descPremio,
                    cantidad : this.cantidad,
                    valorPuntos : this.valorPuntos,
                    estado : this.selectedEstado,
                    url: name
                                   
                    });
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
            let storageRef = firebase.storage().ref();
            this.url = this.file.name;
            const imageRef = storageRef.child(`img/premios/${this.nombrePremio}/${this.file.name}`);
            imageRef.put(this.file).then((snapshot)=> {
            
            });
            
            console.log("nombre"+this.infoPremio$);

            this.infoPremio$.push({
              nombre: this.nombrePremio,
              descripcion : this.descPremio,
              cantidad : this.cantidad,
              valorPuntos : this.valorPuntos,
              estado : this.selectedEstado,
              url: this.url
            });
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
            this.selectedEstado="Activo";
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
