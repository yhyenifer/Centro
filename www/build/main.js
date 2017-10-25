webpackJsonp([15],{

/***/ 163:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 163;

/***/ }),

/***/ 205:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/detalle-almacen/detalle-almacen.module": [
		458,
		14
	],
	"../pages/detalle-factura-cliente/detalle-factura-cliente.module": [
		460,
		13
	],
	"../pages/detalle-factura/detalle-factura.module": [
		459,
		12
	],
	"../pages/detalle-premios/detalle-premios.module": [
		461,
		11
	],
	"../pages/facturas-aprobadas/facturas-aprobadas.module": [
		462,
		10
	],
	"../pages/facturas-denegadas/facturas-denegadas.module": [
		463,
		9
	],
	"../pages/facturas-pendientes/facturas-pendientes.module": [
		464,
		8
	],
	"../pages/home-admin/home-admin.module": [
		465,
		7
	],
	"../pages/home-cliente/home-cliente.module": [
		466,
		6
	],
	"../pages/lista-almacenes/lista-almacenes.module": [
		467,
		5
	],
	"../pages/lista-premios/lista-premios.module": [
		468,
		4
	],
	"../pages/login/login.module": [
		457,
		3
	],
	"../pages/mis-facturas/mis-facturas.module": [
		469,
		2
	],
	"../pages/subir-factura/subir-factura.module": [
		470,
		1
	],
	"../pages/validar-facturas/validar-facturas.module": [
		471,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 205;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirebaseServicePrivider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(87);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FirebaseServicePrivider = (function () {
    function FirebaseServicePrivider(afd) {
        this.afd = afd;
    }
    FirebaseServicePrivider.prototype.getUserID = function () {
    };
    FirebaseServicePrivider.prototype.getUserTipo = function (userID) {
        this.afd.list('/perfil/', {
            query: {
                orderByChild: 'tipo',
                equalTo: 'usuario'
            }
        });
        return this.afd.object('/perfil/' + userID);
    };
    FirebaseServicePrivider.prototype.getUserName = function (userID) {
        this.afd.list('/perfil/', {
            query: {
                orderByChild: 'nombre',
                equalTo: 'usuario'
            }
        });
        return this.afd.object('/perfil/' + userID);
    };
    FirebaseServicePrivider.prototype.getUserPuntos = function (userID) {
        this.afd.list('/perfil/', {
            query: {
                orderByChild: 'puntos',
                equalTo: 'usuario'
            }
        });
        return this.afd.object('/perfil/' + userID);
    };
    FirebaseServicePrivider.prototype.getUserFoto = function (userID) {
        this.afd.list('/perfil/', {
            query: {
                orderByChild: 'foto',
                equalTo: 'usuario'
            }
        });
        return this.afd.object('/perfil/' + userID);
    };
    FirebaseServicePrivider.prototype.getUserNotificacion = function (userID) {
        this.afd.list('/perfil/', {
            query: {
                orderByChild: 'notificacion',
                equalTo: 'usuario'
            }
        });
        return this.afd.object('/perfil/' + userID);
    };
    return FirebaseServicePrivider;
}());
FirebaseServicePrivider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]])
], FirebaseServicePrivider);

//# sourceMappingURL=firebase-service.js.map

/***/ }),

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_storage__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_database__ = __webpack_require__(87);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var firebaseConfig = {
    apiKey: "AIzaSyDUz7IJOCgsz5Zk9HBoU0cwF9z2Q229LtI",
    authDomain: "tiendq-3d47a.firebaseapp.com",
    databaseURL: "https://tiendq-3d47a.firebaseio.com",
    storageBucket: "tiendq-3d47a.appspot.com",
    messagingSenderId: "12950516640"
};
var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, afAuth, storage, alertCtrl, database) {
        var _this = this;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.afAuth = afAuth;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.database = database;
        this.rootPage = 'LoginPage'; //HomePage; //esto cambia  para poner el login
        this.notificacion = 0;
        this.infoPerfil$ = this.database.list('perfil');
        platform.ready().then(function () {
            _this.pages = [
                { title: 'Subir Facturas', component: 'HomeClientePage', icono: 'document' },
                { title: 'Mis Facturas', component: 'MisFacturasPage', icono: 'basket' },
                { title: 'Mis Premios', component: 'HomeClientePage', icono: 'heart' } // pendiente de cambio el componente
            ];
            _this.pagesCentro = [
                { title: 'Premios', component: 'HomeClientePage', icono: 'heart-outline' },
                { title: 'Almacenes', component: 'HomeClientePage', icono: 'cart' },
                { title: 'Eventos', component: 'HomeClientePage', icono: 'calendar' } // pendiente de cambio  el componente
            ];
            _this.pagesAdmin = [
                { title: 'Validar Facturas', component: 'FacturasPendientesPage', icono: 'checkbox-outline' },
                { title: 'Administrar Premios', component: 'ListaPremiosPage', icono: 'add-circle' },
                { title: 'Administrar Almacenes', component: 'ListaAlmacenesPage', icono: 'cart' },
                { title: 'Administrar Eventos', component: 'HomeAdminPage', icono: 'calendar' },
                { title: 'Generar Reportes', component: 'HomeAdminPage', icono: 'clipboard' } // pendiente de cambio  el componente
            ];
        });
    }
    MyApp.prototype.initializeApp = function () {
        this.platform.ready().then(function () {
            __WEBPACK_IMPORTED_MODULE_5_firebase___default.a.initializeApp(firebaseConfig);
        });
    };
    MyApp.prototype.openPage = function (page) {
        if (page.component == "MisFacturasPage") {
            this.nav.setRoot(page.component, {
                uid: this.uid
            });
        }
        else {
            this.nav.setRoot(page.component);
        }
    };
    MyApp.prototype.verNotificacion = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Información',
            subTitle: this.notificacion + " de tus facturas han sido modificadas por MegaCity",
            buttons: [
                {
                    text: 'Aceptar',
                    role: 'si',
                    handler: function () {
                        if (_this.notificacion == 0) {
                        }
                        else {
                            //cambiar el atributo notificacion a cero
                            _this.infoPerfil$.update(_this.uid, {
                                notificacion: 0
                            });
                            _this.openPage(_this.pages[1]);
                        }
                    }
                }
            ]
        });
        alert.present();
    };
    MyApp.prototype.salir = function () {
        this.afAuth.auth.signOut();
        this.platform.exitApp();
        this.nav.setRoot('LoginPage');
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\yenifer\Documents\uniquindio\SOFT2\Centro\src\app\app.html"*/'\n\n<ion-menu id="menu1" [content]="content" padding> \n\n  <ion-header>\n\n    <ion-toolbar>\n\n      <ion-title></ion-title>\n\n      <img class="avatar cliente" src={{foto}}>\n\n       <p class="text-center"><b>{{nombre}}</b> - Puntos: {{puntos}}<br>{{correo}}\n\n      <br><button class="notifica" (click)="verNotificacion()"> <ion-icon name="mail"  item-start></ion-icon><p id="notifica">{{notificacion}}</p></button></p>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n  <ion-content>\n\n    <ion-list>\n\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n\n        <ion-icon name={{p.icono}}   item-start></ion-icon>{{p.title}}\n\n        <!-- Subir Facturas -->\n\n      </button>\n\n    <div class="separador"></div>\n\n    <button menuClose ion-item *ngFor="let c of pagesCentro" (click)="openPage(c)">\n\n      <ion-icon name={{c.icono}}   item-start></ion-icon>{{c.title}}\n\n      <!-- Subir Facturas -->\n\n    </button>\n\n    <div class="separador"></div>\n\n    <button menuClose ion-item  (click)="salir()">\n\n      <ion-icon name="log-out"></ion-icon> Salir\n\n    </button>\n\n    </ion-list>\n\n  </ion-content>\n\n</ion-menu>\n\n\n\n<ion-menu id="menu2" [content]="content" padding> \n\n  <ion-header>\n\n    <ion-toolbar>\n\n      <ion-title></ion-title>\n\n      <img class="avatar admin" src={{foto}}>\n\n       <p class="text-center"><b>{{nombre}}</b><br>{{correo}}</p>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n  <ion-content>\n\n    <ion-list>\n\n      <button menuClose ion-item *ngFor="let a of pagesAdmin" (click)="openPage(a)">\n\n        <ion-icon name={{a.icono}}   item-start></ion-icon>{{a.title}}\n\n        <!-- Subir Facturas -->\n\n      </button>\n\n   \n\n    <div class="separador"></div>\n\n    <button menuClose ion-item  (click)="salir()">\n\n      <ion-icon name="log-out"></ion-icon> Salir\n\n    </button>\n\n    </ion-list>\n\n  </ion-content>\n\n</ion-menu>\n\n\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="true"></ion-nav>'/*ion-inline-end:"C:\Users\yenifer\Documents\uniquindio\SOFT2\Centro\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
        __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__["a" /* AngularFireAuth */],
        __WEBPACK_IMPORTED_MODULE_0__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_7_angularfire2_database__["a" /* AngularFireDatabase */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 300:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(88);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the AuthProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var AuthProvider = (function () {
    function AuthProvider(afAuth) {
        this.afAuth = afAuth;
        console.log('Hello AuthProvider Provider');
    }
    // Registro de usuario
    AuthProvider.prototype.registerUser = function (email, password) {
        return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
            .then(function (res) {
            // El usuario se ha creado correctamente. 
        })
            .catch(function (err) { return Promise.reject(err); });
    };
    // Login de usuario
    AuthProvider.prototype.loginUser = function (email, password) {
        return this.afAuth.auth.signInWithEmailAndPassword(email, password)
            .then(function (user) { return Promise.resolve(user); })
            .catch(function (err) { return Promise.reject(err); });
    };
    Object.defineProperty(AuthProvider.prototype, "Session", {
        // Devuelve la session
        get: function () {
            return this.afAuth.authState;
        },
        enumerable: true,
        configurable: true
    });
    return AuthProvider;
}());
AuthProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */]])
], AuthProvider);

//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlmacenServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the AlmacenServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var AlmacenServiceProvider = (function () {
    function AlmacenServiceProvider(http) {
        this.http = http;
        this.nodoAlmacen = __WEBPACK_IMPORTED_MODULE_3_firebase__["database"]().ref('Almacen');
        this.refFire = __WEBPACK_IMPORTED_MODULE_3_firebase__["database"]().ref();
    }
    AlmacenServiceProvider.prototype.listarAlmacenes = function () {
        console.log("cosas+ " + this.nodoAlmacen.list('/Almacen'));
        return this.nodoAlmacen.list('/Almacen');
    };
    return AlmacenServiceProvider;
}());
AlmacenServiceProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], AlmacenServiceProvider);

//# sourceMappingURL=almacen-service.js.map

/***/ }),

/***/ 305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(322);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 322:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_device__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angularfire2__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angularfire2_database__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angularfire2_auth__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_auth_auth__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_firebase_service_firebase_service__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_camera__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_almacen_service_almacen_service__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_storage__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_in_app_browser__ = __webpack_require__(302);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var firebaseConfig = {
    apiKey: "AIzaSyDUz7IJOCgsz5Zk9HBoU0cwF9z2Q229LtI",
    authDomain: "tiendq-3d47a.firebaseapp.com",
    databaseURL: "https://tiendq-3d47a.firebaseio.com",
    storageBucket: "tiendq-3d47a.appspot.com",
    messagingSenderId: "12950516640"
};
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/detalle-almacen/detalle-almacen.module#DetalleAlmacenPageModule', name: 'DetalleAlmacenPage', segment: 'detalle-almacen', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/detalle-factura/detalle-factura.module#DetalleFacturaPageModule', name: 'DetalleFacturaPage', segment: 'detalle-factura', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/detalle-factura-cliente/detalle-factura-cliente.module#DetalleFacturaClientePageModule', name: 'DetalleFacturaClientePage', segment: 'detalle-factura-cliente', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/detalle-premios/detalle-premios.module#DetallePremiosPageModule', name: 'DetallePremiosPage', segment: 'detalle-premios', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/facturas-aprobadas/facturas-aprobadas.module#FacturasAprobadasPageModule', name: 'FacturasAprobadasPage', segment: 'facturas-aprobadas', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/facturas-denegadas/facturas-denegadas.module#FacturasDenegadasPageModule', name: 'FacturasDenegadasPage', segment: 'facturas-denegadas', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/facturas-pendientes/facturas-pendientes.module#FacturasPendientesPageModule', name: 'FacturasPendientesPage', segment: 'facturas-pendientes', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/home-admin/home-admin.module#HomeAdminPageModule', name: 'HomeAdminPage', segment: 'home-admin', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/home-cliente/home-cliente.module#HomeClientePageModule', name: 'HomeClientePage', segment: 'home-cliente', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/lista-almacenes/lista-almacenes.module#ListaAlmacenesPageModule', name: 'ListaAlmacenesPage', segment: 'lista-almacenes', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/lista-premios/lista-premios.module#ListaPremiosPageModule', name: 'ListaPremiosPage', segment: 'lista-premios', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/mis-facturas/mis-facturas.module#MisFacturasPageModule', name: 'MisFacturasPage', segment: 'mis-facturas', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/subir-factura/subir-factura.module#SubirFacturaPageModule', name: 'SubirFacturaPage', segment: 'subir-factura', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/validar-facturas/validar-facturas.module#ValidarFacturasPageModule', name: 'ValidarFacturasPage', segment: 'validar-facturas', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_9_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
            __WEBPACK_IMPORTED_MODULE_10_angularfire2_database__["b" /* AngularFireDatabaseModule */],
            __WEBPACK_IMPORTED_MODULE_11_angularfire2_auth__["b" /* AngularFireAuthModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_16__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_7__ionic_native_device__["a" /* Device */],
            __WEBPACK_IMPORTED_MODULE_17__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_3__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["c" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_12__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_13__providers_firebase_service_firebase_service__["a" /* FirebaseServicePrivider */],
            __WEBPACK_IMPORTED_MODULE_14__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_15__providers_almacen_service_almacen_service__["a" /* AlmacenServiceProvider */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ })

},[305]);
//# sourceMappingURL=main.js.map