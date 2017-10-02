webpackJsonp([0],{

/***/ 466:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidarFacturasPageModule", function() { return ValidarFacturasPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__validar_facturas__ = __webpack_require__(476);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ValidarFacturasPageModule = (function () {
    function ValidarFacturasPageModule() {
    }
    return ValidarFacturasPageModule;
}());
ValidarFacturasPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__validar_facturas__["a" /* ValidarFacturasPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__validar_facturas__["a" /* ValidarFacturasPage */]),
        ],
    })
], ValidarFacturasPageModule);

//# sourceMappingURL=validar-facturas.module.js.map

/***/ }),

/***/ 476:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidarFacturasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_firebase_service_firebase_service__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the ValidarFacturasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ValidarFacturasPage = (function () {
    function ValidarFacturasPage(navCtrl, firebaseService, navParams, database, alertCtrl, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.firebaseService = firebaseService;
        this.navParams = navParams;
        this.database = database;
        this.alertCtrl = alertCtrl;
        this.storage = storage;
        var storageRef = __WEBPACK_IMPORTED_MODULE_5_firebase___default.a.storage().ref();
        this.infoFactura$ = this.database.list('factura');
        this.infoPerfil$ = this.database.list('perfil');
        this.factura = navParams.get('factura');
        this.id = navParams.get('id');
        this.usuario = this.firebaseService.getUserName(this.factura.uid);
        this.puntos = this.firebaseService.getUserName(this.factura.uid);
        this.puntos.subscribe(function (nombreCliente) {
            _this.nombreCliente = nombreCliente.nombre + " " + nombreCliente.apellido;
        });
        this.nombreCliente = this.factura.uid;
        this.estado = this.factura.estado;
        this.url = this.factura.url;
        this.almacen = this.factura.almacen;
        var imageRef = storageRef.child(this.url);
        imageRef.getDownloadURL().then(function (url) {
            return _this.base64Image = url;
        });
        this.puntosacum = 0;
    }
    ValidarFacturasPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.storage.get('nombre').then(function (data) {
            _this.nombre = data;
        });
        this.puntos.subscribe(function (usersnapshot) {
            _this.puntosacum = parseInt(usersnapshot.puntos);
            _this.contador = parseInt(usersnapshot.notificacion);
            _this.puntos.subscribe(function (nombreCliente) {
                _this.nombreCliente = nombreCliente.nombre + " " + nombreCliente.apellido;
            });
        });
    };
    ValidarFacturasPage.prototype.aprobar = function () {
        var _this = this;
        if (this.valor > 0) {
            console.log("numero valr: " + this.valor);
            var alert_1 = this.alertCtrl.create({
                title: 'Confirmación',
                subTitle: "¿" + this.nombre + " está seguro de  APROBAR ésta factura?",
                buttons: [
                    {
                        text: 'Si',
                        role: 'si',
                        handler: function () {
                            console.log('si');
                            // va el codigo que debe actualizar el estado de la 
                            //factura  a "aprobada" y sumar los puntos al cliente 
                            //y enviar notificacion
                            // se decide que por cada 1000 pesos de valor de la 
                            //factura se ortoga 1 punto al cliente
                            _this.factura.estado = 'Aprobada';
                            _this.infoFactura$.update(_this.id, {
                                estado: _this.factura.estado,
                                valor: _this.valor
                            });
                            _this.puntosacum = Number(_this.puntosacum) + Number(Math.floor(_this.valor / 1000));
                            _this.contador = Number(_this.contador) + 1;
                            _this.infoPerfil$.update(_this.factura.uid, {
                                puntos: _this.puntosacum,
                                notificacion: _this.contador
                            });
                            _this.navCtrl.setRoot('FacturasAprobadasPage');
                        }
                    },
                    {
                        text: 'No',
                        role: 'no',
                        handler: function () {
                            //la ventana de confirmacion solo se cierra
                            _this.contador = Number(_this.contador) + 1;
                            _this.infoPerfil$.update(_this.factura.uid, {
                                notificacion: _this.contador
                            });
                        }
                    }
                ]
            });
            alert_1.present();
        }
        else {
            var alert_2 = this.alertCtrl.create({
                title: 'Error',
                subTitle: "El valor de la factura debe ser mayor a cero",
                buttons: ['Aceptar']
            });
            alert_2.present();
        }
    };
    ValidarFacturasPage.prototype.denegar = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Confirmación',
            subTitle: "¿" + this.nombre + " está seguro de DENEGAR ésta factura?",
            buttons: [
                {
                    text: 'Si',
                    role: 'si',
                    handler: function () {
                        console.log('si');
                        // va el codigo que debe actualizar el estado de la 
                        //factura  a "denegada"  
                        //y enviar notificacion
                        _this.factura.estado = 'Denegada';
                        _this.infoFactura$.update(_this.id, {
                            estado: _this.factura.estado
                        });
                        _this.navCtrl.setRoot('FacturasDenegadasPage');
                    }
                },
                {
                    text: 'No',
                    role: 'no',
                    handler: function () {
                        //la ventana de confirmacion solo se cierra
                    }
                }
            ]
        });
        alert.present();
    };
    return ValidarFacturasPage;
}());
ValidarFacturasPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
        selector: 'page-validar-facturas',template:/*ion-inline-start:"C:\Users\yenifer\Documents\uniquindio\SOFT2\Centro\src\pages\validar-facturas\validar-facturas.html"*/'<!--\n\n  Generated template for the ValidarFacturasPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>\n\n      Aprobar/Denegar\n\n    </ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n<ion-content padding>\n\n  <ion-row>\n\n    <ion-col>\n\n      <!-- datos de la factura -->\n\n   \n\n      <h4>Cliente:</h4>\n\n      <p>{{nombreCliente}}</p>\n\n      <h4>Estado:</h4>\n\n      <p>{{estado}}</p>\n\n      <h4>Imagen:</h4>\n\n      <!-- aqui va la imagen de la factura -->\n\n      <img [src]=base64Image> \n\n    </ion-col>\n\n    <ion-col>\n\n        <h4>Almacén:</h4>\n\n        <p>{{almacen}}</p>\n\n      <h4 id="valorFactura">Valor de la Factura:</h4>\n\n      <ion-input id="valor" [(ngModel)]="valor" type="number" ></ion-input>\n\n      <p></p>\n\n      <button class="aprobar" (click)="aprobar()"><ion-icon name="checkmark"></ion-icon> Aprobar</button>\n\n      <p></p>\n\n      <button class="denegar" (click)="denegar()"><ion-icon name="close"></ion-icon> Denegar</button>\n\n    </ion-col> \n\n  </ion-row>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\yenifer\Documents\uniquindio\SOFT2\Centro\src\pages\validar-facturas\validar-facturas.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_0__providers_firebase_service_firebase_service__["a" /* FirebaseServicePrivider */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
], ValidarFacturasPage);

//# sourceMappingURL=validar-facturas.js.map

/***/ })

});
//# sourceMappingURL=0.js.map