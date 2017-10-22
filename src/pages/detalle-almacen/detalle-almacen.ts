import { Component } from '@angular/core';
import { AlertController, IonicPage, MenuController, NavController, NavParams } from 'ionic-angular';

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
 
  fileT:any[];
  file:any[];
  preview:any;
  nombreAlmacen : string;
  selectedCategoria : string;
  horarioAlmacen : string;
  localAlmacen : number;
  estado : string;
  campos : string;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public menu: MenuController,
    public alertCtrl : AlertController,) {
    this.menu1Active();
    this.file=[];
    this.fileT=[];
    
  }

  ionViewDidLoad() {
    this.file=[];
    this.fileT=[];
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
    alert("yh");
  }
  seleccionarFoto(e){
    this.fileT = e.target.files;

  }

  agregar(){
        this.file.push.apply(this.file,this.fileT);   
  }

}
