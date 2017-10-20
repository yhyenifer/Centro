webpackJsonp([8],{

/***/ 461:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacturasDenegadasPageModule", function() { return FacturasDenegadasPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__facturas_denegadas__ = __webpack_require__(473);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FacturasDenegadasPageModule = (function () {
    function FacturasDenegadasPageModule() {
    }
    return FacturasDenegadasPageModule;
}());
FacturasDenegadasPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__facturas_denegadas__["a" /* FacturasDenegadasPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__facturas_denegadas__["a" /* FacturasDenegadasPage */]),
        ],
    })
], FacturasDenegadasPageModule);

//# sourceMappingURL=facturas-denegadas.module.js.map

/***/ }),

/***/ 473:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FacturasDenegadasPage; });
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
 * Generated class for the FacturasDenegadasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FacturasDenegadasPage = (function () {
    function FacturasDenegadasPage(navCtrl, navParams, menu, database) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menu = menu;
        this.database = database;
        this.menu1Active();
        this.facturas$ = this.database.list('/factura', {
            query: {
                orderByChild: 'estado',
                equalTo: 'Denegada'
            }
        }).map(function (array) { return array.reverse(); });
    }
    FacturasDenegadasPage.prototype.menu1Active = function () {
        this.menu.enable(true, 'menu2');
        this.menu.enable(false, 'menu1');
    };
    FacturasDenegadasPage.prototype.openPage = function (page) {
        this.navCtrl.setRoot(page);
    };
    FacturasDenegadasPage.prototype.ionViewDidLoad = function () {
    };
    FacturasDenegadasPage.prototype.mostrarFactura = function (factura, facturaId) {
        this.navCtrl.setRoot('DetalleFacturaPage', {
            factura: factura,
            id: facturaId
        });
    };
    return FacturasDenegadasPage;
}());
FacturasDenegadasPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-facturas-denegadas',template:/*ion-inline-start:"C:\Users\yenifer\Documents\uniquindio\SOFT2\Centro\src\pages\facturas-denegadas\facturas-denegadas.html"*/'<!--\n\n  Generated template for the FacturasPendientesPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n    \n\n      <ion-navbar>\n\n        <button ion-button menuToggle>\n\n          <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title>\n\n          Facturas\n\n        </ion-title>\n\n      </ion-navbar>\n\n      <ion-navbar>\n\n        <ion-row>\n\n          <ion-col class="groupTabs">\n\n            <button class="tab tab1" (click)="openPage(\'FacturasPendientesPage\')">Pendientes</button>\n\n          </ion-col>\n\n          <ion-col class="groupTabs">\n\n            <button class="tab tab2" (click)="openPage(\'FacturasAprobadasPage\')"> Aprobadas</button>\n\n          </ion-col>\n\n          <ion-col class="">\n\n            <button class="tab tab3" (click)="openPage(\'FacturasDenegadasPage\')">Denegadas</button>\n\n          </ion-col>\n\n        </ion-row>\n\n       </ion-navbar>\n\n    \n\n    </ion-header>\n\n  \n\n  \n\n  <ion-content padding>\n\n  <ion-row>\n\n    <ion-col>\n\n      <!-- se deben mostrar las 20 facturas en estado denegadas de  la mas reciente  a la mas antigua -->\n\n        <ion-list>\n\n          <button ion-item  *ngFor="let factura of facturas$ | async; let i = index" (click)="mostrarFactura(factura, factura.$key)">\n\n            <ion-icon name="document"></ion-icon> Factura {{i+1}} - {{ factura.estado }} - {{factura.almacen}} \n\n           </button>\n\n        \n\n                    \n\n          </ion-list>\n\n    </ion-col>\n\n    <ion-col>\n\n        <img class="adminVal" src="https://firebasestorage.googleapis.com/v0/b/tiendq-3d47a.appspot.com/o/img%2Fadmin%2Fdenegar.png?alt=media&token=4d297288-d47c-438e-aea5-7d0f1d0ffb7c">      \n\n    </ion-col>\n\n  </ion-row>  \n\n    \n\n  </ion-content>\n\n  '/*ion-inline-end:"C:\Users\yenifer\Documents\uniquindio\SOFT2\Centro\src\pages\facturas-denegadas\facturas-denegadas.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */],
        __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]])
], FacturasDenegadasPage);

//# sourceMappingURL=facturas-denegadas.js.map

/***/ })

});
//# sourceMappingURL=8.js.map