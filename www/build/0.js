webpackJsonp([0],{

/***/ 456:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubirFacturaPageModule", function() { return SubirFacturaPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__subir_factura__ = __webpack_require__(461);
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

/***/ 461:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubirFacturaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_almacen_service_almacen_service__ = __webpack_require__(301);
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
 * Generated class for the SubirFacturaPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var SubirFacturaPage = (function () {
    function SubirFacturaPage(navCtrl, navParams, alertCtrl, database, menu, almacenService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.database = database;
        this.menu = menu;
        this.almacenService = almacenService;
        this.factura = {};
        this.menu1Active();
        this.base64Image = this.navParams.get("base64Image");
        this.uid = this.navParams.get("uid");
        this.alertCtrl = alertCtrl;
        this.infoFactura$ = this.database.list('factura');
        this.almacenes = this.database.list('/Almacen');
        ;
        console.log(this.selectedvalue);
    }
    SubirFacturaPage.prototype.menu1Active = function () {
        this.menu.enable(true, 'menu1');
    };
    SubirFacturaPage.prototype.ListarAlmacen = function () {
    };
    SubirFacturaPage.prototype.ionViewDidLoad = function () {
        this.base64Image = this.navParams.get("base64Image");
        this.uid = this.navParams.get("uid");
        this.nombre = this.navParams.get("nombre");
        //this.almacenes=this.ListarAlmacen();
    };
    SubirFacturaPage.prototype.agregar = function () {
        var _this = this;
        //console.log(this.selectedvalue);
        var storageRef = __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.storage().ref();
        // Create a timestamp as filename
        var filename = "factura " + Math.floor(Date.now() / 1000);
        // Create a reference to 'images/todays-date.jpg'
        var imageRef = storageRef.child("img/facturas/" + filename + ".jpg");
        imageRef.putString(this.base64Image, __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.storage.StringFormat.DATA_URL).then(function (snapshot) {
            // Do something here when the data is succesfully uploaded!
            _this.showSuccesfulUploadAlert();
            _this.agregarFoto(filename);
        });
    };
    SubirFacturaPage.prototype.atras = function () {
        this.navCtrl.setRoot('HomeClientePage');
    };
    SubirFacturaPage.prototype.showSuccesfulUploadAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Uploaded!',
            subTitle: 'Picture is uploaded to Firebase',
            buttons: ['OK']
        });
        alert.present();
        // clear the previous photo data in the variable
        this.base64Image = "";
    };
    SubirFacturaPage.prototype.agregarFoto = function (filename) {
        //this.uid = 'asfdfhsfhgjsfhj';
        console.log(this.selectedvalue);
        this.infoFactura$.push({
            uid: this.uid,
            almacen: this.selectedvalue,
            estado: 'Pendiente',
            url: "img/facturas/'" + filename + "'.jpg"
        });
    };
    SubirFacturaPage.prototype.onSelected = function () {
        var seleccion = document.getElementById('almacenes');
        alert(seleccion);
    };
    return SubirFacturaPage;
}());
SubirFacturaPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-subir-factura',template:/*ion-inline-start:"C:\Users\yenifer\Documents\uniquindio\SOFT2\Centro\src\pages\subir-factura\subir-factura.html"*/'<!--\n\n  Generated template for the SubirFacturaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n    <ion-navbar  >\n\n      <button ion-button menuToggle >\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n      <ion-title>\n\n        Subir Factura\n\n      </ion-title>\n\n    </ion-navbar>\n\n  </ion-header>\n\n\n\n<ion-content padding>\n\n    <div class="text-center"> \n\n    <img class="factura" [src]="base64Image">\n\n    </div>\n\n    <ion-item>\n\n      <ion-label>Almacén:</ion-label>\n\n      <ion-select id="almacenes" >\n\n      \n\n        <ion-option *ngFor="let almacen of almacenes | async"  >\n\n\n\n          <h2 >{{ almacen.nombre }}</h2>\n\n\n\n        </ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n    <p></p>\n\n    <div class="text-center"> \n\n        <h4>¿{{nombre}} estas seguro de subir esta factura?</h4>\n\n    </div>\n\n    <div class="text-center">\n\n        <button ion-button icon-only class="botones si" (click)="agregar()" >\n\n            Si\n\n        </button>\n\n        <button ion-button icon-only class="botones no" (click)="atras()" >\n\n            No\n\n        </button>\n\n    </div>\n\n    <div class="text-center">\n\n    <p>Súbe tú factura para que acumules puntos y redimas por grandes premios.</p>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\yenifer\Documents\uniquindio\SOFT2\Centro\src\pages\subir-factura\subir-factura.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_almacen_service_almacen_service__["a" /* AlmacenServiceProvider */]])
], SubirFacturaPage);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=subir-factura.js.map

/***/ })

});
//# sourceMappingURL=0.js.map