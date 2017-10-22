webpackJsonp([3],{

/***/ 457:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(471);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginPageModule = (function () {
    function LoginPageModule() {
    }
    return LoginPageModule;
}());
LoginPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]),
        ],
    })
], LoginPageModule);

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 471:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_app_component__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_firebase_service_firebase_service__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_device__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_in_app_browser__ = __webpack_require__(302);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};











var LoginPage = (function () {
    function LoginPage(afAuth, navCtrl, auth, alertCtrl, navParams, firebaseService, platform, menuCtrl, menu, storage, global, device, iap) {
        this.afAuth = afAuth;
        this.navCtrl = navCtrl;
        this.auth = auth;
        this.alertCtrl = alertCtrl;
        this.navParams = navParams;
        this.firebaseService = firebaseService;
        this.platform = platform;
        this.menuCtrl = menuCtrl;
        this.menu = menu;
        this.storage = storage;
        this.global = global;
        this.device = device;
        this.iap = iap;
        this.user = {};
        this.menu1Active();
    }
    //esto es para desactivar los menu en la pantalla login
    LoginPage.prototype.menu1Active = function () {
        this.menu.enable(false, 'menu1');
    };
    //creacion de usuario (esta correcto)
    LoginPage.prototype.signin = function () {
        var _this = this;
        this.auth.registerUser(this.user.email, this.user.password)
            .then(function (user) {
            // El usuario se ha creado correctamente
            var alert = _this.alertCtrl.create({
                title: 'Notifiación',
                subTitle: "Te has unido con éxito a nuestra comunidad MegaCity",
                buttons: ['Aceptar']
            });
            alert.present();
        })
            .catch(function (err) {
            var alert = _this.alertCtrl.create({
                title: 'Error',
                subTitle: err.message,
                buttons: ['Aceptar']
            });
            alert.present();
        });
    };
    //autenticar
    LoginPage.prototype.login = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var alert_1;
            return __generator(this, function (_a) {
                if (user.email != null && user.password != null) {
                    this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password)
                        .then(function (success) {
                        var authObserv = _this.afAuth.authState.subscribe(function (auth) {
                            _this.tipo = _this.firebaseService.getUserTipo(auth.uid);
                            _this.nombre = _this.firebaseService.getUserName(auth.uid);
                            _this.puntos = _this.firebaseService.getUserPuntos(auth.uid);
                            _this.notificacion = _this.firebaseService.getUserNotificacion(auth.uid);
                            _this.foto = _this.firebaseService.getUserFoto(auth.uid);
                            _this.tipo.subscribe(function (usersnapshot) {
                                _this.storage.set('uid', auth.uid);
                                _this.storage.set('nombre', usersnapshot.nombre);
                                _this.storage.set('correo', auth.email);
                                _this.storage.set('puntos', usersnapshot.puntos);
                                _this.storage.set('foto', usersnapshot.foto);
                                _this.storage.set('notificacion', usersnapshot.notificacion);
                                _this.global.uid = auth.uid;
                                _this.global.nombre = usersnapshot.nombre;
                                _this.global.correo = auth.email;
                                _this.global.puntos = usersnapshot.puntos;
                                _this.global.foto = usersnapshot.foto;
                                _this.global.notificacion = usersnapshot.notificacion;
                                if (usersnapshot.tipo == "cliente") {
                                    _this.navCtrl.setRoot('HomeClientePage', {
                                        uid: auth.uid,
                                        nombre: usersnapshot.nombre,
                                        email: auth.email,
                                        puntos: usersnapshot.puntos
                                    });
                                }
                                if (usersnapshot.tipo == "admin") {
                                    var plataforma = _this.device.platform;
                                    if (plataforma == "Android") {
                                        var alert_2 = _this.alertCtrl.create({
                                            title: 'Error',
                                            subTitle: "El acceso por esta aplicación es sólo para Clientes ",
                                            buttons: [
                                                {
                                                    text: 'Ir al sitio',
                                                    role: 'si',
                                                    handler: function () {
                                                        _this.openLink();
                                                    }
                                                },
                                                {
                                                    text: 'Aceptar',
                                                    role: 'no',
                                                    handler: function () {
                                                    }
                                                }
                                            ]
                                        });
                                        alert_2.present();
                                    }
                                    else {
                                        _this.navCtrl.setRoot('HomeAdminPage', {
                                            nombre: usersnapshot.nombre,
                                            email: auth.email
                                        });
                                    }
                                }
                            });
                            authObserv.unsubscribe();
                        });
                    }).catch(function (err) {
                        var alert = _this.alertCtrl.create({
                            title: 'Autenticación Incorrecta',
                            subTitle: "Verifica tú Email y Contraseña",
                            buttons: ['Aceptar']
                        });
                        alert.present();
                    });
                    //pendiiente limpiar pagina de login al ir atras
                }
                else {
                    alert_1 = this.alertCtrl.create({
                        title: 'Autenticación Incorrecta',
                        subTitle: "Faltan datos",
                        buttons: ['Aceptar']
                    });
                    alert_1.present();
                }
                return [2 /*return*/];
            });
        });
    };
    LoginPage.prototype.openLink = function () {
        this.iap.create("https://megacity.herokuapp.com/");
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"C:\Users\yenifer\Documents\uniquindio\SOFT2\Centro\src\pages\login\login.html"*/'<!--\n\n  Generated template for the LoginPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  \n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n<ion-list>\n\n\n\n    <img class="logo" src="https://firebasestorage.googleapis.com/v0/b/tiendq-3d47a.appspot.com/o/img%2Fadmin%2Flogo.png?alt=media&token=8743287f-762a-42b0-ab73-d659ae302dbf">\n\n    <form class="autenticar">\n\n\n\n      <ion-item>\n\n        <ion-label floating>Correo</ion-label>\n\n        <ion-input \n\n          [(ngModel)]="user.email" \n\n          name="email" \n\n          type="text" \n\n          autocapitalize="off" \n\n          required\n\n\n\n        >\n\n        </ion-input>\n\n      </ion-item>\n\n     \n\n      <ion-item>\n\n        <ion-label floating>Contraseña</ion-label>\n\n        <ion-input \n\n          [(ngModel)]="user.password" \n\n          name="password" \n\n          type="password" \n\n          required\n\n        >\n\n        </ion-input>\n\n      </ion-item>\n\n      <div padding >\n\n        <button class="auth"\n\n\n\n            ion-button \n\n            (click)="login(user)" \n\n            type="submit" \n\n            color="primary"\n\n            block\n\n        >\n\n          Autentícate \n\n        </button> \n\n        <p></p>\n\n        <!-- <button  class="register"\n\n          ion-button \n\n          (click)="signin()" \n\n          type="submit" \n\n         color="primary"\n\n          block\n\n        >\n\n          Registráte\n\n        </button> -->\n\n      </div>\n\n    </form>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\yenifer\Documents\uniquindio\SOFT2\Centro\src\pages\login\login.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__["a" /* AuthProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_5__providers_firebase_service_firebase_service__["a" /* FirebaseServicePrivider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */],
        __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_0__app_app_component__["a" /* MyApp */],
        __WEBPACK_IMPORTED_MODULE_7__ionic_native_device__["a" /* Device */],
        __WEBPACK_IMPORTED_MODULE_8__ionic_native_in_app_browser__["a" /* InAppBrowser */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ })

});
//# sourceMappingURL=3.js.map