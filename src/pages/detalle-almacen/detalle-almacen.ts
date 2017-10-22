import { Component } from '@angular/core';
import { AlertController, IonicPage, MenuController, NavController, NavParams } from 'ionic-angular';
import { Almacen } from '../../app/models/almacen';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database';
import { Categoria } from '../../app/models/categoria';
import firebase from 'firebase';
import { urlsAlmacen } from '../../app/models/urlsAlmacen';
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
  preview:any;
  almacen = {} as Almacen;
  categoria = {} as Categoria;
  campos : string;
  selectEstado : String;
  infoAlmacen$: FirebaseListObservable<Almacen[]>;
  infoCate$: FirebaseListObservable<Categoria[]>;
  infourls$: FirebaseListObservable<urlsAlmacen[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private database: AngularFireDatabase,
    public menu: MenuController,
    public alertCtrl : AlertController) {
    this.menu1Active();
    this.file = [];
    this.fileT = [];
    this.infoAlmacen$ = this.database.list('Almacen');
    this.infoCate$ = this.database.list('CategoriaAlmacen');
    this.descAlmacen = "";
    this.horarioAlmacen = "";
    this.telAlmacen = "";
    this.webAlmacen = "";
    
    
  }

  ionViewDidLoad() {
    this.file = [];
    this.fileT = [];
  }
  menu1Active() {
    this.menu.enable(true, 'menu2');
    this.menu.enable(false, 'menu1');
  }


  validarDatos(){
    if (this.nombreAlmacen==null){
      this.campos="Nombre, ";
    }
    if (this.selectedCategoria==null){
     this.campos=this.campos + "Categoría, ";
   }
   if (this.localAlmacen==null){
    this.campos=this.campos + "Local, ";
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
    this.campos=this.campos + "Horario de Atención, ";
  }
  if (this.selectedEstado==null){
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
    let storageRef = firebase.storage().ref();
    let filenames: string[] = new Array(10);
    let urlfotos: string[] = new Array(10);
    console.log(this.file);
    for (var index = 0; index < this.file.length; index++) {
      filenames[index]= ""+this.file[index].name;
      urlfotos[index]= `img/almacenes/${this.nombreAlmacen}/${filenames[index]}.jpg`;
      console.log(filenames[index]);
      const imageRef = storageRef.child(`img/almacenes/${this.nombreAlmacen}/${filenames[index]}.jpg`);
      imageRef.put(this.file[index]).then((snapshot)=> {
        
      });
    }      
    //urlfotos = filenames;
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
  }

}
