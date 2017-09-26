import { Component } from '@angular/core';
import { IonicPage, MenuController, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the HomeAdminPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home-admin',
  templateUrl: 'home-admin.html',
})
export class HomeAdminPage {
  public nombre;
  public email;
  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     public menu: MenuController) {
    this.menu1Active();
  }

  ionViewDidLoad() {
    
  }

  menu1Active() {
    this.menu.enable(true, 'menu2');
    this.menu.enable(false, 'menu1');
  }


  openPage(page){
    this.navCtrl.setRoot(page);
  }
}
