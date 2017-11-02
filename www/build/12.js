webpackJsonp([12],{

/***/ 469:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacturasPendientesPageModule", function() { return FacturasPendientesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__facturas_pendientes__ = __webpack_require__(493);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FacturasPendientesPageModule = (function () {
    function FacturasPendientesPageModule() {
    }
    return FacturasPendientesPageModule;
}());
FacturasPendientesPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__facturas_pendientes__["a" /* FacturasPendientesPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__facturas_pendientes__["a" /* FacturasPendientesPage */]),
        ],
    })
], FacturasPendientesPageModule);

//# sourceMappingURL=facturas-pendientes.module.js.map

/***/ }),

/***/ 493:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FacturasPendientesPage; });
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
 * Generated class for the FacturasPendientesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FacturasPendientesPage = (function () {
    function FacturasPendientesPage(navCtrl, navParams, menu, database) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menu = menu;
        this.database = database;
        this.menu1Active();
        this.facturas$ = this.database.list('/factura', {
            query: {
                orderByChild: 'estado',
                equalTo: 'Pendiente'
            }
        });
    }
    FacturasPendientesPage.prototype.ionViewDidLoad = function () {
    };
    FacturasPendientesPage.prototype.menu1Active = function () {
        this.menu.enable(true, 'menu2');
        this.menu.enable(false, 'menu1');
    };
    FacturasPendientesPage.prototype.openPage = function (page) {
        this.navCtrl.setRoot(page);
    };
    FacturasPendientesPage.prototype.mostrarFactura = function (factura, facturaId) {
        this.navCtrl.setRoot('ValidarFacturasPage', {
            factura: factura,
            id: facturaId
        });
    };
    return FacturasPendientesPage;
}());
FacturasPendientesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-facturas-pendientes',template:/*ion-inline-start:"C:\Users\yenifer\Documents\uniquindio\SOFT2\Centro\src\pages\facturas-pendientes\facturas-pendientes.html"*/'<!--\n\n  Generated template for the FacturasPendientesPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  \n\n    <ion-navbar>\n\n      <button ion-button menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n      <ion-title>\n\n        Facturas\n\n      </ion-title>\n\n    </ion-navbar>\n\n    <ion-navbar>\n\n      <ion-row>\n\n        <ion-col class="groupTabs">\n\n\n\n          <button class="tab tab1" (click)="openPage(\'FacturasPendientesPage\')">Pendientes</button>\n\n        </ion-col>\n\n        <ion-col class="groupTabs">\n\n          <button class="tab tab2" (click)="openPage(\'FacturasAprobadasPage\')"> Aprobadas</button>\n\n        </ion-col>\n\n        <ion-col class="">\n\n          <button class="tab tab3" (click)="openPage(\'FacturasDenegadasPage\')">Denegadas</button>\n\n        </ion-col>\n\n      </ion-row>\n\n     </ion-navbar>\n\n  \n\n  </ion-header>\n\n\n\n\n\n<ion-content padding>\n\n<ion-row>\n\n  <ion-col>\n\n    <!-- se deben mostrar las 20 facturas en estado pendiente de  la mas antigua a la mas reciente -->\n\n      <ion-list>\n\n        <button ion-item  *ngFor="let factura of facturas$ | async; let i = index" (click)="mostrarFactura(factura, factura.$key)">\n\n          <ion-icon name="document"></ion-icon> Factura {{i+1}} - {{ factura.estado }} - {{factura.almacen}} \n\n         </button>      \n\n        </ion-list>\n\n\n\n  </ion-col>\n\n  <ion-col>\n\n      <img class="adminVal" src="https://firebasestorage.googleapis.com/v0/b/tiendq-3d47a.appspot.com/o/img%2Fadmin%2Fvalidar.png?alt=media&token=3a31579e-ac19-42e4-bdd0-f35b1a24e1f5">      \n\n  </ion-col>\n\n</ion-row>  \n\n  \n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\yenifer\Documents\uniquindio\SOFT2\Centro\src\pages\facturas-pendientes\facturas-pendientes.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */],
        __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]])
], FacturasPendientesPage);

//# sourceMappingURL=facturas-pendientes.js.map

/***/ })

});
//# sourceMappingURL=12.js.map