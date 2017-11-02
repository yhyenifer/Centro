webpackJsonp([19],{

/***/ 459:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetalleClientesPageModule", function() { return DetalleClientesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__detalle_clientes__ = __webpack_require__(480);
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

/***/ 480:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetalleClientesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(87);
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
    function DetalleClientesPage(navCtrl, navParams, menu, database, storage, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menu = menu;
        this.database = database;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.cliente = {};
        this.infoCliente$ = this.database.list('perfil');
        this.menu1Active();
        this.cliente = navParams.get('cliente');
        this.id = navParams.get('id');
        this.nombresCliente = this.cliente.nombre;
        this.apellidosCliente = this.cliente.apellido;
        this.direccionCliente = this.cliente.direccion;
        this.selectedEstado = this.cliente.estado;
        this.foto = this.cliente.foto;
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
            var alert_1 = this.alertCtrl.create({
                title: 'Error',
                subTitle: "Verifica los datos ingresados, el campo " + this.campos + "es requerido",
                buttons: ['Aceptar']
            });
            alert_1.present();
            return false;
        }
        else {
            return true;
        }
    };
    DetalleClientesPage.prototype.modificar = function () {
        var _this = this;
        if (this.validarDatos() == true) {
            var alert_2 = this.alertCtrl.create({
                title: 'Confirmación',
                subTitle: "¿" + this.nombre + " está seguro de Modificar éste Premio?",
                buttons: [
                    {
                        text: 'Si',
                        role: 'si',
                        handler: function () {
                            console.log('si');
                            //aqui va el codigo de modificar
                            _this.infoCliente$.update(_this.id, {
                                estado: _this.selectedEstado,
                            });
                            //notificacion de accion realizada
                            var alert = _this.alertCtrl.create({
                                title: 'Notifiación',
                                subTitle: "Se ha modificado exitosamente el Premio",
                                buttons: [{
                                        text: 'Aceptar',
                                        role: 'Aceptar',
                                        handler: function () {
                                            _this.navCtrl.setRoot("ListaClientesPage");
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
            alert_2.present();
        }
    };
    return DetalleClientesPage;
}());
DetalleClientesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-detalle-clientes',template:/*ion-inline-start:"C:\Users\MauricioAndres\proyectos\Centro\src\pages\detalle-clientes\detalle-clientes.html"*/'\n\n<!--\n\n  Generated template for the DetalleClientesPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n      <button ion-button menuToggle>\n\n          <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        \n\n    <ion-title class="titulo">Cliente</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  \n\n      <ion-row>\n\n          <ion-col>\n\n              <ion-item>\n\n                  <ion-label floating>Nombres:</ion-label>\n\n                  <ion-input disabled="true"\n\n                    [(ngModel)]="nombresCliente" \n\n                    name="nombre" \n\n                    type="text" \n\n                    autocapitalize="off" \n\n                    required>\n\n                  </ion-input>\n\n                </ion-item>\n\n          </ion-col> \n\n          <ion-col>\n\n              <ion-item>\n\n                  <ion-label floating>Correo Electrónico:</ion-label>\n\n                  <ion-input disabled="true"\n\n                    [(ngModel)]="correoCliente" \n\n                    name="correo" \n\n                    type="number" \n\n                    autocapitalize="off" \n\n                    required>\n\n                  </ion-input>\n\n                </ion-item>\n\n          </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col>\n\n  \n\n              <ion-item>\n\n                      <ion-label floating>Apellidos:</ion-label>\n\n                      <ion-input disabled="true"\n\n                        [(ngModel)]="apellidosCliente" \n\n                        name="apellidos" \n\n                        type="text"  \n\n                        autocapitalize="off" \n\n                        \n\n                        >\n\n                      </ion-input>\n\n              </ion-item>\n\n              <ion-item>\n\n                <ion-label floating>Dirección:</ion-label>\n\n                <ion-input disabled="true"\n\n                  [(ngModel)]="direccionCliente" \n\n                  name="direccion" \n\n                  type="text"  \n\n                  autocapitalize="off">\n\n                </ion-input>\n\n             </ion-item>\n\n             <ion-item>\n\n              <ion-label floating>Teléfono:</ion-label>\n\n              <ion-input\n\n                [(ngModel)]="telefonoCliente" \n\n                name="telefono" \n\n                type="text"  \n\n                autocapitalize="off">\n\n              </ion-input>\n\n           </ion-item>\n\n                    <br>\n\n                    <div class="divFoto">\n\n                   <ion-label >Foto: </ion-label>\n\n                   <input type="file" disabled="true" (change)="seleccionarFoto($event)" accept=".jpg, .jpeg, .png" >\n\n                   <div class="preview">\n\n                     <img class="imgPremio" [src]="foto">\n\n                   </div>\n\n                  </div>   \n\n                 \n\n      </ion-col> \n\n      <ion-col>\n\n              <ion-item>\n\n                      <ion-label floating>Puntos:</ion-label>\n\n                      <ion-input disabled="true"\n\n                        [(ngModel)]="puntos" \n\n                        name="puntos" \n\n                        type="number" \n\n                        autocapitalize="off" \n\n                        required>\n\n                      </ion-input>\n\n              </ion-item>\n\n                    \n\n                   \n\n                   <ion-item>\n\n                          <ion-label floating>*Estado:</ion-label>\n\n                          <ion-select [(ngModel)]="selectedEstado"\n\n                                      >\n\n                            <!--  se debe crear estados de los almacenes (activo e inactivo) en la base de datos -->\n\n                            <ion-option ><h2>Activo</h2></ion-option>\n\n                            <ion-option ><h2>Inactivo</h2></ion-option>\n\n                          </ion-select>\n\n                  </ion-item> \n\n                  <div class="text-center">\n\n                      <button  class="modificar" (click)="modificar()"><ion-icon name="checkmark"></ion-icon> Modificar</button>\n\n                      <button class="cancelar" (click)="cancelar()"><ion-icon name="close"></ion-icon> Cancelar</button>               \n\n                      \n\n                  </div>\n\n      </ion-col> \n\n      </ion-row>\n\n     \n\n  \n\n  </ion-content>\n\n  \n\n'/*ion-inline-end:"C:\Users\MauricioAndres\proyectos\Centro\src\pages\detalle-clientes\detalle-clientes.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */],
        __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], DetalleClientesPage);

//# sourceMappingURL=detalle-clientes.js.map

/***/ })

});
//# sourceMappingURL=19.js.map