import { Component, NgZone } from '@angular/core';
import { AlertController, Button, IonicPage, MenuController, NavController, NavParams } from 'ionic-angular';
import { Almacen } from '../../app/models/almacen';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database';
import { Categoria } from '../../app/models/categoria';
import firebase from 'firebase';
import { urlsAlmacen } from '../../app/models/urlsAlmacen';
import { Storage } from '@ionic/storage';


/**
 * Generated class for the DetalleAlmacenPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalle-almacen',
  templateUrl: 'detalle-almacen.html',
})
export class DetalleAlmacenPage {
  accion: number;
  id: string;
  ocultar1: boolean     = false;
  ocultar2: boolean     = false;
  public selectedCategoria;
  public nombreAlmacen;
  public descAlmacen;
  public horarioAlmacen;
  public localAlmacen;
  public telAlmacen;
  public webAlmacen;
  public selectedEstado;

  public base64Image: any[];

  fileT:any[];
  file:any[];
  filefoto:any[];
  fileS:string[];
  preview:any;
  almacen = {} as Almacen;
  categoria = {} as Categoria;
  campos : string ="";
  selectEstado : String;
  infoAlmacen$: FirebaseListObservable<Almacen[]>;
  infoCate$: FirebaseListObservable<Categoria[]>;
  nombre : String;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public zone: NgZone,    
    private database: AngularFireDatabase,
    public menu: MenuController,
    public storage: Storage,
    public alertCtrl : AlertController) {
    this.menu1Active();
    this.file = [];

    this.fileT = [];
    this.fileS = [];
    this.infoAlmacen$ = this.database.list('Almacen');
    this.infoCate$ = this.database.list('CategoriaAlmacen');
    this.accion= navParams.get("accion");
    this.filefoto = new Array(this.file.length);
    if(this.accion==1){
    this.almacen = navParams.get("almacen");
    this.id = navParams.get("id");
    this.descAlmacen = this.almacen.descripcion;
    this.horarioAlmacen = this.almacen.horario;
    this.telAlmacen = this.almacen.telefono;
    this.webAlmacen = this.almacen.web;
    this.nombreAlmacen = this.almacen.nombre;
    this.selectedCategoria = this.almacen.categoria;
    this.selectedEstado = this.almacen.estado;
    this.localAlmacen = this.almacen.local;
    this.almacen.realurl = new Array(this.almacen.url.length);
    this.almacen.img = new Array(this.almacen.url.length);
    
    this.volverReal();
    for (var index = 0; index < this.almacen.url.length; index++) {
      this.generarFotos(index);
      
    }     

    this.fileS = this.almacen.url;
    
    console.log("este es"+this.filefoto);
    this.ocultar2= !this.ocultar2;
    }
    else{
      this.descAlmacen = "";
      this.telAlmacen = "";
      this.webAlmacen = "";
      this.ocultar1= !this.ocultar1;
   
      } 
    
  } 
  

  ionViewDidLoad() {
    this.file = [];
    this.fileT = [];
    this.fileS = [];
    this.fileS = this.almacen.url;
    //this.selectedCategoria = this.infoCate$[0];
    this.storage.get('nombre').then((data)=>{
      this.nombre=data;
     });
  }
  menu1Active() {
    this.menu.enable(true, 'menu2');
    this.menu.enable(false, 'menu1');
  }
  volverReal(){
    
    for (var index = 0; index < this.almacen.url.length; index++) {
      this.almacen.realurl[index] = `img/almacenes/${this.almacen.nombre}/${this.almacen.url[index]}`;
      
    }
    //this.almacen.realurl
    
    

  }
  generarFotos(index){
  
  //for (var index = 0; index < this.almacen.url.length; index++) {
    let storageRef = firebase.storage().ref();
    let imageRef = storageRef.child(this.almacen.realurl[index]);
    imageRef.getDownloadURL().then(url =>
    this.almacen.img[index] = url);
    console.log("contador"+this.almacen.img);
  //}
}
readPhoto(file, index) {
  
     let reader = new FileReader();
     reader.onload = (e)=>{
       this.zone.run(()=>{
         let path:any = e.target;
         this.filefoto[index] = path.result;
       });
       
     }
      reader.readAsDataURL(file);
     
    }

  validarDatos(){
    this.campos=null;
    if (this.nombreAlmacen==null){
      this.campos="Nombre, ";
    }
    if (this.selectedCategoria==null){
      if(this.campos==null){
        this.campos="Categoría, ";
      }
      else{
     this.campos=this.campos + "Categoría, ";
      }
   }
   if (this.localAlmacen==null){
    if(this.campos==null){
      this.campos="Local, ";
    }
    else{
    this.campos=this.campos + "Local, ";
    }
  }
   else{
    if(this.localAlmacen<0){
      let alert = this.alertCtrl.create({
        title: 'Error',
        subTitle: "El local no es un número correcto",
        buttons: ['Aceptar']
      });
      alert.present();
    }
   }
   if (this.horarioAlmacen==null){
    if(this.campos==null){
      this.campos="Horario de Atención, ";
    }
    else{
    this.campos=this.campos + "Horario de Atención, ";
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
  if (this.campos!=null){
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
    //this.selectedCategoria = this.almacen.categoria;
    console.log(this.selectedCategoria);
    if(this.validarDatos()==true){
      let alert = this.alertCtrl.create({
        title: 'Confirmación',
        subTitle: "¿"+ this.nombre +" está seguro de Modificar éste Almacén?",
        buttons:[
          {
            text: 'Si',
            role: 'si',
            handler: () => {
              console.log('si');
             //aqui va el codigo de modificar
             let storageRef = firebase.storage().ref();
             let filenames: string[] = new Array(10);
             let urlfotos: string[] = new Array(10);

             for (var index = 0; index < this.file.length; index++) {
              filenames[index]= ""+this.file[index].name;
              urlfotos[index]= `${filenames[index]}`;
              console.log(filenames[index]);
              const imageRef = storageRef.child(`img/almacenes/${this.nombreAlmacen}/${filenames[index]}`);
              imageRef.put(this.file[index]).then((snapshot)=> {
                
              });
            }
            for (var index = 0; urlfotos[index]!= undefined; index++) {
              this.fileS.splice(this.fileS.length,0,urlfotos[index]);
              
            }
              
            
            
            //urlfotos.push.apply(urlfotos, this.fileS);
            console.log(this.fileS);
            console.log(urlfotos);
             this.infoAlmacen$.update( this.id, {
              
                    nombre: this.nombreAlmacen,
                    descripcion : this.descAlmacen,
                    horario: this.horarioAlmacen,
                    categoria: this.selectedCategoria,
                    local: this.localAlmacen,
                    telefono: this.telAlmacen,
                    web: this.webAlmacen,
                    estado: this.selectedEstado,
                    url: this.fileS
                                 
                  })                //notificacion de accion realizada
                let alert = this.alertCtrl.create({
                  title: 'Notifiación',
                  subTitle: "Se ha modificado exitosamente el Almacén",
                  buttons: [{
                    text: 'Aceptar',
                    role: 'Aceptar',
                    handler: () => {
                      this.navCtrl.setRoot("ListaAlmacenesPage");
                  
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
}
    
  }

  guardar(){
    if(this.validarDatos()==true){
      let alert = this.alertCtrl.create({
        title: 'Confirmación',
        subTitle: "¿"+ this.nombre +" está seguro de Crear éste Almacén?",
        buttons:[
          {
            text: 'Si',
            role: 'si',
            handler: () => {
              console.log('si');
             //aqui va el codigo de crear
                let storageRef = firebase.storage().ref();
                let filenames: string[] = new Array(10);
                let urlfotos: string[] = new Array(10);
                console.log(this.file);
                for (var index = 0; index < this.file.length; index++) {
                  filenames[index]= ""+this.file[index].name;
                  urlfotos[index]= `${filenames[index]}`;
                  console.log(filenames[index]);
                  const imageRef = storageRef.child(`img/almacenes/${this.nombreAlmacen}/${filenames[index]}`);
                  imageRef.put(this.file[index]).then((snapshot)=> {
                    
                  });
                }      
             
                this.infoAlmacen$.push({
                  nombre: this.nombreAlmacen,
                  descripcion :this.descAlmacen,
                  horario: this.horarioAlmacen,
                  categoria: this.selectedCategoria,
                  local: this.localAlmacen,
                  telefono: this.localAlmacen,
                  web: this.webAlmacen,
                  estado: this.selectedEstado,
                  url: urlfotos
                });

                //notificacion de accion realizada
                let alert = this.alertCtrl.create({
                  title: 'Notifiación',
                  subTitle: "Se ha creado exitosamente el Almacén",
                  buttons: [{
                    text: 'Aceptar',
                    role: 'Aceptar',
                    handler: () => {
                      this.navCtrl.setRoot("ListaAlmacenesPage");
                  
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
}
}
  
  seleccionarFoto(e){
    this.fileT = e.target.files;
    console.log(this.fileT);
  }

  agregar(){
    //this.file = this.file.concat(this.fileT);
    this.file.push.apply(this.file, this.fileT);
    this.fileT = [];
    console.log(this.file);
    for (var index = 0; index < this.file.length; index++) {
      this.readPhoto(this.file[index], index);
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
               
                this.nombreAlmacen=" ";
                this.descAlmacen=" ";
                this.localAlmacen = null; 
                this.selectedCategoria = null;
                this.selectedEstado=null;
                this.navCtrl.setRoot("ListaAlmacenesPage");
            
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
