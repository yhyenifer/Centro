webpackJsonp([7],{

/***/ 471:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListaEventosPageModule", function() { return ListaEventosPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lista_eventos__ = __webpack_require__(492);
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

/***/ 492:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListaEventosPage; });
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
 * Generated class for the ListaEventosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ListaEventosPage = (function () {
    function ListaEventosPage(navCtrl, navParams, menu, database) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menu = menu;
        this.database = database;
        this.evento = {};
        this.menu1Active();
        this.eventos$ = this.database.list('eventos');
        this.eventos = [];
    }
    ListaEventosPage.prototype.menu1Active = function () {
        this.menu.enable(true, 'menu2');
        this.menu.enable(false, 'menu1');
    };
    ListaEventosPage.prototype.ionViewDidLoad = function () {
    };
    // este es para el editar, falta enviar parametros
    ListaEventosPage.prototype.mostrarEvento = function (evento, eventoId) {
        this.navCtrl.setRoot('DetalleEventosPage', {
            evento: evento,
            id: eventoId,
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
        selector: 'page-lista-eventos',template:/*ion-inline-start:"C:\Users\yenifer\Documents\uniquindio\SOFT2\Centro\src\pages\lista-eventos\lista-eventos.html"*/'<!--\n\n  Generated template for the ListaEventosPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n          </button>\n\n          <ion-row>\n\n              <ion-col>\n\n                <ion-title  class="titulo">Eventos</ion-title>\n\n   \n\n               </ion-col>\n\n              <ion-col>\n\n                <div class="izq" >\n\n                 <button id="new" (click)="crearEvento()" ><b>Crear Nuevo Evento <ion-icon name="add"></ion-icon></b></button>\n\n                </div>\n\n              </ion-col>\n\n          </ion-row>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <ion-row>\n\n        <ion-col>\n\n            <!-- se deben mostrar los eventos en ordens cronologico, el mas proximo a realizar primero-->\n\n            <ion-list>\n\n                <button ion-item  *ngFor="let evento of eventos$ | async; let i = index" (click)="mostrarEvento(evento,evento.$key)">\n\n                  <ion-icon name="calendar"></ion-icon> {{evento.nombre}} \n\n                 </button>      \n\n                </ion-list>\n\n             \n\n        \n\n          </ion-col>\n\n          <ion-col class="imgEvento">\n\n              <img class="adminVal" src="https://firebasestorage.googleapis.com/v0/b/tiendq-3d47a.appspot.com/o/img%2Fadmin%2Feventos%20megacity.png?alt=media&token=4e43e539-25a1-4e22-a3c5-247a4268ed35">      \n\n          </ion-col>\n\n    </ion-row>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\yenifer\Documents\uniquindio\SOFT2\Centro\src\pages\lista-eventos\lista-eventos.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */],
        __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]])
], ListaEventosPage);

//# sourceMappingURL=lista-eventos.js.map

/***/ })

});
//# sourceMappingURL=7.js.map