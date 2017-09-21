
import { User } from '../../app/models/user';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthProvider } from '../../providers/auth/auth';
import { FirebaseServicePrivider } from '../../providers/firebase-service/firebase-service';
import { FirebaseObjectObservable} from 'angularfire2/database';



@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  error:any; 
  user= { } as User;

  tipo: FirebaseObjectObservable<any>;


  constructor(
    private afAuth: AngularFireAuth,
  	public navCtrl: NavController,
  	public auth : AuthProvider,
    public alertCtrl : AlertController,
    public navParams : NavParams,
    public firebaseService: FirebaseServicePrivider
    ) {

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
      this.tipo.subscribe(usersnapshot=>{
        console.log('tipo de usuario: ',usersnapshot.tipo);
        if (usersnapshot.tipo=="cliente"){
          this.navCtrl.push('HomeClientePage',{
            uid: auth.uid
          });
        }
        if (usersnapshot.tipo=="admin"){
          this.navCtrl.push('HomeAdminPage');
          
        }
      })
      console.log("uid: "+ auth.uid);
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

 
}