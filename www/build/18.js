webpackJsonp([18],{

/***/ 459:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetalleClientesPageModule", function() { return DetalleClientesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__detalle_clientes__ = __webpack_require__(479);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DetalleClientesPageModule = (function () {
    function DetalleClientesPageModule() {
    }
    return DetalleClientesPageModule;
}());
DetalleClientesPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__detalle_clientes__["a" /* DetalleClientesPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__detalle_clientes__["a" /* DetalleClientesPage */]),
        ],
    })
], DetalleClientesPageModule);

//# sourceMappingURL=detalle-clientes.module.js.map

/***/ }),

/***/ 479:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetalleClientesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(155);
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
 * Generated class for the DetalleClientesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DetalleClientesPage = (function () {
    function DetalleClientesPage(navCtrl, navParams, menu, storage, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menu = menu;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.menu1Active();
    }
    DetalleClientesPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.storage.get('nombre').then(function (data) {
            _this.nombre = data;
        });
    };
    DetalleClientesPage.prototype.menu1Active = function () {
        this.menu.enable(true, 'menu2');
        this.menu.enable(false, 'menu1');
    };
    DetalleClientesPage.prototype.validarDatos = function () {
        if (this.selectedEstado == null) {
            this.campos = "Estado, ";
        }
        if (this.campos != null) {
            var alert = this.alertCtrl.create({
                title: 'Error',
                subTitle: "Verifica los datos ingresados, el campo " + this.campos + "es requerido",
                buttons: ['Aceptar']
            });
            alert.present();
            return false;
        }
        else {
            return true;
        }
    };
    DetalleClientesPage.prototype.modificar = function () {
        var _this = this;
        if (this.validarDatos() == true) {
            var alert = this.alertCtrl.create({
                title: 'Confirmación',
                subTitle: "¿" + this.nombre + " está seguro de Modificar éste Premio?",
                buttons: [
                    {
                        text: 'Si',
                        role: 'si',
                        handler: function () {
                            console.log('si');
                            //aqui va el codigo de modificar
                            //notificacion de accion realizada
                            var alert = _this.alertCtrl.create({
                                title: 'Notifiación',
                                subTitle: "Se ha modificado exitosamente el Premio",
                                buttons: [{
                                        text: 'Aceptar',
                                        role: 'Aceptar',
                                        handler: function () {
                                            _this.navCtrl.setRoot("ListaPremiosPage");
                                        }
                                    }
                                ]
                            });
                            alert.present();
                        }
                    },
                    {
                        text: 'No',
                        role: 'no',
                        handler: function () {
                        }
                    }
                ]
            });
            alert.present();
        }
    };
    return DetalleClientesPage;
}());
DetalleClientesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-detalle-clientes',template:/*ion-inline-start:"C:\Users\yenifer\Documents\uniquindio\SOFT2\Centro\src\pages\detalle-clientes\detalle-clientes.html"*/'\n<!--\n  Generated template for the DetalleClientesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n      <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n        \n    <ion-title class="titulo">Cliente</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  \n      <ion-row>\n          <ion-col>\n              <ion-item>\n                  <ion-label floating>Nombres:</ion-label>\n                  <ion-input disabled="true"\n                    [(ngModel)]="nombresCliente" \n                    name="nombre" \n                    type="text" \n                    autocapitalize="off" \n                    required>\n                  </ion-input>\n                </ion-item>\n          </ion-col> \n          <ion-col>\n              <ion-item>\n                  <ion-label floating>Correo Electrónico:</ion-label>\n                  <ion-input disabled="true"\n                    [(ngModel)]="correoCliente" \n                    name="correo" \n                    type="number" \n                    autocapitalize="off" \n                    required>\n                  </ion-input>\n                </ion-item>\n          </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n  \n              <ion-item>\n                      <ion-label floating>Apellidos:</ion-label>\n                      <ion-input disabled="true"\n                        [(ngModel)]="apellidosCliente" \n                        name="apellidos" \n                        type="text"  \n                        autocapitalize="off" \n                        \n                        >\n                      </ion-input>\n              </ion-item>\n              <ion-item>\n                <ion-label floating>Dirección:</ion-label>\n                <ion-input disabled="true"\n                  [(ngModel)]="direccionCliente" \n                  name="direccion" \n                  type="text"  \n                  autocapitalize="off">\n                </ion-input>\n             </ion-item>\n             <ion-item>\n              <ion-label floating>Teléfono:</ion-label>\n              <ion-input\n                [(ngModel)]="telefonoCliente" \n                name="telefono" \n                type="text"  \n                autocapitalize="off">\n              </ion-input>\n           </ion-item>\n                    <br>\n                    <div class="divFoto">\n                   <ion-label >Foto: </ion-label>\n                   <input type="file" disabled="true" (change)="seleccionarFoto($event)" accept=".jpg, .jpeg, .png" >\n                   <div class="preview">\n                     <img class="imgPremio" [src]="img">\n                   </div>\n                  </div>   \n                 \n      </ion-col> \n      <ion-col>\n              <ion-item>\n                      <ion-label floating>Puntos:</ion-label>\n                      <ion-input disabled="true"\n                        [(ngModel)]="puntos" \n                        name="puntos" \n                        type="number" \n                        autocapitalize="off" \n                        required>\n                      </ion-input>\n              </ion-item>\n                    \n                   \n                   <ion-item>\n                          <ion-label floating>*Estado:</ion-label>\n                          <ion-select [(ngModel)]="selectedEstado"\n                                      >\n                            <!--  se debe crear estados de los almacenes (activo e inactivo) en la base de datos -->\n                            <ion-option ><h2>Activo</h2></ion-option>\n                            <ion-option ><h2>Inactivo</h2></ion-option>\n                          </ion-select>\n                  </ion-item> \n                  <div class="text-center">\n                      <button  class="modificar" (click)="modificar()"><ion-icon name="checkmark"></ion-icon> Modificar</button>\n                      <button class="cancelar" (click)="cancelar()"><ion-icon name="close"></ion-icon> Cancelar</button>               \n                      \n                  </div>\n      </ion-col> \n      </ion-row>\n     \n  \n  </ion-content>\n  \n'/*ion-inline-end:"C:\Users\yenifer\Documents\uniquindio\SOFT2\Centro\src\pages\detalle-clientes\detalle-clientes.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _e || Object])
], DetalleClientesPage);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=detalle-clientes.js.map

/***/ })

});
//# sourceMappingURL=18.js.map