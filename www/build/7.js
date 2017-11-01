webpackJsonp([7],{

/***/ 470:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListaClientesPageModule", function() { return ListaClientesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lista_clientes__ = __webpack_require__(490);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ListaClientesPageModule = (function () {
    function ListaClientesPageModule() {
    }
    return ListaClientesPageModule;
}());
ListaClientesPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__lista_clientes__["a" /* ListaClientesPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__lista_clientes__["a" /* ListaClientesPage */]),
        ],
    })
], ListaClientesPageModule);

//# sourceMappingURL=lista-clientes.module.js.map

/***/ }),

/***/ 490:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListaClientesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(87);
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
 * Generated class for the ListaClientesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.k
 *
 *
 */
var ListaClientesPage = (function () {
    function ListaClientesPage(navCtrl, navParams, menu, database) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menu = menu;
        this.database = database;
        this.menu1Active();
    }
    ListaClientesPage.prototype.ionViewDidLoad = function () {
    };
    ListaClientesPage.prototype.mostrar = function () {
        this.navCtrl.setRoot('DetalleClientesPage');
    };
    ListaClientesPage.prototype.menu1Active = function () {
        this.menu.enable(true, 'menu2');
        this.menu.enable(false, 'menu1');
    };
    return ListaClientesPage;
}());
ListaClientesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home-cliente',template:/*ion-inline-start:"C:\Users\MauricioAndres\proyectos\Centro\src\pages\home-cliente\home-cliente.html"*/'<!--\n\n  Generated template for the HomeClientePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n\n\n<ion-header>\n\n  \n\n    <ion-navbar>\n\n      <button ion-button menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n      <ion-title>\n\n        Menú\n\n      </ion-title>\n\n    </ion-navbar>\n\n  </ion-header>\n\n  \n\n  \n\n  <ion-content padding>\n\n     \n\n  <div class="text-center"> \n\n  <h4 class="text-center">Súbe aquí tú factura para que acumules puntos y redimas por grandes premios.</h4>\n\n  <img class="gana" src="https://firebasestorage.googleapis.com/v0/b/tiendq-3d47a.appspot.com/o/img%2Fadmin%2Fgana.png?alt=media&token=c6d87ebf-ca83-40a6-a5e6-a54e0dba188f">\n\n  <p class="mobile">Tómale una foto a tú factura</p>\n\n  <button ion-button icon-only class="camara mobile" (click)="tomarFoto()">\n\n    <ion-icon name="camera"></ion-icon>\n\n  </button>\n\n  <p class="mobile">O súbela desde tus imágenes</p>\n\n  <button ion-button icon-only class="camara mobile" (click)="sacarFoto()" >\n\n      <ion-icon name="image"></ion-icon>\n\n  </button>\n\n  <div class="divFoto">\n\n    <ion-label >Seleccione la foto de tú Factura: </ion-label>\n\n    <input type="file" (change)="seleccionar($event)"  accept=".jpg, .jpeg, .png"  >\n\n   \n\n    \n\n   </div>\n\n\n\n  </div>\n\n  <div class="slide_eventos">\n\n    \n\n      <ion-slides pager  autoplay="2000" loop="true" speed="1000">\n\n          \n\n            <ion-slide >\n\n                <ion-row>\n\n                    <ion-col>\n\n                      <img class="logoEvento" src="https://firebasestorage.googleapis.com/v0/b/tiendq-3d47a.appspot.com/o/img%2Fadmin%2Fevento.png?alt=media&token=46c3512d-f96a-48e3-88c7-72c3bcee1ea7">\n\n                    </ion-col> \n\n                    <ion-col>\n\n                      <p class="letra12">Descripción del evento1</p>\n\n                    </ion-col>   \n\n                    </ion-row>\n\n            </ion-slide>\n\n          \n\n            <ion-slide >\n\n                <ion-row>\n\n                    <ion-col>\n\n                      <img class="logoEvento" src="https://firebasestorage.googleapis.com/v0/b/tiendq-3d47a.appspot.com/o/img%2Fadmin%2Fevento.png?alt=media&token=46c3512d-f96a-48e3-88c7-72c3bcee1ea7">\n\n                    </ion-col> \n\n                    <ion-col>\n\n                      <p class="letra12">Descripción del evento2</p>\n\n                    </ion-col>   \n\n                    </ion-row>\n\n            </ion-slide>\n\n          \n\n            <ion-slide >\n\n                <ion-row>\n\n                  <ion-col>\n\n                    <img class="logoEvento" src="https://firebasestorage.googleapis.com/v0/b/tiendq-3d47a.appspot.com/o/img%2Fadmin%2Fevento.png?alt=media&token=46c3512d-f96a-48e3-88c7-72c3bcee1ea7">\n\n                  </ion-col> \n\n                  <ion-col>\n\n                   <p class="letra12">Descripción del evento3</p>\n\n                  </ion-col>   \n\n                  </ion-row>\n\n            </ion-slide>\n\n          \n\n          </ion-slides>\n\n        \n\n  </div> \n\n\n\n \n\n  \n\n  \n\n  </ion-content>'/*ion-inline-end:"C:\Users\MauricioAndres\proyectos\Centro\src\pages\home-cliente\home-cliente.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _d || Object])
], ListaClientesPage);

var _a, _b, _c, _d;
//# sourceMappingURL=lista-clientes.js.map

/***/ })

});
//# sourceMappingURL=7.js.map