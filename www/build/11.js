webpackJsonp([11],{

/***/ 483:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetallePremiosPageModule", function() { return DetallePremiosPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__detalle_premios__ = __webpack_require__(484);
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

/***/ 484:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetallePremiosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(153);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(155);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
>>>>>>> dddb33375dc5525951e357fbb0c5ea00d1380619
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



<<<<<<< HEAD
=======

>>>>>>> dddb33375dc5525951e357fbb0c5ea00d1380619
/**
 * Generated class for the DetallePremiosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
<<<<<<< HEAD
var DetallePremiosPage = (function () {
    function DetallePremiosPage(navCtrl, navParams, alertCtrl, storage, menu) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.storage = storage;
=======
var DetalleAlmacenPage = (function () {
    function DetalleAlmacenPage(navCtrl, navParams, database, menu) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.database = database;
>>>>>>> dddb33375dc5525951e357fbb0c5ea00d1380619
        this.menu = menu;
        this.almacen = {};
        this.categoria = {};
        this.menu1Active();
        this.file = [];
        this.fileT = [];
        this.infoAlmacen$ = this.database.list('Almacen');
        this.infoCate$ = this.database.list('CategoriaAlmacen');
        this.infourls$ = this.database.list('Almacen/-Kx0AMMmqa5hPIUz2Gfo/url/');
    }
<<<<<<< HEAD
    DetallePremiosPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.storage.get('nombre').then(function (data) {
            _this.nombre = data;
        });
=======
    DetalleAlmacenPage.prototype.ionViewDidLoad = function () {
        this.file = [];
        this.fileT = [];
>>>>>>> dddb33375dc5525951e357fbb0c5ea00d1380619
    };
    DetallePremiosPage.prototype.menu1Active = function () {
        this.menu.enable(true, 'menu2');
        this.menu.enable(false, 'menu1');
    };
    DetallePremiosPage.prototype.validarDatos = function () {
        if (this.nombrePremio == null) {
            this.campos = "Nombre, ";
        }
        if (this.cantidad == null) {
            this.campos = this.campos + "Cantidad Disponible, ";
        }
        else {
            if (this.cantidad < 0) {
                var alert_1 = this.alertCtrl.create({
                    title: 'Error',
                    subTitle: "La Cantidad Disponible debe ser mayor a Cero",
                    buttons: ['Aceptar']
                });
                alert_1.present();
            }
        }
        if (this.valorPuntos == null) {
            this.campos = this.campos + "Valor en Puntos, ";
        }
        else {
            if (this.valorPuntos < 0) {
                var alert_2 = this.alertCtrl.create({
                    title: 'Error',
                    subTitle: "El Valor en Puntos debe ser mayor a Cero",
                    buttons: ['Aceptar']
                });
                alert_2.present();
            }
        }
        if (this.estado == null) {
            this.campos = this.campos + "Estado, ";
        }
        var alert = this.alertCtrl.create({
            title: 'Error',
            subTitle: "Verifica los datos ingresados, los campos " + this.campos + "son requeridos",
            buttons: ['Aceptar']
        });
        alert.present();
    };
    DetallePremiosPage.prototype.modificar = function () {
    };
    DetallePremiosPage.prototype.guardar = function () {
        this.validarDatos();
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
    };
<<<<<<< HEAD
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
=======
    DetalleAlmacenPage.prototype.guardar = function () {
        var storageRef = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.storage().ref();
        var filenames = ["asdfsad", "adfsd", "asdfsdf", "asdadf"];
        var urlfotos;
        console.log(this.file);
        for (var index = 0; index < this.file.length; index++) {
            filenames[index] = "" + this.file[index].name;
            console.log(filenames[index]);
            var imageRef = storageRef.child("img/almacenes/" + this.nombreAlmacen + "/" + filenames[index] + ".jpg");
            imageRef.put(this.file[index]).then(function (snapshot) {
            });
        }
        urlfotos = filenames;
        this.infoAlmacen$.push({
            nombre: this.nombreAlmacen,
            descripcion: this.descAlmacen,
            horario: this.horarioAlmacen,
            categoria: this.selectedCategoria,
            local: this.localAlmacen,
            telefono: this.localAlmacen,
            web: this.webAlmacen,
            estado: this.selectedEstado,
        });
        this.infourls$.push({
            url1: "ads",
            url2: "123432"
        });
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
>>>>>>> dddb33375dc5525951e357fbb0c5ea00d1380619
    };
    return DetallePremiosPage;
}());
DetallePremiosPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
<<<<<<< HEAD
        selector: 'page-detalle-premios',template:/*ion-inline-start:"C:\Users\yenifer\Documents\uniquindio\SOFT2\Centro\src\pages\detalle-premios\detalle-premios.html"*/'<!--\n  Generated template for the DetallePremiosPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n          </button>\n      <ion-title>Premio</ion-title>\n    </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n\n    <ion-row>\n        <ion-col>\n            <ion-item>\n                <ion-label floating>*Nombre:</ion-label>\n                <ion-input \n                  [(ngModel)]="nombrePremio" \n                  name="nombre" \n                  type="text" \n                  autocapitalize="off" \n                  required>\n                </ion-input>\n              </ion-item>\n        </ion-col> \n        <ion-col>\n            <ion-item>\n                <ion-label floating>*Cantidad Disponible:</ion-label>\n                <ion-input \n                  [(ngModel)]="cantidad" \n                  name="cantidad" \n                  type="number" \n                  autocapitalize="off" \n                  required>\n                </ion-input>\n              </ion-item>\n        </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n            <ion-item>\n                    <ion-label floating>Descripción:</ion-label>\n                    <ion-textarea\n                      [(ngModel)]="descPremio" \n                      name="descripcion" \n                      type="textArea" \n                      autocapitalize="off" \n                      class="area"\n                      >\n                    </ion-textarea>\n                  </ion-item>\n               \n                  <br>\n                  <div class="divFoto">\n                 <ion-label >Foto: </ion-label>\n                 <input type="file"  accept=".jpg, .jpeg, .png" >\n                 <div class="preview">\n                   <img class="imgPremio" [src]="premioImagen">\n                 </div>\n                </div>   \n               \n    </ion-col> \n    <ion-col>\n            <ion-item>\n                    <ion-label floating>*Valor  en Puntos:</ion-label>\n                    <ion-input \n                      [(ngModel)]="valorPuntos" \n                      name="puntos" \n                      type="number" \n                      autocapitalize="off" \n                      required>\n                    </ion-input>\n            </ion-item>\n                  \n                 \n                 <ion-item>\n                        <ion-label floating>*Estado:</ion-label>\n                        <ion-select [(ngModel)]="selectedEstado"\n                                    >\n                          <!--  se debe crear estados de los almacenes (activo e inactivo) en la base de datos -->\n                          <ion-option selected><h2>Activo</h2></ion-option>\n                          <ion-option ><h2>Inactivo</h2></ion-option>\n                        </ion-select>\n                </ion-item> \n    </ion-col> \n    </ion-row>\n    <ion-row>\n        <ion-col>\n          \n        </ion-col> \n        <ion-col class="text-center">\n                <button class="guardar" (click)="guardar()"><ion-icon name="checkmark"></ion-icon> Guardar</button>\n                <button class="modificar" (click)="modificar()"><ion-icon name="checkmark"></ion-icon> Modificar</button>\n                <button class="cancelar" (click)="cancelar()"><ion-icon name="close"></ion-icon> Cancelar</button>               \n                \n        </ion-col>\n\n    </ion-row>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\yenifer\Documents\uniquindio\SOFT2\Centro\src\pages\detalle-premios\detalle-premios.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */]) === "function" && _e || Object])
], DetallePremiosPage);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=detalle-premios.js.map
=======
        selector: 'page-detalle-almacen',template:/*ion-inline-start:"C:\Users\MauricioAndres\proyectos\Centro\src\pages\detalle-almacen\detalle-almacen.html"*/'<!--\n\n  Generated template for the DetalleAlmacenPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n          </button>\n\n      <ion-title>Almacén</ion-title>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n    <ion-row>\n\n        <ion-col>\n\n            <ion-item>\n\n                <ion-label floating>*Nombre:</ion-label>\n\n                <ion-input \n\n                  [(ngModel)]="nombreAlmacen" \n\n                  name="nombre" \n\n                  type="text" \n\n                  autocapitalize="off" \n\n                  required>\n\n                </ion-input>\n\n              </ion-item>\n\n        </ion-col> \n\n        <ion-col>\n\n            <ion-item>\n\n                <ion-label floating>*Categoria:</ion-label>\n\n                <ion-select [(ngModel)]="selectedCategoria">\n\n                  <!--  carga las categorias de los almacenes -->\n\n                  <!-- <ion-option ><h2>ropa interior</h2></ion-option> -->\n\n                  <ion-option *ngFor="let categoria of infoCate$ | async"><h2>{{ categoria.nombre }}</h2></ion-option>\n\n                </ion-select>\n\n              </ion-item>\n\n        </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col>\n\n            <ion-item>\n\n                    <ion-label floating>Descripción:</ion-label>\n\n                    <ion-textarea\n\n                      [(ngModel)]="descAlmacen" \n\n                      name="descripcion" \n\n                      type="textArea" \n\n                      autocapitalize="off" \n\n                      class="area"\n\n                      >\n\n                    </ion-textarea>\n\n                  </ion-item>\n\n                  <ion-item>\n\n                        <ion-label floating>*Horario de Atención:</ion-label>\n\n                        <ion-input \n\n                          [(ngModel)]="horarioAlmacen" \n\n                          name="horario" \n\n                          type="text" \n\n                          autocapitalize="off">\n\n                        </ion-input>\n\n                 </ion-item> \n\n                  <br>\n\n                  <div class="divFoto">\n\n                 <ion-label >Foto(s):</ion-label>\n\n                 <button> Seleccionar Foto</button>  \n\n                </div>   \n\n               \n\n    </ion-col> \n\n    <ion-col>\n\n            <ion-item>\n\n                    <ion-label floating>*Local:</ion-label>\n\n                    <ion-input \n\n                      [(ngModel)]="localAlmacen" \n\n                      name="local" \n\n                      type="number" \n\n                      autocapitalize="off" \n\n                      required>\n\n                    </ion-input>\n\n                  </ion-item>\n\n                  <ion-item>\n\n                        <ion-label floating>Teléfono:</ion-label>\n\n                        <ion-input \n\n                          [(ngModel)]="telAlmacen" \n\n                          name="telefono" \n\n                          type="tel" \n\n                          autocapitalize="off" \n\n                        >\n\n                        </ion-input>\n\n                 </ion-item> \n\n                 <ion-item>\n\n                        <ion-label floating>Sitio Web:</ion-label>\n\n                        <ion-input \n\n                          [(ngModel)]="webAlmacen" \n\n                          name="web" \n\n                          type="text" \n\n                          autocapitalize="off">\n\n                        </ion-input>\n\n                 </ion-item>   \n\n                 <ion-item>\n\n                        <ion-label floating>*Estado:</ion-label>\n\n                        <ion-select [(ngModel)]="selectedEstado"\n\n                                    >\n\n                          <!--  se debe crear estados de los almacenes (activo e inactivo) en la base de datos -->\n\n                          <ion-option ><h2>Activo</h2></ion-option>\n\n                          <ion-option ><h2>Inactivo</h2></ion-option>\n\n                        </ion-select>\n\n                      </ion-item> \n\n    </ion-col> \n\n    </ion-row>\n\n    <ion-row>\n\n        <ion-col>\n\n              <input type="file" (change)="seleccionarFoto($event)" accept=".jpg, .jpeg, .png" multiple/>\n\n              <button (click)="agregar()"> Agregar</button>\n\n              <div class="preview">\n\n                <p>Sin fotos para asignar</p>\n\n              </div>\n\n       \n\n        </ion-col> \n\n        <ion-col class="text-center">\n\n                <button class="guardar" (click)="guardar()"><ion-icon name="checkmark"></ion-icon> Guardar</button>\n\n                <button class="modificar" (click)="modificar()"><ion-icon name="checkmark"></ion-icon> Modificar</button>\n\n                <button class="cancelar" (click)="cancelar()"><ion-icon name="close"></ion-icon> Cancelar</button>               \n\n                \n\n        </ion-col>\n\n\n\n    </ion-row>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\MauricioAndres\proyectos\Centro\src\pages\detalle-almacen\detalle-almacen.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */]) === "function" && _d || Object])
], DetalleAlmacenPage);

var _a, _b, _c, _d;
//# sourceMappingURL=detalle-almacen.js.map
>>>>>>> dddb33375dc5525951e357fbb0c5ea00d1380619

/***/ })

});
//# sourceMappingURL=11.js.map