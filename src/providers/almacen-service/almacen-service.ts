import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import * as firebase from 'firebase';

/*
  Generated class for the AlmacenServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AlmacenServiceProvider {

  private data: any;
  private nodoAlmacen: any;
  private refFire: any;


  constructor(public http: Http) {
    this.nodoAlmacen = firebase.database().ref('Almacen');
    this.refFire = firebase.database().ref();
  }

  listarAlmacenes(){
    console.log("cosas+ "+this.nodoAlmacen.list('/Almacen'));
    return this.nodoAlmacen.list('/Almacen');

  }

}
