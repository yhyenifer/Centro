webpackJsonp([11],{

/***/ 458:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetalleAlmacenPageModule", function() { return DetalleAlmacenPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__detalle_almacen__ = __webpack_require__(470);
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

/***/ 470:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetalleAlmacenPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(153);
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
    function DetalleAlmacenPage(navCtrl, navParams, menu) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menu = menu;
        this.menu1Active();
    }
    DetalleAlmacenPage.prototype.ionViewDidLoad = function () {
    };
    DetalleAlmacenPage.prototype.menu1Active = function () {
        this.menu.enable(true, 'menu2');
        this.menu.enable(false, 'menu1');
    };
    DetalleAlmacenPage.prototype.modificar = function () {
    };
    DetalleAlmacenPage.prototype.guardar = function () {
    };
    return DetalleAlmacenPage;
}());
DetalleAlmacenPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-detalle-almacen',template:/*ion-inline-start:"C:\Users\yenifer\Documents\uniquindio\SOFT2\Centro\src\pages\detalle-almacen\detalle-almacen.html"*/'<!--\n\n  Generated template for the DetalleAlmacenPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n          </button>\n\n      <ion-title>Almacén</ion-title>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n    <ion-row>\n\n        <ion-col>\n\n            <ion-item>\n\n                <ion-label floating>*Nombre:</ion-label>\n\n                <ion-input \n\n                  [(ngModel)]="nombreAlmacen" \n\n                  name="nombre" \n\n                  type="text" \n\n                  autocapitalize="off" \n\n                  required>\n\n                </ion-input>\n\n              </ion-item>\n\n        </ion-col> \n\n        <ion-col>\n\n            <ion-item>\n\n                <ion-label floating>*Categoria:</ion-label>\n\n                <ion-select [(ngModel)]="selectedvalue">\n\n                  <!--  carga las categorias de los almacenes -->\n\n                  <ion-option ><h2>ropa interior</h2></ion-option>\n\n                </ion-select>\n\n              </ion-item>\n\n        </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col>\n\n            <ion-item>\n\n                    <ion-label floating>Descripción:</ion-label>\n\n                    <ion-textarea\n\n                      [(ngModel)]="descAlmacen" \n\n                      name="descripcion" \n\n                      type="textArea" \n\n                      autocapitalize="off" \n\n                      class="area"\n\n                      >\n\n                    </ion-textarea>\n\n                  </ion-item>\n\n                  <ion-item>\n\n                        <ion-label floating>*Horario de Atención:</ion-label>\n\n                        <ion-input \n\n                          [(ngModel)]="horarioAlmacen" \n\n                          name="horario" \n\n                          type="text" \n\n                          autocapitalize="off">\n\n                        </ion-input>\n\n                 </ion-item> \n\n                  <br>\n\n                  <div class="divFoto">\n\n                 <ion-label >Foto(s):</ion-label>\n\n                 <button> Seleccionar Foto</button>  \n\n                </div>   \n\n               \n\n    </ion-col> \n\n    <ion-col>\n\n            <ion-item>\n\n                    <ion-label floating>*Local:</ion-label>\n\n                    <ion-input \n\n                      [(ngModel)]="localAlmacen" \n\n                      name="local" \n\n                      type="number" \n\n                      autocapitalize="off" \n\n                      required>\n\n                    </ion-input>\n\n                  </ion-item>\n\n                  <ion-item>\n\n                        <ion-label floating>Teléfono:</ion-label>\n\n                        <ion-input \n\n                          [(ngModel)]="telAlmacen" \n\n                          name="telefono" \n\n                          type="tel" \n\n                          autocapitalize="off" \n\n                        >\n\n                        </ion-input>\n\n                 </ion-item> \n\n                 <ion-item>\n\n                        <ion-label floating>Sitio Web:</ion-label>\n\n                        <ion-input \n\n                          [(ngModel)]="webAlmacen" \n\n                          name="web" \n\n                          type="text" \n\n                          autocapitalize="off">\n\n                        </ion-input>\n\n                 </ion-item>   \n\n                 <ion-item>\n\n                        <ion-label floating>*Estado:</ion-label>\n\n                        <ion-select [(ngModel)]="selectedvalue"\n\n                                    >\n\n                          <!--  se debe crear estados de los almacenes (activo e inactivo) en la base de datos -->\n\n                          <ion-option ><h2>Activo</h2></ion-option>\n\n                        </ion-select>\n\n                      </ion-item> \n\n    </ion-col> \n\n    </ion-row>\n\n    <ion-row>\n\n        <ion-col>\n\n                        \n\n        </ion-col> \n\n        <ion-col class="text-center">\n\n                <button class="guardar" (click)="Guardar()"><ion-icon name="checkmark"></ion-icon> Guardar</button>\n\n                <button class="modificar" (click)="Modificar()"><ion-icon name="checkmark"></ion-icon> Modificar</button>\n\n                <button class="cancelar" (click)="Cancelar()"><ion-icon name="close"></ion-icon> Cancelar</button>               \n\n                \n\n        </ion-col>\n\n\n\n    </ion-row>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\yenifer\Documents\uniquindio\SOFT2\Centro\src\pages\detalle-almacen\detalle-almacen.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */]])
], DetalleAlmacenPage);

//# sourceMappingURL=detalle-almacen.js.map

/***/ })

});
//# sourceMappingURL=11.js.map