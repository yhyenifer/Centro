webpackJsonp([1],{

/***/ 464:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubirFacturaPageModule", function() { return SubirFacturaPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__subir_factura__ = __webpack_require__(474);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SubirFacturaPageModule = (function () {
    function SubirFacturaPageModule() {
    }
    return SubirFacturaPageModule;
}());
SubirFacturaPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__subir_factura__["a" /* SubirFacturaPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__subir_factura__["a" /* SubirFacturaPage */]),
        ],
    })
], SubirFacturaPageModule);

//# sourceMappingURL=subir-factura.module.js.map

/***/ }),

/***/ 474:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubirFacturaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_app_component__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_almacen_service_almacen_service__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase__);
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
 * Generated class for the SubirFacturaPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var SubirFacturaPage = (function () {
    function SubirFacturaPage(navCtrl, navParams, alertCtrl, database, menu, almacenService, global) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.database = database;
        this.menu = menu;
        this.almacenService = almacenService;
        this.global = global;
        this.factura = {};
        this.menu1Active();
        this.base64Image = this.navParams.get("base64Image");
        this.alertCtrl = alertCtrl;
        this.infoFactura$ = this.database.list('factura');
        this.almacenes = this.database.list('/Almacen');
        console.log(this.selectedvalue);
    }
    SubirFacturaPage.prototype.menu1Active = function () {
        this.menu.enable(true, 'menu1');
    };
    SubirFacturaPage.prototype.ionViewDidLoad = function () {
        this.base64Image = this.navParams.get("base64Image");
        this.uid = this.global.uid;
        this.nombre = this.global.nombre;
    };
    SubirFacturaPage.prototype.agregar = function () {
        var _this = this;
        var storageRef = __WEBPACK_IMPORTED_MODULE_5_firebase___default.a.storage().ref();
        var filename = "factura " + Math.floor(Date.now() / 1000);
        var imageRef = storageRef.child("img/facturas/" + filename + ".jpg");
        if (this.selectedvalue == undefined) {
            var alert_1 = this.alertCtrl.create({
                title: 'Error',
                subTitle: 'Debe seleccionar el almacén de la factura.',
                buttons: ['Aceptar']
            });
            alert_1.present();
        }
        else {
            imageRef.putString(this.base64Image, __WEBPACK_IMPORTED_MODULE_5_firebase___default.a.storage.StringFormat.DATA_URL).then(function (snapshot) {
                _this.agregarFoto(filename);
                _this.navCtrl.setRoot('MisFacturasPage', {
                    uid: _this.uid
                });
            });
        }
    };
    SubirFacturaPage.prototype.atras = function () {
        this.navCtrl.setRoot('HomeClientePage');
    };
    SubirFacturaPage.prototype.agregarFoto = function (filename) {
        this.infoFactura$.push({
            uid: this.uid,
            almacen: this.selectedvalue,
            estado: 'Pendiente',
            url: "img/facturas/" + filename + ".jpg"
        });
    };
    return SubirFacturaPage;
}());
SubirFacturaPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
        selector: 'page-subir-factura',template:/*ion-inline-start:"C:\Users\MauricioAndres\proyectos\Centro\src\pages\subir-factura\subir-factura.html"*/'<!--\n\n  Generated template for the SubirFacturaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n    <ion-navbar  >\n\n      <button ion-button menuToggle >\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n      <ion-title>\n\n        Subir Factura\n\n      </ion-title>\n\n    </ion-navbar>\n\n  </ion-header>\n\n\n\n<ion-content padding>\n\n    <div class="text-center"> \n\n    <img class="factura" [src]="base64Image">\n\n    </div>\n\n    <ion-item>\n\n      <ion-label>Almacén:</ion-label>\n\n      <ion-select [(ngModel)]="selectedvalue">\n\n        <!--  carga los alamcenes del centro comercial -->\n\n        <ion-option *ngFor="let almacen of almacenes | async"><h2>{{ almacen.nombre }}</h2></ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n    <p></p>\n\n    <div class="text-center"> \n\n        <h4>¿{{nombre}} estas seguro de subir esta factura?</h4>\n\n    </div>\n\n    <div class="text-center">\n\n        <button ion-button icon-only class="botones si" (click)="agregar()" >\n\n            Si\n\n        </button>\n\n        <button ion-button icon-only class="botones no" (click)="atras()" >\n\n            No\n\n        </button>\n\n    </div>\n\n    <div class="text-center">\n\n    <p>Súbe tú factura para que acumules puntos y redimas por grandes premios.</p>\n\n\n\n  </div>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\MauricioAndres\proyectos\Centro\src\pages\subir-factura\subir-factura.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* MenuController */],
        __WEBPACK_IMPORTED_MODULE_4__providers_almacen_service_almacen_service__["a" /* AlmacenServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_0__app_app_component__["a" /* MyApp */]])
], SubirFacturaPage);

//# sourceMappingURL=subir-factura.js.map

/***/ })

});
//# sourceMappingURL=1.js.map