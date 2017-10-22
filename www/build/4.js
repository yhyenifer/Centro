webpackJsonp([4],{

/***/ 467:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListaPremiosPageModule", function() { return ListaPremiosPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lista_premios__ = __webpack_require__(481);
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

/***/ 481:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListaPremiosPage; });
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
 * Generated class for the ListaPremiosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ListaPremiosPage = (function () {
    function ListaPremiosPage(navCtrl, navParams, menu) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menu = menu;
        this.menu1Active();
    }
    ListaPremiosPage.prototype.ionViewDidLoad = function () {
    };
    ListaPremiosPage.prototype.menu1Active = function () {
        this.menu.enable(true, 'menu2');
        this.menu.enable(false, 'menu1');
    };
    // este es para el editar, falta enviar parametros
    ListaPremiosPage.prototype.mostrarPremio = function () {
        this.navCtrl.setRoot('DetallePremiosPage');
    };
    ListaPremiosPage.prototype.crearPremio = function () {
        this.navCtrl.setRoot('DetallePremiosPage');
    };
    return ListaPremiosPage;
}());
ListaPremiosPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-lista-premios',template:/*ion-inline-start:"C:\Users\MauricioAndres\proyectos\Centro\src\pages\lista-premios\lista-premios.html"*/'<!--\n\n  Generated template for the ListaAlmacenesPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n          </button>\n\n          <ion-row>\n\n              <ion-col>\n\n                <ion-title>Premios</ion-title>\n\n   \n\n               </ion-col>\n\n              <ion-col>\n\n                <div class="izq" >\n\n                 <button id="new" (click)="crearPremio()" ><b>Crear Nuevo Premio <ion-icon name="add"></ion-icon></b></button>\n\n                </div>\n\n              </ion-col>\n\n          </ion-row>\n\n  </ion-navbar>\n\n  </ion-header>\n\n  \n\n  \n\n  <ion-content padding>\n\n      <ion-row>\n\n          <ion-col>\n\n              <!-- se deben mostrar los almacenes en orden alfabetico-->\n\n              <ion-list>\n\n                <ion-item>\n\n                  <button ion-item *ngFor="let premio of premios$ | async;"  (click)="mostrarPremio()">\n\n                    <ion-avatar item-start> \n\n                    <img src="https://firebasestorage.googleapis.com/v0/b/tiendq-3d47a.appspot.com/o/img%2Fadmin%2FavatarF.png?alt=media&token=fe0bacb2-f133-452b-9b29-7d16403b2af2">\n\n                    </ion-avatar> \n\n                    <h2>nombre premio</h2>\n\n                   </button> \n\n                  </ion-item>     \n\n                  </ion-list>\n\n              </ion-col>\n\n            <ion-col class="imgPremio">\n\n                <img class="adminVal" src="https://firebasestorage.googleapis.com/v0/b/tiendq-3d47a.appspot.com/o/img%2Fadmin%2Fpremio.png?alt=media&token=d9c7997c-3139-4e69-8a19-faac5f5bde53">      \n\n            </ion-col>\n\n      </ion-row>\n\n  \n\n  </ion-content>\n\n  '/*ion-inline-end:"C:\Users\MauricioAndres\proyectos\Centro\src\pages\lista-premios\lista-premios.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */]])
], ListaPremiosPage);

//# sourceMappingURL=lista-premios.js.map

/***/ })

});
//# sourceMappingURL=4.js.map