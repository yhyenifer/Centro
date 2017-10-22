webpackJsonp([13],{

/***/ 458:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetalleAlmacenPageModule", function() { return DetalleAlmacenPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__detalle_almacen__ = __webpack_require__(472);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DetalleAlmacenPageModule = (function () {
    function DetalleAlmacenPageModule() {
    }
    return DetalleAlmacenPageModule;
}());
DetalleAlmacenPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__detalle_almacen__["a" /* DetalleAlmacenPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__detalle_almacen__["a" /* DetalleAlmacenPage */]),
        ],
    })
], DetalleAlmacenPageModule);

//# sourceMappingURL=detalle-almacen.module.js.map

/***/ }),

/***/ 472:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetalleAlmacenPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(155);
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
 * Generated class for the DetalleAlmacenPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DetalleAlmacenPage = (function () {
    function DetalleAlmacenPage(navCtrl, navParams, database, menu, storage, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.database = database;
        this.menu = menu;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.ocultar1 = false;
        this.ocultar2 = false;
        this.almacen = {};
        this.categoria = {};
        this.campos = "";
        this.menu1Active();
        this.file = [];
        this.fileT = [];
        this.infoAlmacen$ = this.database.list('Almacen');
        this.infoCate$ = this.database.list('CategoriaAlmacen');
        this.accion = navParams.get("accion");
        if (this.accion == 1) {
            this.almacen = navParams.get("almacen");
            this.id = navParams.get("id");
            this.descAlmacen = this.almacen.descripcion;
            this.horarioAlmacen = this.almacen.horario;
            this.telAlmacen = this.almacen.telefono;
            this.webAlmacen = this.almacen.web;
            this.nombreAlmacen = this.almacen.nombre;
            this.selectedCategoria = this.almacen.categoria;
            this.selectedEstado = this.almacen.estado;
            this.localAlmacen = this.almacen.local;
            this.ocultar2 = !this.ocultar2;
        }
        else {
            this.descAlmacen = "";
            this.telAlmacen = "";
            this.webAlmacen = "";
            this.ocultar1 = !this.ocultar1;
        }
    }
    DetalleAlmacenPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.file = [];
        this.fileT = [];
        this.selectedCategoria = this.infoCate$[0];
        this.storage.get('nombre').then(function (data) {
            _this.nombre = data;
        });
    };
    DetalleAlmacenPage.prototype.menu1Active = function () {
        this.menu.enable(true, 'menu2');
        this.menu.enable(false, 'menu1');
    };
    DetalleAlmacenPage.prototype.validarDatos = function () {
        this.campos = null;
        if (this.nombreAlmacen == null) {
            this.campos = "Nombre, ";
        }
        if (this.selectedCategoria == null) {
            if (this.campos == null) {
                this.campos = "Categoría, ";
            }
            else {
                this.campos = this.campos + "Categoría, ";
            }
        }
        if (this.localAlmacen == null) {
            if (this.campos == null) {
                this.campos = "Local, ";
            }
            else {
                this.campos = this.campos + "Local, ";
            }
        }
        else {
            if (this.localAlmacen < 0) {
                var alert = this.alertCtrl.create({
                    title: 'Error',
                    subTitle: "El local no es un número correcto",
                    buttons: ['Aceptar']
                });
                alert.present();
            }
        }
        if (this.horarioAlmacen == null) {
            if (this.campos == null) {
                this.campos = "Horario de Atención, ";
            }
            else {
                this.campos = this.campos + "Horario de Atención, ";
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
    DetalleAlmacenPage.prototype.modificar = function () {
        var _this = this;
        if (this.validarDatos() == true) {
            var alert = this.alertCtrl.create({
                title: 'Confirmación',
                subTitle: "¿" + this.nombre + " está seguro de Modificar éste Almacén?",
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
                                subTitle: "Se ha modificado exitosamente el Almacén",
                                buttons: [{
                                        text: 'Aceptar',
                                        role: 'Aceptar',
                                        handler: function () {
                                            _this.navCtrl.setRoot("ListaAlmacenesPage");
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
    DetalleAlmacenPage.prototype.guardar = function () {
        var _this = this;
        if (this.validarDatos() == true) {
            var alert = this.alertCtrl.create({
                title: 'Confirmación',
                subTitle: "¿" + this.nombre + " está seguro de Crear éste Almacén?",
                buttons: [
                    {
                        text: 'Si',
                        role: 'si',
                        handler: function () {
                            console.log('si');
                            //aqui va el codigo de crear
                            var storageRef = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.storage().ref();
                            var filenames = new Array(10);
                            var urlfotos = new Array(10);
                            console.log(_this.file);
                            for (var index = 0; index < _this.file.length; index++) {
                                filenames[index] = "" + _this.file[index].name;
                                urlfotos[index] = "img/almacenes/" + _this.nombreAlmacen + "/" + filenames[index] + ".jpg";
                                console.log(filenames[index]);
                                var imageRef = storageRef.child("img/almacenes/" + _this.nombreAlmacen + "/" + filenames[index] + ".jpg");
                                imageRef.put(_this.file[index]).then(function (snapshot) {
                                });
                            }
                            _this.infoAlmacen$.push({
                                nombre: _this.nombreAlmacen,
                                descripcion: _this.descAlmacen,
                                horario: _this.horarioAlmacen,
                                categoria: _this.selectedCategoria,
                                local: _this.localAlmacen,
                                telefono: _this.localAlmacen,
                                web: _this.webAlmacen,
                                estado: _this.selectedEstado,
                                url: urlfotos
                            });
                            //notificacion de accion realizada
                            var alert = _this.alertCtrl.create({
                                title: 'Notifiación',
                                subTitle: "Se ha creado exitosamente el Almacén",
                                buttons: [{
                                        text: 'Aceptar',
                                        role: 'Aceptar',
                                        handler: function () {
                                            _this.navCtrl.setRoot("ListaAlmacenesPage");
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
    DetalleAlmacenPage.prototype.seleccionarFoto = function (e) {
        this.fileT = e.target.files;
        console.log(this.fileT);
    };
    DetalleAlmacenPage.prototype.agregar = function () {
        //this.file = this.file.concat(this.fileT);
        this.file.push.apply(this.file, this.fileT);
        this.fileT = [];
        console.log(this.file);
    };
    DetalleAlmacenPage.prototype.cancelar = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Confirmación',
            subTitle: "¿" + this.nombre + " está seguro que desea salir sin Guardar?",
            buttons: [
                {
                    text: 'Si',
                    role: 'si',
                    handler: function () {
                        _this.nombreAlmacen = " ";
                        _this.descAlmacen = " ";
                        _this.localAlmacen = null;
                        _this.selectedCategoria = null;
                        _this.selectedEstado = null;
                        _this.navCtrl.setRoot("ListaAlmacenesPage");
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
    return DetalleAlmacenPage;
}());
DetalleAlmacenPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-detalle-almacen',template:/*ion-inline-start:"C:\Users\yenifer\Documents\uniquindio\SOFT2\Centro\src\pages\detalle-almacen\detalle-almacen.html"*/'<!--\n\n  Generated template for the DetalleAlmacenPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n          </button>\n\n      <ion-title>Almacén</ion-title>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n    <ion-row>\n\n        <ion-col>\n\n            <ion-item>\n\n                <ion-label floating>*Nombre:</ion-label>\n\n                <ion-input \n\n                  [(ngModel)]="nombreAlmacen" \n\n                  name="nombre" \n\n                  type="text" \n\n                  autocapitalize="off" \n\n                  required>\n\n                </ion-input>\n\n              </ion-item>\n\n        </ion-col> \n\n        <ion-col>\n\n            <ion-item>\n\n                <ion-label floating>*Categoría:</ion-label>\n\n                <ion-select [(ngModel)]="selectedCategoria" required>\n\n            \n\n                  <ion-option *ngFor="let categoria of infoCate$ | async"><h2>{{ categoria.nombre }}</h2></ion-option>\n\n                </ion-select>\n\n              </ion-item>\n\n        </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col>\n\n            <ion-item>\n\n                    <ion-label floating>Descripción:</ion-label>\n\n                    <ion-textarea\n\n                      [(ngModel)]="descAlmacen" \n\n                      name="descripcion" \n\n                      type="textArea" \n\n                      autocapitalize="off" \n\n                      class="area"\n\n                      >\n\n                    </ion-textarea>\n\n                  </ion-item>\n\n                  <ion-item>\n\n                        <ion-label floating>*Horario de Atención:</ion-label>\n\n                        <ion-input \n\n                          [(ngModel)]="horarioAlmacen" \n\n                          name="horario" \n\n                          type="text" \n\n                          autocapitalize="off"\n\n                          required>\n\n                        </ion-input>\n\n                 </ion-item> \n\n                  <br>\n\n                  <div class="divFoto">\n\n                 <ion-label >Foto(s):</ion-label>\n\n                 <input type="file" (change)="seleccionarFoto($event)" accept=".jpg, .jpeg, .png" multiple/>\n\n                 <button class="agregar" (click)="agregar()"> Agregar</button>\n\n                 <div class="preview">\n\n                   <ion-option *ngFor="let f of file ">\n\n                     <br>\n\n                     <h6> {{f.name}} </h6>\n\n                   </ion-option>\n\n                 </div>\n\n                </div>   \n\n               \n\n    </ion-col> \n\n    <ion-col>\n\n            <ion-item>\n\n                    <ion-label floating>*Local:</ion-label>\n\n                    <ion-input \n\n                      [(ngModel)]="localAlmacen" \n\n                      name="local" \n\n                      type="number" \n\n                      autocapitalize="off" \n\n                      required>\n\n                    </ion-input>\n\n                  </ion-item>\n\n                  <ion-item>\n\n                        <ion-label floating>Teléfono:</ion-label>\n\n                        <ion-input \n\n                          [(ngModel)]="telAlmacen" \n\n                          name="telefono" \n\n                          type="tel" \n\n                          autocapitalize="off" \n\n                        >\n\n                        </ion-input>\n\n                 </ion-item> \n\n                 <ion-item>\n\n                        <ion-label floating>Sitio Web:</ion-label>\n\n                        <ion-input \n\n                          name="web" \n\n                          type="text" \n\n                          autocapitalize="off">\n\n                        </ion-input>\n\n                 </ion-item>   \n\n                 <ion-item>\n\n                        <ion-label floating>*Estado:</ion-label>\n\n                        <ion-select [(ngModel)]="selectedEstado"\n\n                                    >\n\n                          <!--  se debe crear estados de los almacenes (activo e inactivo) en la base de datos -->\n\n                          <ion-option  ><h2>Activo</h2></ion-option>\n\n                          <ion-option ><h2>Inactivo</h2></ion-option>\n\n                        </ion-select>\n\n                      </ion-item> \n\n    </ion-col> \n\n    </ion-row>\n\n    <ion-row>\n\n        <ion-col>\n\n              \n\n       \n\n        </ion-col> \n\n        <ion-col class="text-center">\n\n                <button *ngIf="ocultar1" class="guardar" (click)="guardar()"><ion-icon name="checkmark"></ion-icon> Guardar</button>\n\n                <button *ngIf="ocultar2" class="modificar" (click)="modificar()"><ion-icon name="checkmark"></ion-icon> Modificar</button>\n\n                <button class="cancelar" (click)="cancelar()"><ion-icon name="close"></ion-icon> Cancelar</button>               \n\n                \n\n        </ion-col>\n\n\n\n    </ion-row>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\yenifer\Documents\uniquindio\SOFT2\Centro\src\pages\detalle-almacen\detalle-almacen.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _f || Object])
], DetalleAlmacenPage);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=detalle-almacen.js.map

/***/ })

});
//# sourceMappingURL=13.js.map