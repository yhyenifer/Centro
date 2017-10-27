webpackJsonp([4],{

/***/ 470:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListaPremiosPageModule", function() { return ListaPremiosPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lista_premios__ = __webpack_require__(487);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



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

/***/ 487:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListaPremiosPage; });
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
 * Generated class for the ListaPremiosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ListaPremiosPage = (function () {
    function ListaPremiosPage(navCtrl, navParams, menu, database) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menu = menu;
        this.database = database;
        this.premio = {};
        this.menu1Active();
        this.premios$ = this.database.list('premio');
    }
    ListaPremiosPage.prototype.ionViewDidLoad = function () {
        this.premios$ = this.database.list('premio');
    };
    ListaPremiosPage.prototype.menu1Active = function () {
        this.menu.enable(true, 'menu2');
        this.menu.enable(false, 'menu1');
    };
    // este es para el editar, falta enviar parametros
    ListaPremiosPage.prototype.mostrarPremio = function (premio, premioId) {
        console.log("antes " + premio.valorpuntos);
        this.navCtrl.setRoot('DetallePremiosPage', {
            premio: premio,
            id: premioId,
            accion: 1
        });
    };
    ListaPremiosPage.prototype.crearPremio = function () {
        this.navCtrl.setRoot('DetallePremiosPage', {
            accion: 2
        });
    };
    return ListaPremiosPage;
}());
ListaPremiosPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
<<<<<<< HEAD
        selector: 'page-lista-premios',template:/*ion-inline-start:"C:\Users\MauricioAndres\proyectos\Centro\src\pages\lista-premios\lista-premios.html"*/'<!--\n\n  Generated template for the ListaAlmacenesPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n          </button>\n\n          <ion-row>\n\n              <ion-col>\n\n                <ion-title>Premios</ion-title>\n\n   \n\n               </ion-col>\n\n              <ion-col>\n\n                <div class="izq" >\n\n                 <button id="new" (click)="crearPremio()" ><b>Crear Nuevo Premio <ion-icon name="add"></ion-icon></b></button>\n\n                </div>\n\n              </ion-col>\n\n          </ion-row>\n\n  </ion-navbar>\n\n  </ion-header>\n\n  \n\n  \n\n  <ion-content padding>\n\n      <ion-row>\n\n          <ion-col>\n\n              <!-- se deben mostrar los almacenes en orden alfabetico-->\n\n              <ion-list>\n\n                <ion-item>\n\n                  <button ion-item *ngFor="let premio of premios$ | async;"  (click)="mostrarPremio(premio,premio.$key)">\n\n                    <ion-avatar item-start> \n\n                    <img src="https://firebasestorage.googleapis.com/v0/b/tiendq-3d47a.appspot.com/o/img%2Fadmin%2FavatarF.png?alt=media&token=fe0bacb2-f133-452b-9b29-7d16403b2af2">\n\n                    </ion-avatar> \n\n                    <h2>{{premio.nombre}} </h2>\n\n                   </button> \n\n                  </ion-item>     \n\n                  </ion-list>\n\n              </ion-col>\n\n            <ion-col class="imgPremio">\n\n                <img class="adminVal" src="https://firebasestorage.googleapis.com/v0/b/tiendq-3d47a.appspot.com/o/img%2Fadmin%2Fpremio.png?alt=media&token=d9c7997c-3139-4e69-8a19-faac5f5bde53">      \n\n            </ion-col>\n\n      </ion-row>\n\n  \n\n  </ion-content>\n\n  '/*ion-inline-end:"C:\Users\MauricioAndres\proyectos\Centro\src\pages\lista-premios\lista-premios.html"*/,
=======
        selector: 'page-lista-premios',template:/*ion-inline-start:"C:\Users\yenifer\Documents\uniquindio\SOFT2\Centro\src\pages\lista-premios\lista-premios.html"*/'<!--\n\n  Generated template for the ListaAlmacenesPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n          </button>\n\n          <ion-row>\n\n              <ion-col>\n\n                <ion-title>Premios</ion-title>\n\n   \n\n               </ion-col>\n\n              <ion-col>\n\n                <div class="izq" >\n\n                 <button id="new" (click)="crearPremio()" ><b>Crear Nuevo Premio <ion-icon name="add"></ion-icon></b></button>\n\n                </div>\n\n              </ion-col>\n\n          </ion-row>\n\n  </ion-navbar>\n\n  </ion-header>\n\n  \n\n  \n\n  <ion-content padding>\n\n      <ion-row>\n\n          <ion-col>\n\n              <!-- se deben mostrar los almacenes en orden alfabetico-->\n\n              <ion-list>\n\n                <ion-item>\n\n                  <button ion-item   (click)="mostrarPremio()">\n\n                    <ion-avatar item-start> \n\n                    <img src="https://firebasestorage.googleapis.com/v0/b/tiendq-3d47a.appspot.com/o/img%2Fadmin%2FavatarF.png?alt=media&token=fe0bacb2-f133-452b-9b29-7d16403b2af2">\n\n                    </ion-avatar> \n\n                    <h2>nombre premio</h2>\n\n                   </button> \n\n                  </ion-item>     \n\n                  </ion-list>\n\n              </ion-col>\n\n            <ion-col class="imgPremio">\n\n                <img class="adminVal" src="https://firebasestorage.googleapis.com/v0/b/tiendq-3d47a.appspot.com/o/img%2Fadmin%2Fpremio.png?alt=media&token=d9c7997c-3139-4e69-8a19-faac5f5bde53">      \n\n            </ion-col>\n\n      </ion-row>\n\n  \n\n  </ion-content>\n\n  '/*ion-inline-end:"C:\Users\yenifer\Documents\uniquindio\SOFT2\Centro\src\pages\lista-premios\lista-premios.html"*/,
>>>>>>> 25e6af09aceb9fda84b53e89739d25389c69239b
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _d || Object])
], ListaPremiosPage);

var _a, _b, _c, _d;
//# sourceMappingURL=lista-premios.js.map

/***/ })

});
//# sourceMappingURL=4.js.map