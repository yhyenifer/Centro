webpackJsonp([11],{

/***/ 470:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeAdminPageModule", function() { return HomeAdminPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_admin__ = __webpack_require__(494);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HomeAdminPageModule = (function () {
    function HomeAdminPageModule() {
    }
    return HomeAdminPageModule;
}());
HomeAdminPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__home_admin__["a" /* HomeAdminPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home_admin__["a" /* HomeAdminPage */]),
        ],
    })
], HomeAdminPageModule);

//# sourceMappingURL=home-admin.module.js.map

/***/ }),

/***/ 494:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeAdminPage; });
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
 * Generated class for the HomeAdminPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HomeAdminPage = (function () {
    function HomeAdminPage(navCtrl, navParams, menu) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menu = menu;
        this.menu1Active();
    }
    HomeAdminPage.prototype.ionViewDidLoad = function () {
    };
    HomeAdminPage.prototype.menu1Active = function () {
        this.menu.enable(true, 'menu2');
        this.menu.enable(false, 'menu1');
    };
    HomeAdminPage.prototype.openPage = function (page) {
        this.navCtrl.setRoot(page);
    };
    return HomeAdminPage;
}());
HomeAdminPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home-admin',template:/*ion-inline-start:"C:\Users\yenifer\Documents\uniquindio\SOFT2\Centro\src\pages\home-admin\home-admin.html"*/'<!--\n\n  Generated template for the HomeAdminPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>\n\n      Menú\n\n    </ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n <ion-row> \n\n <ion-col >\n\n<img class="admin" src="https://firebasestorage.googleapis.com/v0/b/tiendq-3d47a.appspot.com/o/img%2Fadmin%2Fadministrador.png?alt=media&token=6a9ff6cb-d278-4597-8dce-aea70ca5200d">\n\n </ion-col> \n\n <ion-col class="lista" >\n\n    <ion-row> \n\n        <button class="boton" (click)="openPage(\'FacturasPendientesPage\')"> \n\n                Validar Facturas\n\n        </button> \n\n     </ion-row>    \n\n     <ion-row> \n\n        <button class="boton" (click)="openPage(\'ListaPremiosPage\')"> \n\n                Administrar Premios\n\n        </button > \n\n     </ion-row>\n\n     <ion-row> \n\n        <button class="boton" (click)="openPage(\'ListaEventosPage\')"> \n\n                Administrar Eventos\n\n        </button> \n\n     </ion-row>\n\n     <ion-row> \n\n        <button class="boton" (click)="openPage(\'ListaAlmacenesPage\')"> \n\n                Administrar Almacenes\n\n        </button> \n\n     </ion-row>\n\n     <ion-row> \n\n        <button class="boton" (click)="openPage(\'ListaClientesPage\')"> \n\n                Administrar Clientes\n\n        </button> \n\n     </ion-row>\n\n     <ion-row> \n\n        <button class="boton"> \n\n                Generar Reportes\n\n        </button> \n\n     </ion-row>\n\n</ion-col> \n\n</ion-row>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\yenifer\Documents\uniquindio\SOFT2\Centro\src\pages\home-admin\home-admin.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */]])
], HomeAdminPage);

//# sourceMappingURL=home-admin.js.map

/***/ })

});
//# sourceMappingURL=11.js.map