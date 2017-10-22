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
    function DetalleAlmacenPage(navCtrl, navParams, database, menu, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.database = database;
        this.menu = menu;
        this.alertCtrl = alertCtrl;
        this.almacen = {};
        this.categoria = {};
        this.menu1Active();
        this.file = [];
        this.fileT = [];
        this.infoAlmacen$ = this.database.list('Almacen');
        this.infoCate$ = this.database.list('CategoriaAlmacen');
        this.descAlmacen = "";
        this.horarioAlmacen = "";
        this.telAlmacen = "";
        this.webAlmacen = "";
    }
    DetalleAlmacenPage.prototype.ionViewDidLoad = function () {
        this.file = [];
        this.fileT = [];
    };
    DetalleAlmacenPage.prototype.menu1Active = function () {
        this.menu.enable(true, 'menu2');
        this.menu.enable(false, 'menu1');
    };
    DetalleAlmacenPage.prototype.validarDatos = function () {
        if (this.nombreAlmacen == null) {
            this.campos = "Nombre, ";
        }
        if (this.selectedCategoria == null) {
            this.campos = this.campos + "Categoría, ";
        }
        if (this.localAlmacen == null) {
            this.campos = this.campos + "Local, ";
        }
        else {
            if (this.localAlmacen < 0) {
                var alert_1 = this.alertCtrl.create({
                    title: 'Error',
                    subTitle: "El local no es un número correcto",
                    buttons: ['Aceptar']
                });
                alert_1.present();
            }
        }
        if (this.horarioAlmacen == null) {
            this.campos = this.campos + "Horario de Atención, ";
        }
        if (this.selectedEstado == null) {
            this.campos = this.campos + "Estado, ";
        }
        var alert = this.alertCtrl.create({
            title: 'Error',
            subTitle: "Verifica los datos ingresados, los campos " + this.campos + "son requeridos",
            buttons: ['Aceptar']
        });
        alert.present();
    };
    DetalleAlmacenPage.prototype.modificar = function () {
    };
    DetalleAlmacenPage.prototype.guardar = function () {
        var storageRef = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.storage().ref();
        var filenames = new Array(10);
        var urlfotos = new Array(10);
        console.log(this.file);
        for (var index = 0; index < this.file.length; index++) {
            filenames[index] = "" + this.file[index].name;
            urlfotos[index] = "img/almacenes/" + this.nombreAlmacen + "/" + filenames[index] + ".jpg";
            console.log(filenames[index]);
            var imageRef = storageRef.child("img/almacenes/" + this.nombreAlmacen + "/" + filenames[index] + ".jpg");
            imageRef.put(this.file[index]).then(function (snapshot) {
            });
        }
        //urlfotos = filenames;
        this.infoAlmacen$.push({
            nombre: this.nombreAlmacen,
            descripcion: this.descAlmacen,
            horario: this.horarioAlmacen,
            categoria: this.selectedCategoria,
            local: this.localAlmacen,
            telefono: this.localAlmacen,
            web: this.webAlmacen,
            estado: this.selectedEstado,
            url: urlfotos
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
    };
    return DetalleAlmacenPage;
}());
DetalleAlmacenPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-detalle-almacen',template:/*ion-inline-start:"C:\Users\yenifer\Documents\uniquindio\SOFT2\Centro\src\pages\detalle-almacen\detalle-almacen.html"*/'<!--\n\n  Generated template for the DetalleAlmacenPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n          </button>\n\n      <ion-title>Almacén</ion-title>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n    <ion-row>\n\n        <ion-col>\n\n            <ion-item>\n\n                <ion-label floating>*Nombre:</ion-label>\n\n                <ion-input \n\n                  [(ngModel)]="nombreAlmacen" \n\n                  name="nombre" \n\n                  type="text" \n\n                  autocapitalize="off" \n\n                  required>\n\n                </ion-input>\n\n              </ion-item>\n\n        </ion-col> \n\n        <ion-col>\n\n            <ion-item>\n\n                <ion-label floating>*Categoría:</ion-label>\n\n                <ion-select [(ngModel)]="selectedCategoria" required>\n\n                  <!--  carga las categorias de los almacenes -->\n\n                  <!-- <ion-option ><h2>ropa interior</h2></ion-option> -->\n\n                  <ion-option *ngFor="let categoria of infoCate$ | async"><h2>{{ categoria.nombre }}</h2></ion-option>\n\n                </ion-select>\n\n              </ion-item>\n\n        </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col>\n\n            <ion-item>\n\n                    <ion-label floating>Descripción:</ion-label>\n\n                    <ion-textarea\n\n                      [(ngModel)]="descAlmacen" \n\n                      name="descripcion" \n\n                      type="textArea" \n\n                      autocapitalize="off" \n\n                      class="area"\n\n                      >\n\n                    </ion-textarea>\n\n                  </ion-item>\n\n                  <ion-item>\n\n                        <ion-label floating>*Horario de Atención:</ion-label>\n\n                        <ion-input \n\n                          [(ngModel)]="horarioAlmacen" \n\n                          name="horario" \n\n                          type="text" \n\n                          autocapitalize="off"\n\n                          required>\n\n                        </ion-input>\n\n                 </ion-item> \n\n                  <br>\n\n                  <div class="divFoto">\n\n                 <ion-label >Foto(s):</ion-label>\n\n                 <input type="file" (change)="seleccionarFoto($event)" accept=".jpg, .jpeg, .png" multiple/>\n\n                 <button  (click)="agregar()"> Agregar</button>\n\n                 <div class="preview">\n\n                   <ion-option *ngFor="let f of file ">\n\n                     \n\n                     <h2> {{f.name}} </h2>\n\n                   </ion-option>\n\n                 </div>\n\n                </div>   \n\n               \n\n    </ion-col> \n\n    <ion-col>\n\n            <ion-item>\n\n                    <ion-label floating>*Local:</ion-label>\n\n                    <ion-input \n\n                      [(ngModel)]="localAlmacen" \n\n                      name="local" \n\n                      type="number" \n\n                      autocapitalize="off" \n\n                      required>\n\n                    </ion-input>\n\n                  </ion-item>\n\n                  <ion-item>\n\n                        <ion-label floating>Teléfono:</ion-label>\n\n                        <ion-input \n\n                          [(ngModel)]="telAlmacen" \n\n                          name="telefono" \n\n                          type="tel" \n\n                          autocapitalize="off" \n\n                        >\n\n                        </ion-input>\n\n                 </ion-item> \n\n                 <ion-item>\n\n                        <ion-label floating>Sitio Web:</ion-label>\n\n                        <ion-input \n\n                          [(ngModel)]="webAlmacen" \n\n                          name="web" \n\n                          type="text" \n\n                          autocapitalize="off">\n\n                        </ion-input>\n\n                 </ion-item>   \n\n                 <ion-item>\n\n                        <ion-label floating>*Estado:</ion-label>\n\n                        <ion-select [(ngModel)]="selectedEstado"\n\n                                    >\n\n                          <!--  se debe crear estados de los almacenes (activo e inactivo) en la base de datos -->\n\n                          <ion-option ><h2>Activo</h2></ion-option>\n\n                          <ion-option ><h2>Inactivo</h2></ion-option>\n\n                        </ion-select>\n\n                      </ion-item> \n\n    </ion-col> \n\n    </ion-row>\n\n    <ion-row>\n\n        <ion-col>\n\n              \n\n       \n\n        </ion-col> \n\n        <ion-col class="text-center">\n\n                <button class="guardar" (click)="guardar()"><ion-icon name="checkmark"></ion-icon> Guardar</button>\n\n                <button class="modificar" (click)="modificar()"><ion-icon name="checkmark"></ion-icon> Modificar</button>\n\n                <button class="cancelar" (click)="cancelar()"><ion-icon name="close"></ion-icon> Cancelar</button>               \n\n                \n\n        </ion-col>\n\n\n\n    </ion-row>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\yenifer\Documents\uniquindio\SOFT2\Centro\src\pages\detalle-almacen\detalle-almacen.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _e || Object])
], DetalleAlmacenPage);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=detalle-almacen.js.map

/***/ })

});
//# sourceMappingURL=13.js.map