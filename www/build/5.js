webpackJsonp([5],{

/***/ 469:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListaEventosPageModule", function() { return ListaEventosPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lista_eventos__ = __webpack_require__(486);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ListaEventosPageModule = (function () {
    function ListaEventosPageModule() {
    }
    return ListaEventosPageModule;
}());
ListaEventosPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__lista_eventos__["a" /* ListaEventosPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__lista_eventos__["a" /* ListaEventosPage */]),
        ],
    })
], ListaEventosPageModule);

//# sourceMappingURL=lista-eventos.module.js.map

/***/ }),

/***/ 486:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListaEventosPage; });
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
 * Generated class for the ListaEventosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ListaEventosPage = (function () {
    function ListaEventosPage(navCtrl, navParams, menu) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menu = menu;
        this.menu1Active();
    }
    ListaEventosPage.prototype.menu1Active = function () {
        this.menu.enable(true, 'menu2');
        this.menu.enable(false, 'menu1');
    };
    ListaEventosPage.prototype.ionViewDidLoad = function () {
    };
    // este es para el editar, falta enviar parametros
    ListaEventosPage.prototype.mostrarEvento = function () {
        this.navCtrl.setRoot('DetalleEventosPage', {
            accion: 1
        });
    };
    ListaEventosPage.prototype.crearEvento = function () {
        this.navCtrl.setRoot('DetalleEventosPage', {
            accion: 2
        });
    };
    return ListaEventosPage;
}());
ListaEventosPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-lista-eventos',template:/*ion-inline-start:"C:\Users\yenifer\Documents\uniquindio\SOFT2\Centro\src\pages\lista-eventos\lista-eventos.html"*/'<!--\n  Generated template for the ListaEventosPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n          </button>\n          <ion-row>\n              <ion-col>\n                <ion-title>Eventos</ion-title>\n   \n               </ion-col>\n              <ion-col>\n                <div class="izq" >\n                 <button id="new" (click)="crearEvento()" ><b>Crear Nuevo Evento <ion-icon name="add"></ion-icon></b></button>\n                </div>\n              </ion-col>\n          </ion-row>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-row>\n        <ion-col>\n            <!-- se deben mostrar los eventos en ordens cronologico, el mas proximo a realizar primero-->\n            <ion-list>\n                <button ion-item  *ngFor="let evento of eventos$ | async; let i = index" (click)="mostrarEvento(evento,evento.$key)">\n                  <ion-icon name="calendar"></ion-icon> {{evento.nombre}} \n                 </button>      \n                </ion-list>\n             \n        \n          </ion-col>\n          <ion-col class="imgEvento">\n              <img class="adminVal" src="https://firebasestorage.googleapis.com/v0/b/tiendq-3d47a.appspot.com/o/img%2Fadmin%2Feventos%20megacity.png?alt=media&token=4e43e539-25a1-4e22-a3c5-247a4268ed35">      \n          </ion-col>\n    </ion-row>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\yenifer\Documents\uniquindio\SOFT2\Centro\src\pages\lista-eventos\lista-eventos.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */]])
], ListaEventosPage);

//# sourceMappingURL=lista-eventos.js.map

/***/ })

});
//# sourceMappingURL=5.js.map