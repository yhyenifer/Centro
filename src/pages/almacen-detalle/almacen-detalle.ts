import { InAppBrowser } from '@ionic-native/in-app-browser';
import { Component } from '@angular/core';
import { IonicPage, MenuController, NavController, NavParams } from 'ionic-angular';
import { Almacen } from '../../app/models/almacen';

/**
 * Generated class for the AlmacenDetallePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-almacen-detalle',
  templateUrl: 'almacen-detalle.html',
})
export class AlmacenDetallePage {

  id : string;
  almacen = {} as Almacen;
  public selectedCategoria;
  public nombreAlmacen;
  public descAlmacen;
  public horarioAlmacen;
  public localAlmacen;
  public telAlmacen;
  public webAlmacen;
  public selectedEstado;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private iap: InAppBrowser,
    public menu: MenuController) {
    this.menu1Active();
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
  }

  menu1Active() {
    this.menu.enable(true, 'menu1');
    this.menu.enable(false, 'menu2');
  }
  ionViewDidLoad() {
  }

  url(){
    // this.iap.create("https://megacity.herokuapp.com/");
    this.iap.create(this.webAlmacen);
  }

}
