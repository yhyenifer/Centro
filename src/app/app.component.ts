import { FirebaseObjectObservable } from 'angularfire2/database';
import { Storage } from '@ionic/storage';
import { HomeAdminPage } from '../pages/home-admin/home-admin';
import { User } from './models/user';
import { MisFacturasPage } from '../pages/mis-facturas/mis-facturas';
import { HomeClientePage } from '../pages/home-cliente/home-cliente';
import { Component, ViewChild } from '@angular/core';
import { Nav,  Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import firebase from 'firebase';
import { LoginPage } from '../pages/login/login';
import { AngularFireAuth } from 'angularfire2/auth';


 export const firebaseConfig = {
  apiKey: "AIzaSyDUz7IJOCgsz5Zk9HBoU0cwF9z2Q229LtI",
  authDomain: "tiendq-3d47a.firebaseapp.com",
  databaseURL: "https://tiendq-3d47a.firebaseio.com",
  storageBucket: "tiendq-3d47a.appspot.com",
  messagingSenderId: "12950516640"
};

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
   login: LoginPage;
   nombre: String;
   correo: String;
   puntos: number;
   foto: string;
  @ViewChild(Nav) nav: Nav;

  rootPage: any = 'LoginPage'  //HomePage; //esto cambia  para poner el login
  pages: Array<{title: string, component: any, icono: any}>;
  pagesCentro: Array<{title: string, component: any, icono: any}>;
  pagesAdmin: Array<{title: string, component: any, icono: any}>;
  
  constructor(
    public platform: Platform, 
    public statusBar: StatusBar, 
    public splashScreen: SplashScreen,
    private afAuth: AngularFireAuth,
    public storage: Storage
    
  ) {
     platform.ready().then(() => {
      this.pages = [
     
        { title: 'Subir Facturas', component: 'HomeClientePage', icono: 'document' },
        { title: 'Mis Facturas', component: 'MisFacturasPage', icono: 'basket' }, 
        { title: 'Mis Premios', component: 'HomeClientePage', icono: 'heart' } // pendiente de cambio el componente
       
        ];
      this.pagesCentro = [
        { title: 'Premios', component: 'HomeClientePage', icono: 'heart-outline' }, // pendiente de cambio  el componente
        { title: 'Almacenes', component: 'HomeClientePage', icono: 'cart' }, // pendiente de cambio  el componente
        { title: 'Eventos', component: 'HomeClientePage', icono: 'calendar' } // pendiente de cambio  el componente
      ]  
      this.pagesAdmin = [
        { title: 'Validar Facturas', component: 'FacturasPendientesPage', icono: 'checkbox-outline' },
        { title: 'Administrar Premios', component: 'HomeAdminPage', icono: 'add-circle' }, // pendiente de cambio  el componente
        { title: 'Administrar Almacenes', component: 'HomeClientePage', icono: 'cart' }, // pendiente de cambio  el componente
        { title: 'Administrar Eventos', component: 'HomeClientePage', icono: 'calendar' }, // pendiente de cambio  el componente
        { title: 'Generar Reportes', component: 'HomeClientePage', icono: 'clipboard' } // pendiente de cambio  el componente
      ]
    });
  }


  initializeApp() {
    this.platform.ready().then(() => {
      firebase.initializeApp(firebaseConfig);
    });
  }

  openPage(page) {
    // // Reset the content nav to have just this page
    // // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  ionViewDidLoad(){
  
   this.storage.get('nombre').then((data)=>{
    this.nombre=data;
    console.log("stotage nomb: "+ this.nombre);
   });
   this.storage.get('correo').then((data)=>{
     this.correo=data;
    });
    this.storage.get('puntos').then((data)=>{
     this.puntos=data;
    });
    this.storage.get('foto').then((data)=>{
      this.foto=data;
     });  
  }
salir(){

this.afAuth.auth.signOut();
this.platform.exitApp();
this.nav.setRoot('LoginPage');


}

}
