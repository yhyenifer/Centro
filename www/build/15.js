webpackJsonp([15],{

/***/ 461:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetalleFacturaPageModule", function() { return DetalleFacturaPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__detalle_factura__ = __webpack_require__(481);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DetalleFacturaPageModule = (function () {
    function DetalleFacturaPageModule() {
    }
    return DetalleFacturaPageModule;
}());
DetalleFacturaPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__detalle_factura__["a" /* DetalleFacturaPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__detalle_factura__["a" /* DetalleFacturaPage */]),
        ],
    })
], DetalleFacturaPageModule);

//# sourceMappingURL=detalle-factura.module.js.map

/***/ }),

/***/ 481:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetalleFacturaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_firebase_service_firebase_service__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(153);
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
 * Generated class for the DetalleFacturaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DetalleFacturaPage = (function () {
    function DetalleFacturaPage(navCtrl, navParams, database, firebaseService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.database = database;
        this.firebaseService = firebaseService;
        var storageRef = __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.storage().ref();
        this.infoFactura$ = this.database.list('factura');
        this.infoPerfil$ = this.database.list('perfil');
        this.factura = navParams.get('factura');
        this.id = navParams.get('id');
        this.usuario = this.firebaseService.getUserName(this.factura.uid);
        this.usuario.subscribe(function (nombreCliente) {
            _this.nombreCliente = nombreCliente.nombre + " " + nombreCliente.apellido;
        });
        this.estado = this.factura.estado;
        this.almacen = this.factura.almacen;
        this.url = this.factura.url;
        var imageRef = storageRef.child(this.url);
        imageRef.getDownloadURL().then(function (url) {
            return _this.base64Image = url;
        });
    }
    DetalleFacturaPage.prototype.ionViewDidLoad = function () {
    };
    return DetalleFacturaPage;
}());
DetalleFacturaPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
        selector: 'page-detalle-factura',template:/*ion-inline-start:"C:\Users\MauricioAndres\proyectos\Centro\src\pages\detalle-factura\detalle-factura.html"*/'<!--\n\n  Generated template for the ValidarFacturasPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  \n\n    <ion-navbar>\n\n      <button ion-button menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n      <ion-title class="titulo">\n\n        Factura\n\n      </ion-title>\n\n    </ion-navbar>\n\n  \n\n  </ion-header>\n\n  <ion-content padding>\n\n    <ion-row>\n\n      <ion-col>\n\n        <!-- datos de la factura -->\n\n     \n\n        <h4>Cliente:</h4>\n\n        <p>{{nombreCliente}}</p>\n\n        <h4>Estado:</h4>\n\n        <p>{{estado}}</p>\n\n        <h4>Imagen:</h4>\n\n        <!-- aqui va la imagen de la factura -->\n\n        <img [src]=base64Image> \n\n      </ion-col>\n\n      <ion-col>\n\n          <h4>Almacén:</h4>\n\n          <p>{{almacen}}</p>\n\n\n\n   </ion-col> \n\n    </ion-row>\n\n  \n\n  </ion-content>\n\n  '/*ion-inline-end:"C:\Users\MauricioAndres\proyectos\Centro\src\pages\detalle-factura\detalle-factura.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */],
        __WEBPACK_IMPORTED_MODULE_0__providers_firebase_service_firebase_service__["a" /* FirebaseServicePrivider */]])
], DetalleFacturaPage);

//# sourceMappingURL=detalle-factura.js.map

/***/ })

});
//# sourceMappingURL=15.js.map