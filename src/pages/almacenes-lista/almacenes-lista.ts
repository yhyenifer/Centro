import { Almacen } from '../../app/models/almacen';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database';
import { Component } from '@angular/core';
import { IonicPage, MenuController, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AlmacenesListaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-almacenes-lista',
  templateUrl: 'almacenes-lista.html',
})
export class AlmacenesListaPage {
  almacenes$: FirebaseListObservable<Almacen[]>;
  almacen = {} as Almacen;
  items: Array<any>;
  loadItems: Array<any>;
  almacenes: any[];
  
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private database: AngularFireDatabase,
  public menu: MenuController) {
    this.menu1Active();
    this.almacenes$ = this.database.list('Almacen');
    this.almacenes = [];
    this.database.list('Almacen').subscribe(data => {
      
              this.almacenes = data;
              this.items=this.almacenes;
              this.loadItems=this.almacenes;
            
    });
  
    
  }

  menu1Active() {
    this.menu.enable(true, 'menu1');
    this.menu.enable(false, 'menu2');
  }
  ionViewDidLoad() {
    this.almacenes$ = this.database.list('Almacen');
    this.almacenes = [];
    this.database.list('Almacen').subscribe(data => {
      
              this.almacenes = data;
              console.log("yh "+this.almacenes);
    });
    this.initializeItems();
  }
  mostrarAlmacen(almacen, almacenId){
    this.navCtrl.push('AlmacenDetallePage',{
      almacen : almacen,
      id: almacenId,
     
    });
  }

  initializeItems() {
    this.items=this.loadItems;
   }
     
     getItems(searchbar) {
       // Reset items back to all of the items
     this.initializeItems();
     
       // set q to the value of the searchbar
       let q = searchbar.target.value;
      if (q && q.trim()!= ''){
       this.items = this.items.filter((item) => {
           return (item.nombre.toLowerCase().indexOf(q.toLowerCase()) > -1);
         
       });
       
       console.log("f "+q, this.items.length);
     }
   }
}
