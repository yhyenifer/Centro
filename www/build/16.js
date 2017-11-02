webpackJsonp([16],{

/***/ 462:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetalleFacturaClientePageModule", function() { return DetalleFacturaClientePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__detalle_factura_cliente__ = __webpack_require__(482);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DetalleFacturaClientePageModule = (function () {
    function DetalleFacturaClientePageModule() {
    }
    return DetalleFacturaClientePageModule;
}());
DetalleFacturaClientePageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__detalle_factura_cliente__["a" /* DetalleFacturaClientePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__detalle_factura_cliente__["a" /* DetalleFacturaClientePage */]),
        ],
    })
], DetalleFacturaClientePageModule);

//# sourceMappingURL=detalle-factura-cliente.module.js.map

/***/ }),

/***/ 482:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetalleFacturaClientePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2_database__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_firebase_service_firebase_service__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
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
 * Generated class for the DetalleFacturaClientePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DetalleFacturaClientePage = (function () {
    function DetalleFacturaClientePage(navCtrl, navParams, database, firebaseService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.database = database;
        this.firebaseService = firebaseService;
        this.valor = 0;
        this.puntos = 0;
        var storageRef = __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.storage().ref();
        this.infoFactura$ = this.database.list('factura');
        this.factura = navParams.get('factura');
        this.id = navParams.get('id');
        this.estado = this.factura.estado;
        this.url = this.factura.url;
        var imageRef = storageRef.child(this.url);
        imageRef.getDownloadURL().then(function (url) {
            return _this.base64Image = url;
        });
        this.database.list('CentroComercial').subscribe(function (_data) {
            _this.politica = _data;
            _this.factor = _this.politica[0].factorpuntos;
        });
        if (this.estado == "Aprobada") {
            this.valor = this.factura.valor;
            this.puntos = Number(Math.floor(this.valor / this.factor));
        }
        else {
            this.valor = 0;
            this.puntos = 0;
        }
    }
    DetalleFacturaClientePage.prototype.ionViewDidLoad = function () {
    };
    return DetalleFacturaClientePage;
}());
DetalleFacturaClientePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
        selector: 'page-detalle-factura-cliente',template:/*ion-inline-start:"C:\Users\MauricioAndres\proyectos\Centro\src\pages\detalle-factura-cliente\detalle-factura-cliente.html"*/'<!--\n\n  Generated template for the DetalleFacturaClientePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>\n\n      Detalle Factura\n\n    </ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n    <ion-card>\n\n        <!-- <img src="https://firebasestorage.googleapis.com/v0/b/tiendq-3d47a.appspot.com/o/img%2Fadmin%2FavatarF.png?alt=media&token=fe0bacb2-f133-452b-9b29-7d16403b2af2"> -->\n\n        <img class="imagenFactura" [src]="base64Image">\n\n        \n\n        <!-- <img [src]="fotoFactura"/> -->\n\n        <ion-card-content>\n\n        <p><b>$ {{valor}}</b></p>\n\n        </ion-card-content>\n\n        <ion-card-content>\n\n            <p><b>Puntos:</b> {{puntos}}</p>\n\n        </ion-card-content>\n\n        <ion-card-content>\n\n            <p><b>Estado:</b> {{estado}}</p>\n\n        </ion-card-content>\n\n      </ion-card>\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\MauricioAndres\proyectos\Centro\src\pages\detalle-factura-cliente\detalle-factura-cliente.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_0_angularfire2_database__["a" /* AngularFireDatabase */],
        __WEBPACK_IMPORTED_MODULE_3__providers_firebase_service_firebase_service__["a" /* FirebaseServicePrivider */]])
], DetalleFacturaClientePage);

//# sourceMappingURL=detalle-factura-cliente.js.map

/***/ })

});
//# sourceMappingURL=16.js.map