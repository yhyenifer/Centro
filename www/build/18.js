webpackJsonp([18],{

<<<<<<< HEAD
/***/ 481:
=======
/***/ 465:
>>>>>>> dddb33375dc5525951e357fbb0c5ea00d1380619
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
<<<<<<< HEAD
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListaPremiosPageModule", function() { return ListaPremiosPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lista_premios__ = __webpack_require__(482);
=======
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListaAlmacenesPageModule", function() { return ListaAlmacenesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lista_almacenes__ = __webpack_require__(477);
>>>>>>> dddb33375dc5525951e357fbb0c5ea00d1380619
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



<<<<<<< HEAD
var ListaPremiosPageModule = (function () {
    function ListaPremiosPageModule() {
    }
    return ListaPremiosPageModule;
}());
ListaPremiosPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__lista_premios__["a" /* ListaPremiosPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__lista_premios__["a" /* ListaPremiosPage */]),
        ],
    })
], ListaPremiosPageModule);

//# sourceMappingURL=lista-premios.module.js.map

/***/ }),

/***/ 482:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListaPremiosPage; });
=======
var ListaAlmacenesPageModule = (function () {
    function ListaAlmacenesPageModule() {
    }
    return ListaAlmacenesPageModule;
}());
ListaAlmacenesPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__lista_almacenes__["a" /* ListaAlmacenesPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__lista_almacenes__["a" /* ListaAlmacenesPage */]),
        ],
    })
], ListaAlmacenesPageModule);

//# sourceMappingURL=lista-almacenes.module.js.map

/***/ }),

/***/ 477:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListaAlmacenesPage; });
>>>>>>> dddb33375dc5525951e357fbb0c5ea00d1380619
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
<<<<<<< HEAD
 * Generated class for the ListaPremiosPage page.
=======
 * Generated class for the ListaAlmacenesPage page.
>>>>>>> dddb33375dc5525951e357fbb0c5ea00d1380619
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
<<<<<<< HEAD
var ListaPremiosPage = (function () {
    function ListaPremiosPage(navCtrl, navParams) {
=======
var ListaAlmacenesPage = (function () {
    function ListaAlmacenesPage(navCtrl, navParams, menu) {
>>>>>>> dddb33375dc5525951e357fbb0c5ea00d1380619
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
<<<<<<< HEAD
    ListaPremiosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ListaPremiosPage');
    };
    return ListaPremiosPage;
}());
ListaPremiosPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-lista-premios',template:/*ion-inline-start:"C:\Users\yenifer\Documents\uniquindio\SOFT2\Centro\src\pages\lista-premios\lista-premios.html"*/'<!--\n  Generated template for the ListaPremiosPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>listaPremios</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\yenifer\Documents\uniquindio\SOFT2\Centro\src\pages\lista-premios\lista-premios.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
], ListaPremiosPage);

//# sourceMappingURL=lista-premios.js.map
=======
    ListaAlmacenesPage.prototype.ionViewDidLoad = function () {
    };
    ListaAlmacenesPage.prototype.menu1Active = function () {
        this.menu.enable(true, 'menu2');
        this.menu.enable(false, 'menu1');
    };
    ListaAlmacenesPage.prototype.mostrarAlmacen = function () {
        this.navCtrl.setRoot('DetalleAlmacenPage');
    };
    return ListaAlmacenesPage;
}());
ListaAlmacenesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-lista-almacenes',template:/*ion-inline-start:"C:\Users\MauricioAndres\proyectos\Centro\src\pages\lista-almacenes\lista-almacenes.html"*/'<!--\n\n  Generated template for the ListaAlmacenesPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n      <button ion-button menuToggle>\n\n          <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n    <ion-title>Almacenes</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <ion-row>\n\n        <ion-col>\n\n            <!-- se deben mostrar los almacenes en orden alfabetico -->\n\n              <ion-list>\n\n                <button ion-item   (click)="mostrarAlmacen()">\n\n                  <ion-icon name="house"></ion-icon> nombre almacen\n\n                 </button>      \n\n                </ion-list>\n\n        \n\n          </ion-col>\n\n          <ion-col>\n\n              <img class="adminVal" src="https://firebasestorage.googleapis.com/v0/b/tiendq-3d47a.appspot.com/o/img%2Fadmin%2Falmacenes_mega.png?alt=media&token=0364831f-6e19-4ca1-aa21-b9b8fc2d4107">      \n\n          </ion-col>\n\n    </ion-row>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\MauricioAndres\proyectos\Centro\src\pages\lista-almacenes\lista-almacenes.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */]])
], ListaAlmacenesPage);

//# sourceMappingURL=lista-almacenes.js.map
>>>>>>> dddb33375dc5525951e357fbb0c5ea00d1380619

/***/ })

});
//# sourceMappingURL=18.js.map