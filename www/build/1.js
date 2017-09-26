webpackJsonp([1],{

/***/ 452:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MisFacturasPageModule", function() { return MisFacturasPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mis_facturas__ = __webpack_require__(457);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MisFacturasPageModule = (function () {
    function MisFacturasPageModule() {
    }
    return MisFacturasPageModule;
}());
MisFacturasPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__mis_facturas__["a" /* MisFacturasPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__mis_facturas__["a" /* MisFacturasPage */]),
        ],
    })
], MisFacturasPageModule);

//# sourceMappingURL=mis-facturas.module.js.map

/***/ }),

/***/ 457:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MisFacturasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(153);
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
 * Generated class for the MisFacturasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MisFacturasPage = (function () {
    function MisFacturasPage(navCtrl, navParams, database) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.database = database;
        this.uid = navParams.get("uid");
        //this.raizFactura = firebase.database().ref();
        this.facturas$ = this.database.list('/factura', {
            query: {
                orderByChild: 'uid',
                equalTo: this.uid
            }
        });
        //this.raizFactura.child('factura').orderbychild('uid').equalto(this.uid);
    }
    MisFacturasPage.prototype.ionViewDidLoad = function () {
        this.uid = this.navParams.get("uid");
        //this.raizFactura = firebase.database().ref();
        //this.facturas = this.raizFactura.child('factura').orderbychild('uid').equalto(this.uid);
    };
    MisFacturasPage.prototype.mostrarFactura = function (factura) {
        //LO que se desee hacer cuando el usuario clique en una factura,
        //en la cariable factura esta la info de la factura clickada
        //this.navCtrl.setRoot('LoginPage');
    };
    return MisFacturasPage;
}());
MisFacturasPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-mis-facturas',template:/*ion-inline-start:"C:\Users\MauricioAndres\proyectos\Centro\src\pages\mis-facturas\mis-facturas.html"*/'<!--\n\n  Generated template for the MisFacturasPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n \n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>\n\n      Mis Facturas\n\n    </ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <ion-card>\n\n      \n\n        <ion-list>\n\n          <!-- se deben ordenar por fecha de la mas reciente a la mas antigua y deben ser las de cada usuario\n\n          <button ion-item>\n\n            <ion-icon name="document" item-start></ion-icon>\n\n          \n\n            factura 1 - estado\n\n          </button>\n\n          <button ion-item>\n\n              <ion-icon name="document" item-start></ion-icon>\n\n              factura 2 - estado\n\n            </button> -->\n\n\n\n            <button ion-item  *ngFor="let factura of facturas$ | async; let i = index" (click)="mostrarFactura(factura)">\n\n              <h2>Factura {{i+1}}</h2>\n\n              <h2>Estado: {{ factura.estado }}</h2>\n\n              <h3>Almacen: {{ factura.almacen }}</h3>\n\n            \n\n            </button>\n\n            <!-- <ion-item   *ngFor="let factura of facturas$ | async; let i = index">\n\n                <h2>Factura {{i+1}}</h2>\n\n                <h2>Estado: {{ factura.estado }}</h2>\n\n                <h3>Almacen: {{ factura.url }}</h3>\n\n              \n\n            </ion-item> -->\n\n      \n\n        </ion-list>\n\n      </ion-card>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\MauricioAndres\proyectos\Centro\src\pages\mis-facturas\mis-facturas.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]])
], MisFacturasPage);

//# sourceMappingURL=mis-facturas.js.map

/***/ })

});
//# sourceMappingURL=1.js.map