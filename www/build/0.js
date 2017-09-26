webpackJsonp([0],{

/***/ 463:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidarFacturasPageModule", function() { return ValidarFacturasPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__validar_facturas__ = __webpack_require__(472);
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

/***/ 472:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidarFacturasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(152);
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
    function ValidarFacturasPage(navCtrl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
    }
    ValidarFacturasPage.prototype.ionViewDidLoad = function () {
        this.nombre = "yenifer"; // esto debe cambiar
    };
    ValidarFacturasPage.prototype.aprobar = function () {
        if (this.valor > 0) {
            console.log("numero valr: " + this.valor);
            var alert = this.alertCtrl.create({
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
        }
        else {
            var alert = this.alertCtrl.create({
                title: 'Error',
                subTitle: "El valor de la factura debe ser mayor a cero",
                buttons: ['Aceptar']
            });
            alert.present();
        }
    };
    ValidarFacturasPage.prototype.denegar = function () {
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
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-validar-facturas',template:/*ion-inline-start:"C:\Users\yenifer\Documents\uniquindio\SOFT2\Centro\src\pages\validar-facturas\validar-facturas.html"*/'<!--\n  Generated template for the ValidarFacturasPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Aprobar/Denegar\n    </ion-title>\n  </ion-navbar>\n\n</ion-header>\n<ion-content padding>\n  <ion-row>\n    <ion-col>\n      <!-- datos de la factura -->\n      <h4>Factura:</h4>\n      <p>Factura 1</p>\n      <h4>Cliente:</h4>\n      <p>Nombre y apellido del cliente</p>\n      <h4>Estado:</h4>\n      <p>Pendiente</p>\n      <h4>Imagen:</h4>\n      <!-- aqui va la imagen de la factura -->\n      <img src="https://firebasestorage.googleapis.com/v0/b/tiendq-3d47a.appspot.com/o/img%2Fadmin%2Fadministrador.png?alt=media&token=6a9ff6cb-d278-4597-8dce-aea70ca5200d"> \n    </ion-col>\n    <ion-col>\n        <h4>Almacén:</h4>\n        <p>nombre almacen</p>\n      <h4 id="valorFactura">Valor de la Factura:</h4>\n      <ion-input id="valor" [ngClass]="valor" type="number" ></ion-input>\n      <p></p>\n      <button class="aprobar" (click)="aprobar()"><ion-icon name="checkmark"></ion-icon> Aprobar</button>\n      <p></p>\n      <button class="denegar" (click)="denegar()"><ion-icon name="close"></ion-icon> Denegar</button>\n    </ion-col> \n  </ion-row>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\yenifer\Documents\uniquindio\SOFT2\Centro\src\pages\validar-facturas\validar-facturas.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _c || Object])
], ValidarFacturasPage);

var _a, _b, _c;
//# sourceMappingURL=validar-facturas.js.map

/***/ })

});
//# sourceMappingURL=0.js.map