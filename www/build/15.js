webpackJsonp([15],{

/***/ 459:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetalleEventosPageModule", function() { return DetalleEventosPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__detalle_eventos__ = __webpack_require__(476);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DetalleEventosPageModule = (function () {
    function DetalleEventosPageModule() {
    }
    return DetalleEventosPageModule;
}());
DetalleEventosPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__detalle_eventos__["a" /* DetalleEventosPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__detalle_eventos__["a" /* DetalleEventosPage */]),
        ],
    })
], DetalleEventosPageModule);

//# sourceMappingURL=detalle-eventos.module.js.map

/***/ }),

/***/ 476:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetalleEventosPage; });
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
 * Generated class for the DetalleEventosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DetalleEventosPage = (function () {
    function DetalleEventosPage(navCtrl, navParams, menu, alertCtrl, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menu = menu;
        this.alertCtrl = alertCtrl;
        this.storage = storage;
        this.ocultar1 = false;
        this.ocultar2 = false;
        this.eventos = {};
        this.menu1Active();
        this.accion = navParams.get("accion");
        if (this.accion == 1) {
            this.ocultar2 = !this.ocultar2;
        }
        else {
            this.ocultar1 = !this.ocultar1;
        }
    }
    DetalleEventosPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.storage.get('nombre').then(function (data) {
            _this.nombre = data;
        });
    };
    DetalleEventosPage.prototype.menu1Active = function () {
        this.menu.enable(true, 'menu2');
        this.menu.enable(false, 'menu1');
    };
    DetalleEventosPage.prototype.validarDatos = function () {
        this.campos = null;
        if (this.nombreEvento == null) {
            this.campos = "Nombre, ";
        }
        if (this.nombreEvento == "") {
            this.campos = "Nombre, ";
        }
        if (this.fechaEvento == null) {
            if (this.campos == null) {
                this.campos = "Fecha, ";
            }
            else {
                this.campos = this.campos + "Fecha, ";
            }
        }
        if (this.horaEvento == null) {
            if (this.campos == null) {
                this.campos = "Hora, ";
            }
            else {
                this.campos = this.campos + "Hora, ";
            }
        }
        if (this.descEvento == null) {
            if (this.campos == null) {
                this.campos = "Descripción, ";
            }
            else {
                this.campos = this.campos + "Descripción, ";
            }
        }
        if (this.descEvento == "") {
            if (this.campos == null) {
                this.campos = "Descripción, ";
            }
            else {
                this.campos = this.campos + "Descripción, ";
            }
        }
        if (this.selectedEstado == null) {
            if (this.campos == null) {
                this.campos = "Estado, ";
            }
            else {
                this.campos = this.campos + "Estado, ";
            }
        }
        if (this.campos != null) {
            var alert = this.alertCtrl.create({
                title: 'Error',
                subTitle: "Verifica los datos ingresados, los campos " + this.campos + "son requeridos",
                buttons: ['Aceptar']
            });
            alert.present();
            return false;
        }
        else {
            return true;
        }
    };
    DetalleEventosPage.prototype.modificar = function () {
        var _this = this;
        if (this.validarDatos() == true) {
            var alert = this.alertCtrl.create({
                title: 'Confirmación',
                subTitle: "¿" + this.nombre + " está seguro de Modificar éste Evento?",
                buttons: [
                    {
                        text: 'Si',
                        role: 'si',
                        handler: function () {
                            console.log('si');
                            //aqui va el codigo de modificar Evento
                            //notificacion de accion realizada
                            var alert = _this.alertCtrl.create({
                                title: 'Notifiación',
                                subTitle: "Se ha modificado exitosamente el Evento",
                                buttons: [{
                                        text: 'Aceptar',
                                        role: 'Aceptar',
                                        handler: function () {
                                            _this.navCtrl.setRoot("ListaEventosPage");
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
    DetalleEventosPage.prototype.guardar = function () {
        var _this = this;
        if (this.validarDatos() == true) {
            var alert = this.alertCtrl.create({
                title: 'Confirmación',
                subTitle: "¿" + this.nombre + " está seguro de  Agregar éste Evento?",
                buttons: [
                    {
                        text: 'Si',
                        role: 'si',
                        handler: function () {
                            console.log('si');
                            //aqui va el codigo para guardar el evento
                            //notificacion de accion realizada
                            var alert = _this.alertCtrl.create({
                                title: 'Notifiación',
                                subTitle: "Se ha creado exitosamente el Evento",
                                buttons: [{
                                        text: 'Aceptar',
                                        role: 'Aceptar',
                                        handler: function () {
                                            _this.navCtrl.setRoot("ListaEventosPage");
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
                            console.log('no');
                        }
                    }
                ]
            });
            alert.present();
        }
    };
    DetalleEventosPage.prototype.cancelar = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Confirmación',
            subTitle: "¿" + this.nombre + " está seguro que desea salir sin Guardar?",
            buttons: [
                {
                    text: 'Si',
                    role: 'si',
                    handler: function () {
                        _this.nombreEvento = " ";
                        _this.descEvento = " ";
                        _this.fechaEvento = null;
                        _this.horaEvento = null;
                        _this.navCtrl.setRoot("ListaEventosPage");
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
    };
    return DetalleEventosPage;
}());
DetalleEventosPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-detalle-eventos',template:/*ion-inline-start:"C:\Users\yenifer\Documents\uniquindio\SOFT2\Centro\src\pages\detalle-eventos\detalle-eventos.html"*/'<!--\n\n  Generated template for the DetalleEventosPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n          </button>\n\n      <ion-title>Evento</ion-title>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    \n\n        <ion-row>\n\n            <ion-col>\n\n                <ion-item>\n\n                    <ion-label floating>*Nombre:</ion-label>\n\n                    <ion-input \n\n                      [(ngModel)]="nombreEvento" \n\n                      name="nombre" \n\n                      type="text" \n\n                      autocapitalize="off" \n\n                      required>\n\n                    </ion-input>\n\n                  </ion-item>\n\n            </ion-col> \n\n            <ion-col>\n\n                <ion-item>\n\n                    <ion-label>*Fecha:</ion-label>\n\n                    <ion-datetime displayFormat="MMM DD YYYY" [(ngModel)]="fechaEvento"></ion-datetime>                  </ion-item>\n\n            </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n          <ion-col>\n\n                <ion-item>\n\n                        <ion-label floating>*Descripción:</ion-label>\n\n                        <ion-textarea\n\n                          [(ngModel)]="descEvento" \n\n                          name="descripcion" \n\n                          type="textArea" \n\n                          autocapitalize="off" \n\n                          class="area"\n\n                          >\n\n                        </ion-textarea>\n\n                      </ion-item>\n\n                   \n\n                      <br>\n\n                      <div class="divFoto">\n\n                     <ion-label >Foto: </ion-label>\n\n                     <input type="file"  accept=".jpg, .jpeg, .png" >\n\n                     <div class="preview">\n\n                       <img class="imgPremio" [src]="eventoImagen">\n\n                     </div>\n\n                    </div>   \n\n                   \n\n        </ion-col> \n\n        <ion-col>\n\n            <ion-item>\n\n                <ion-label>*Hora:</ion-label>\n\n                <ion-datetime displayFormat="h:mm A" pickerFormat="h mm A" [(ngModel)]="horaEvento"></ion-datetime>\n\n              </ion-item>\n\n                      \n\n                     \n\n                     <ion-item>\n\n                            <ion-label floating>*Estado:</ion-label>\n\n                            <ion-select [(ngModel)]="selectedEstado">\n\n                              <ion-option ><h2>Activo</h2></ion-option>\n\n                              <ion-option ><h2>Inactivo</h2></ion-option>\n\n                            </ion-select>\n\n                    </ion-item> \n\n        </ion-col> \n\n        </ion-row>\n\n        <ion-row>\n\n            <ion-col>\n\n              \n\n            </ion-col> \n\n            <ion-col class="text-center">\n\n                    <button *ngIf="ocultar1" class="guardar" (click)="guardar()"><ion-icon name="checkmark"></ion-icon> Guardar</button>\n\n                    <button *ngIf="ocultar2" class="modificar" (click)="modificar()"><ion-icon name="checkmark"></ion-icon> Modificar</button>\n\n                    <button class="cancelar" (click)="cancelar()"><ion-icon name="close"></ion-icon> Cancelar</button>               \n\n                    \n\n            </ion-col>\n\n    \n\n        </ion-row>\n\n    \n\n    </ion-content>\n\n'/*ion-inline-end:"C:\Users\yenifer\Documents\uniquindio\SOFT2\Centro\src\pages\detalle-eventos\detalle-eventos.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]) === "function" && _e || Object])
], DetalleEventosPage);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=detalle-eventos.js.map

/***/ })

});
//# sourceMappingURL=15.js.map