import { MyApp } from '../../app/app.component';
import { Platform } from 'ionic-angular';
import { User } from '../../app/models/user';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthProvider } from '../../providers/auth/auth';
import { FirebaseServicePrivider } from '../../providers/firebase-service/firebase-service';
import { FirebaseObjectObservable} from 'angularfire2/database';
import { MenuController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Device } from '@ionic-native/device';
import { InAppBrowser } from '@ionic-native/in-app-browser';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  error:any; 
  user= { } as User;

  tipo: FirebaseObjectObservable<any>;
  nombre: FirebaseObjectObservable<any>;
  estado: FirebaseObjectObservable<any>;
  puntos: FirebaseObjectObservable<any>;
  foto: FirebaseObjectObservable<any>;
  notificacion: FirebaseObjectObservable<any>;
  constructor(
    private afAuth: AngularFireAuth,
  	public navCtrl: NavController,
  	public auth : AuthProvider,
    public alertCtrl : AlertController,
    public navParams : NavParams,
    public firebaseService: FirebaseServicePrivider,
    public platform: Platform,
    public menuCtrl: MenuController,
    public menu: MenuController,
    public storage: Storage,
    public global: MyApp,
    private device: Device,
    private iap: InAppBrowser
    ) {
      this.menu1Active();
    }
   
  //esto es para desactivar los menu en la pantalla login
    menu1Active() {
      this.menu.enable(false, 'menu1');
    } 
    
    
  
//creacion de usuario (esta correcto)
  signin(){
    this.auth.registerUser(this.user.email,this.user.password)
    .then((user) => {
      // El usuario se ha creado correctamente
      let alert = this.alertCtrl.create({
        title: 'Notifiación',
        subTitle: "Te has unido con éxito a nuestra comunidad MegaCity",
        buttons: ['Aceptar']
      });
      alert.present();
    })
    .catch(err=>{
      let alert = this.alertCtrl.create({
        title: 'Error',
        subTitle: err.message,
        buttons: ['Aceptar']
      });
      alert.present();
    })

  }
//autenticar
 async login(user: User) 
{

  if(user.email!=null && user.password!=null){
    this.afAuth.auth.signInWithEmailAndPassword(user.email,user.password ) 
    
 .then((success)=>{
   const authObserv= this.afAuth.authState.subscribe(auth => {
      
      this.tipo= this.firebaseService.getUserTipo(auth.uid);
      this.nombre=this.firebaseService.getUserName(auth.uid);
      this.puntos=this.firebaseService.getUserPuntos(auth.uid);
      this.notificacion=this.firebaseService.getUserNotificacion(auth.uid); 
      this.estado=this.firebaseService.getUserEstado(auth.uid);   
      this.foto=this.firebaseService.getUserFoto(auth.uid);
      this.tipo.subscribe(usersnapshot=>{
      this.storage.set('uid', auth.uid);
      this.storage.set('nombre', usersnapshot.nombre);
      this.storage.set('correo', auth.email); 
      this.storage.set('puntos', usersnapshot.puntos); 
      this.storage.set('foto', usersnapshot.foto);
      this.storage.set('notificacion', usersnapshot.notificacion);
      this.global.uid= auth.uid;
      this.global.nombre= usersnapshot.nombre;
      this.global.correo= auth.email;
      this.global.puntos= usersnapshot.puntos;
      this.global.foto= usersnapshot.foto;
      this.global.notificacion= usersnapshot.notificacion;
      if(usersnapshot.estado=="Activo"){
        if (usersnapshot.tipo=="cliente"){
         
          this.navCtrl.setRoot('HomeClientePage',{
            uid: auth.uid,
            nombre: usersnapshot.nombre,
            email: auth.email,
            puntos:  usersnapshot.puntos
          });
          
        }
        if (usersnapshot.tipo=="admin"){
          var plataforma=this.device.platform;
          if (plataforma=="Android"){
            let alert = this.alertCtrl.create({
              title: 'Error',
              subTitle: "El acceso por esta aplicación es sólo para Clientes " ,
              buttons:[
                {
                  text: 'Ir al sitio',
                  role: 'si',
                  handler: () => {
                    this.openLink();            
                  
                  }
                },
                {
                  text: 'Aceptar',
                  role: 'no',
                  handler: () => {
                    
                  }
                }
              ]
            });
            alert.present();
          }
          else{
          this.navCtrl.setRoot('HomeAdminPage',{
            nombre: usersnapshot.nombre,
            email: auth.email
          });
        }
        }
      }
      else{
        let alert = this.alertCtrl.create({
          title: 'Error',
          subTitle: "La cuenta con la que intentas ingresar a MegaCity no esta Activa " ,
          buttons:[
          
            {
              text: 'Aceptar',
              role: 'no',
              handler: () => {
                
              }
            }
          ]
        });
        alert.present();

      }
      })

      authObserv.unsubscribe();
    
  
  })
}).catch((err)=>{
  let alert = this.alertCtrl.create({
    title: 'Autenticación Incorrecta',
    subTitle: "Verifica tú Email y Contraseña",
    buttons: ['Aceptar']
  });
  alert.present();
}) 
    //pendiiente limpiar pagina de login al ir atras
}
else{
  let alert = this.alertCtrl.create({
    title: 'Autenticación Incorrecta',
    subTitle: "Faltan datos",
    buttons: ['Aceptar']
  });
  alert.present();
}
}

openLink(){
  this.iap.create("https://megacity.herokuapp.com/");
}

}