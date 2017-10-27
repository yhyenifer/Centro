webpackJsonp([11],{

/***/ 461:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetallePremiosPageModule", function() { return DetallePremiosPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__detalle_premios__ = __webpack_require__(476);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DetallePremiosPageModule = (function () {
    function DetallePremiosPageModule() {
    }
    return DetallePremiosPageModule;
}());
DetallePremiosPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__detalle_premios__["a" /* DetallePremiosPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__detalle_premios__["a" /* DetallePremiosPage */]),
        ],
    })
], DetallePremiosPageModule);

//# sourceMappingURL=detalle-premios.module.js.map

/***/ }),

/***/ 476:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetallePremiosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(87);
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
 * Generated class for the DetallePremiosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DetallePremiosPage = (function () {
    function DetallePremiosPage(navCtrl, navParams, alertCtrl, zone, database, storage, menu) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.zone = zone;
        this.database = database;
        this.storage = storage;
        this.menu = menu;
        this.premio = {};
        this.ocultar1 = false;
        this.ocultar2 = false;
        this.infoPremio$ = this.database.list('premio');
        this.menu1Active();
        this.accion = navParams.get("accion");
        if (this.accion == 1) {
            this.premio = navParams.get("premio");
            this.id = navParams.get("id");
            this.descPremio = this.premio.descripcion;
            this.nombrePremio = this.premio.nombre;
            this.cantidad = this.premio.cantidad;
            console.log("premio " + this.premio.cantidad);
            this.valorPuntos = this.premio.valorPuntos;
            this.selectedEstado = this.premio.estado;
            //this.url = this.premio.url;
            this.url = "img/premios/" + this.premio.nombre + "/" + this.premio.url;
            var storageRef = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.storage().ref();
            var imageRef = storageRef.child(this.url);
            imageRef.getDownloadURL().then(function (url) {
                return _this.img = url;
            });
            this.ocultar2 = !this.ocultar2;
        }
        else {
            this.descPremio = "";
            this.ocultar1 = !this.ocultar1;
        }
    }
    DetallePremiosPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.storage.get('nombre').then(function (data) {
            _this.nombre = data;
        });
    };
    DetallePremiosPage.prototype.menu1Active = function () {
        this.menu.enable(true, 'menu2');
        this.menu.enable(false, 'menu1');
    };
    DetallePremiosPage.prototype.seleccionarFoto = function (e) {
        this.file = e.target.files[0];
        console.log(this.file);
        this.readPhoto(this.file);
    };
    DetallePremiosPage.prototype.readPhoto = function (file) {
        var _this = this;
        var reader = new FileReader();
        reader.onload = function (e) {
            _this.zone.run(function () {
                var path = e.target;
                _this.img = path.result;
            });
        };
        reader.readAsDataURL(file);
    };
    DetallePremiosPage.prototype.validarDatos = function () {
        this.campos = null;
        if (this.nombrePremio == null) {
            this.campos = "Nombre, ";
        }
        if (this.cantidad == null) {
            if (this.campos == null) {
                this.campos = "Cantidad Disponible, ";
            }
            else {
                this.campos = this.campos + "Cantidad Disponible, ";
            }
        }
        else {
            if (this.cantidad < 0) {
                var alert = this.alertCtrl.create({
                    title: 'Error',
                    subTitle: "La Cantidad Disponible debe ser mayor a Cero",
                    buttons: ['Aceptar']
                });
                alert.present();
                return false;
            }
        }
        if (this.valorPuntos == null) {
            if (this.campos == null) {
                this.campos = "Valor en Puntos, ";
            }
            else {
                this.campos = this.campos + "Valor en Puntos, ";
            }
        }
        else {
            if (this.valorPuntos < 0) {
                var alert = this.alertCtrl.create({
                    title: 'Error',
                    subTitle: "El Valor en Puntos debe ser mayor a Cero",
                    buttons: ['Aceptar']
                });
                alert.present();
                return false;
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
    DetallePremiosPage.prototype.modificar = function () {
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
                            var name = "";
                            if (_this.file != undefined) {
                                console.log("cleto" + _this.file.name);
                                var storageRef = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.storage().ref();
                                //this.url = this.file.name;
                                var imageRefBorrar = storageRef.child("" + _this.url);
                                name = _this.file.name;
                                imageRefBorrar.delete().then(function (snapshot) {
                                });
                                var imageRef = storageRef.child("img/premios/" + _this.nombrePremio + "/" + _this.file.name);
                                imageRef.put(_this.file).then(function (snapshot) {
                                });
                            }
                            else {
                                name = _this.premio.url;
                            }
                            _this.infoPremio$.update(_this.id, {
                                nombre: _this.nombrePremio,
                                descripcion: _this.descPremio,
                                cantidad: _this.cantidad,
                                valorPuntos: _this.valorPuntos,
                                estado: _this.selectedEstado,
                                url: name
                            });
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
    DetallePremiosPage.prototype.guardar = function () {
        var _this = this;
        if (this.validarDatos() == true) {
            var alert = this.alertCtrl.create({
                title: 'Confirmación',
                subTitle: "¿" + this.nombre + " está seguro de  Agregar éste Premio?",
                buttons: [
                    {
                        text: 'Si',
                        role: 'si',
                        handler: function () {
                            console.log('si');
                            //aqui va el codigo para guardar el premio
                            var storageRef = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.storage().ref();
                            _this.url = _this.file.name;
                            var imageRef = storageRef.child("img/premios/" + _this.nombrePremio + "/" + _this.file.name);
                            imageRef.put(_this.file).then(function (snapshot) {
                            });
                            console.log("nombre" + _this.infoPremio$);
                            _this.infoPremio$.push({
                                nombre: _this.nombrePremio,
                                descripcion: _this.descPremio,
                                cantidad: _this.cantidad,
                                valorPuntos: _this.valorPuntos,
                                estado: _this.selectedEstado,
                                url: _this.url
                            });
                            //notificacion de accion realizada
                            var alert = _this.alertCtrl.create({
                                title: 'Notifiación',
                                subTitle: "Se ha creado exitosamente el Premio",
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
                            console.log('no');
                        }
                    }
                ]
            });
            alert.present();
        }
    };
    DetallePremiosPage.prototype.cancelar = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Confirmación',
            subTitle: "¿" + this.nombre + " está seguro que desea salir sin Guardar?",
            buttons: [
                {
                    text: 'Si',
                    role: 'si',
                    handler: function () {
                        _this.nombrePremio = " ";
                        _this.descPremio = " ";
                        _this.cantidad = null;
                        _this.valorPuntos = null;
                        _this.selectedEstado = "Activo";
                        _this.navCtrl.setRoot("ListaPremiosPage");
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
    return DetallePremiosPage;
}());
DetallePremiosPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-detalle-premios',template:/*ion-inline-start:"C:\Users\MauricioAndres\proyectos\Centro\src\pages\detalle-premios\detalle-premios.html"*/'<!--\n\n  Generated template for the DetallePremiosPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n          </button>\n\n      <ion-title>Premio</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n    <ion-row>\n\n        <ion-col>\n\n            <ion-item>\n\n                <ion-label floating>*Nombre:</ion-label>\n\n                <ion-input \n\n                  [(ngModel)]="nombrePremio" \n\n                  name="nombre" \n\n                  type="text" \n\n                  autocapitalize="off" \n\n                  required>\n\n                </ion-input>\n\n              </ion-item>\n\n        </ion-col> \n\n        <ion-col>\n\n            <ion-item>\n\n                <ion-label floating>*Cantidad Disponible:</ion-label>\n\n                <ion-input \n\n                  [(ngModel)]="cantidad" \n\n                  name="cantidad" \n\n                  type="number" \n\n                  autocapitalize="off" \n\n                  required>\n\n                </ion-input>\n\n              </ion-item>\n\n        </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col>\n\n            <ion-item>\n\n                    <ion-label floating>Descripción:</ion-label>\n\n                    <ion-textarea\n\n                      [(ngModel)]="descPremio" \n\n                      name="descripcion" \n\n                      type="textArea" \n\n                      autocapitalize="off" \n\n                      class="area"\n\n                      >\n\n                    </ion-textarea>\n\n                  </ion-item>\n\n               \n\n                  <br>\n\n                  <div class="divFoto">\n\n                 <ion-label >Foto: </ion-label>\n\n                 <input type="file" (change)="seleccionarFoto($event)" accept=".jpg, .jpeg, .png" >\n\n                 <div class="preview">\n\n                   <img class="imgPremio" [src]="img">\n\n                 </div>\n\n                </div>   \n\n               \n\n    </ion-col> \n\n    <ion-col>\n\n            <ion-item>\n\n                    <ion-label floating>*Valor  en Puntos:</ion-label>\n\n                    <ion-input \n\n                      [(ngModel)]="valorPuntos" \n\n                      name="puntos" \n\n                      type="number" \n\n                      autocapitalize="off" \n\n                      required>\n\n                    </ion-input>\n\n            </ion-item>\n\n                  \n\n                 \n\n                 <ion-item>\n\n                        <ion-label floating>*Estado:</ion-label>\n\n                        <ion-select [(ngModel)]="selectedEstado"\n\n                                    >\n\n                          <!--  se debe crear estados de los almacenes (activo e inactivo) en la base de datos -->\n\n                          <ion-option ><h2>Activo</h2></ion-option>\n\n                          <ion-option ><h2>Inactivo</h2></ion-option>\n\n                        </ion-select>\n\n                </ion-item> \n\n    </ion-col> \n\n    </ion-row>\n\n    <ion-row>\n\n        <ion-col>\n\n          \n\n        </ion-col> \n\n        <ion-col class="text-center">\n\n                <button *ngIf="ocultar1" class="guardar" (click)="guardar()"><ion-icon name="checkmark"></ion-icon> Guardar</button>\n\n                <button *ngIf="ocultar2" class="modificar" (click)="modificar()"><ion-icon name="checkmark"></ion-icon> Modificar</button>\n\n                <button class="cancelar" (click)="cancelar()"><ion-icon name="close"></ion-icon> Cancelar</button>               \n\n                \n\n        </ion-col>\n\n\n\n    </ion-row>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\MauricioAndres\proyectos\Centro\src\pages\detalle-premios\detalle-premios.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* NgZone */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* NgZone */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */]) === "function" && _g || Object])
], DetallePremiosPage);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=detalle-premios.js.map

/***/ })

});
//# sourceMappingURL=11.js.map