import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Storage} from '@ionic/storage';
/*
  Generated class for the DataStorageProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataStorageProvider {

  constructor(public http: Http, public storage: Storage) {
  
  }

  guardar(name, dato){
    this.storage.set(name,dato);
   } 
  consultar(name){
    return this.storage.get(name);
   }
}




   


