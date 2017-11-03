import { Component, NgZone } from '@angular/core';
import { AlertController, IonicPage, MenuController, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Evento } from '../../app/models/evento';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database';
import firebase from 'firebase';

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
  conteo : number =0;
  url: string
  id: any;
  evento = {} as Evento;
  infoEvento$: FirebaseListObservable<Evento[]>;
  img: any;
  file: any;
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
    private database: AngularFireDatabase,
    public zone: NgZone,
    public storage: Storage,) {
      this.infoEvento$ = this.database.list('eventos');
    this.menu1Active();
    this.accion= navParams.get("accion");
    if(this.accion==1){ //opcion para cuando se va a modificar
      this.evento = navParams.get("evento");
      this.id = navParams.get("id");
      this.nombreEvento = this.evento.nombre;
      this.descEvento = this.evento.descripcion;
      this.fechaEvento = this.evento.fecha;
      this.horaEvento = this.evento.hora;
      this.selectedEstado = this.evento.estado;
      this.url = `img/eventos/${this.evento.nombre}/${this.evento.url}`;
      let storageRef = firebase.storage().ref();
      let imageRef = storageRef.child(this.url);
      imageRef.getDownloadURL().then(url =>
      this.eventoImagen = url
    );
      

      this.ocultar2= !this.ocultar2;
      this.conteo=1;
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
  seleccionarFoto(e){
    this.file = e.target.files[0];
    console.log(this.file);
    this.readPhoto(this.file);
    this.conteo=parseInt(e.target.files.length);
  }
  readPhoto(file) {
    
       let reader = new FileReader();
       reader.onload = (e)=>{
         this.zone.run(()=>{
           let path:any = e.target;
           this.eventoImagen = path.result;
         });
         
       }
        reader.readAsDataURL(file);
       
      }

  validarDatos(){
    this.campos=null;
    if(this.conteo<1){
      let alert = this.alertCtrl.create({
        title: 'Error',
        subTitle:  this.nombre +" el registro debe tener minímo (1) de archivo",
        buttons:['Aceptar']
      }
    );
    alert.present();
    return false;
    }
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
             var name = "";
             if (this.file != undefined){
             let storageRef = firebase.storage().ref();
             //this.url = this.file.name;
             const imageRefBorrar = storageRef.child(`${this.url}`);
             name = this.file.name;
             imageRefBorrar.delete().then((snapshot)=> {
              
              });
                const imageRef = storageRef.child(`img/eventos/${this.nombreEvento}/${this.file.name}`);
                imageRef.put(this.file).then((snapshot)=> {
              
              });  
            }else{
              name = this.evento.url;
            }
              this.infoEvento$.update( this.id, {
                
                nombre: this.nombreEvento,
                descripcion : this.descEvento,
                fecha : this.fechaEvento,
                hora : this.horaEvento,
                estado : this.selectedEstado,
                url: name
                                   
                    });
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
            let storageRef = firebase.storage().ref();
            this.url = this.file.name;
            const imageRef = storageRef.child(`img/eventos/${this.nombreEvento}/${this.file.name}`);
            imageRef.put(this.file).then((snapshot)=> {
            
            });
            
            console.log("nombre"+this.url);

            this.infoEvento$.push({
              nombre: this.nombreEvento,
              descripcion : this.descEvento,
              fecha : this.fechaEvento,
              hora : this.horaEvento,
              estado : this.selectedEstado,
              url: this.url
            });

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
