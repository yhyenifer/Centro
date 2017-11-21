webpackJsonp([10],{

/***/ 472:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListaAlmacenesPageModule", function() { return ListaAlmacenesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lista_almacenes__ = __webpack_require__(497);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



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

/***/ 497:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListaAlmacenesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2_database__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(153);
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
 * Generated class for the ListaAlmacenesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ListaAlmacenesPage = (function () {
    function ListaAlmacenesPage(navCtrl, navParams, database, menu) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.database = database;
        this.menu = menu;
        this.almacen = {};
        this.menu1Active();
        this.almacenes$ = this.database.list('Almacen');
    }
    ListaAlmacenesPage.prototype.ionViewDidLoad = function () {
        this.almacenes$ = this.database.list('Almacen');
    };
    ListaAlmacenesPage.prototype.menu1Active = function () {
        this.menu.enable(true, 'menu2');
        this.menu.enable(false, 'menu1');
    };
    // este es para el editar, falta enviar parametros
    ListaAlmacenesPage.prototype.mostrarAlmacen = function (almacen, almacenId) {
        this.navCtrl.setRoot('DetalleAlmacenPage', {
            almacen: almacen,
            id: almacenId,
            accion: 1
        });
    };
    ListaAlmacenesPage.prototype.crearAlmacen = function () {
        this.navCtrl.setRoot('AlmaenDetallePage', {
            accion: 2
        });
    };
    return ListaAlmacenesPage;
}());
ListaAlmacenesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
        selector: 'page-lista-almacenes',template:/*ion-inline-start:"C:\Users\yenifer\Documents\uniquindio\SOFT2\Centro\src\pages\lista-almacenes\lista-almacenes.html"*/'<!--\n\n  Generated template for the ListaAlmacenesPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n      <button ion-button menuToggle>\n\n          <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-row>\n\n            <ion-col>\n\n              <ion-title class="titulo">Almacenes</ion-title>\n\n \n\n             </ion-col>\n\n            <ion-col>\n\n              <div class="izq" >\n\n               <button id="new" (click)="crearAlmacen()" ><b>Crear Nuevo Almacén <ion-icon name="add"></ion-icon></b></button>\n\n              </div>\n\n            </ion-col>\n\n        </ion-row>\n\n</ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    \n\n    <ion-row>\n\n        <ion-col>\n\n            <!-- se deben mostrar los almacenes en orden alfabetico-->\n\n            <ion-list>\n\n                <button ion-item  *ngFor="let almacen of almacenes$ | async; let i = index" (click)="mostrarAlmacen(almacen,almacen.$key)">\n\n                  <ion-icon name="home"></ion-icon> {{almacen.nombre}} \n\n                 </button>      \n\n                </ion-list>\n\n             \n\n        \n\n          </ion-col>\n\n          <ion-col>\n\n              <img class="adminVal" src="https://firebasestorage.googleapis.com/v0/b/tiendq-3d47a.appspot.com/o/img%2Fadmin%2Falmacenes_mega.png?alt=media&token=0364831f-6e19-4ca1-aa21-b9b8fc2d4107">      \n\n          </ion-col>\n\n    </ion-row>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\yenifer\Documents\uniquindio\SOFT2\Centro\src\pages\lista-almacenes\lista-almacenes.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_0_angularfire2_database__["a" /* AngularFireDatabase */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* MenuController */]])
], ListaAlmacenesPage);

//# sourceMappingURL=lista-almacenes.js.map

/***/ })

});
//# sourceMappingURL=10.js.map