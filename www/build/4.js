webpackJsonp([4],{

/***/ 473:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MisFacturasPageModule", function() { return MisFacturasPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mis_facturas__ = __webpack_require__(494);
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

/***/ 494:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MisFacturasPage; });
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
 * Generated class for the MisFacturasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MisFacturasPage = (function () {
    function MisFacturasPage(navCtrl, navParams, database, menu) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.database = database;
        this.menu = menu;
        this.uid = navParams.get("uid");
        //this.raizFactura = firebase.database().ref();
        this.facturas$ = this.database.list('/factura', {
            query: {
                orderByChild: 'uid',
                equalTo: this.uid
            }
        }).map(function (array) { return array.reverse(); });
        this.menu1Active();
    }
    MisFacturasPage.prototype.menu1Active = function () {
        this.menu.enable(true, 'menu1');
        this.menu.enable(false, 'menu2');
    };
    MisFacturasPage.prototype.ionViewDidLoad = function () {
        this.uid = this.navParams.get("uid");
    };
    MisFacturasPage.prototype.mostrarFactura = function (factura, facturaid) {
        //LO que se desee hacer cuando el usuario clique en una factura,
        //en la cariable factura esta la info de la factura clickada
        this.navCtrl.push('DetalleFacturaClientePage', {
            factura: factura,
            id: facturaid
        });
    };
    return MisFacturasPage;
}());
MisFacturasPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
<<<<<<< HEAD
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"C:\Users\MauricioAndres\proyectos\Centro\src\pages\login\login.html"*/'<!--\n\n  Generated template for the LoginPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  \n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n<ion-list>\n\n\n\n    <img class="logo" src="https://firebasestorage.googleapis.com/v0/b/tiendq-3d47a.appspot.com/o/img%2Fadmin%2Flogo.png?alt=media&token=8743287f-762a-42b0-ab73-d659ae302dbf">\n\n    <form class="autenticar">\n\n\n\n      <ion-item>\n\n        <ion-label floating>Correo</ion-label>\n\n        <ion-input \n\n          [(ngModel)]="user.email" \n\n          name="email" \n\n          type="text" \n\n          autocapitalize="off" \n\n          required\n\n\n\n        >\n\n        </ion-input>\n\n      </ion-item>\n\n     \n\n      <ion-item>\n\n        <ion-label floating>Contraseña</ion-label>\n\n        <ion-input \n\n          [(ngModel)]="user.password" \n\n          name="password" \n\n          type="password" \n\n          required\n\n        >\n\n        </ion-input>\n\n      </ion-item>\n\n      <div padding >\n\n        <button class="auth"\n\n\n\n            ion-button \n\n            (click)="login(user)" \n\n            type="submit" \n\n            color="primary"\n\n            block\n\n        >\n\n          Autentícate \n\n        </button> \n\n        <p></p>\n\n        <!-- <button  class="register"\n\n          ion-button \n\n          (click)="signin()" \n\n          type="submit" \n\n         color="primary"\n\n          block\n\n        >\n\n          Registráte\n\n        </button> -->\n\n      </div>\n\n    </form>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\MauricioAndres\proyectos\Centro\src\pages\login\login.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__["a" /* AuthProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_5__providers_firebase_service_firebase_service__["a" /* FirebaseServicePrivider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */],
        __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_0__app_app_component__["a" /* MyApp */],
        __WEBPACK_IMPORTED_MODULE_7__ionic_native_device__["a" /* Device */],
        __WEBPACK_IMPORTED_MODULE_8__ionic_native_in_app_browser__["a" /* InAppBrowser */]])
], LoginPage);

//# sourceMappingURL=login.js.map
=======
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-mis-facturas',template:/*ion-inline-start:"C:\Users\yenifer\Documents\uniquindio\SOFT2\Centro\src\pages\mis-facturas\mis-facturas.html"*/'<!--\n\n  Generated template for the MisFacturasPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n \n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>\n\n      Mis Facturas\n\n    </ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n        <ion-list>\n\n          <!-- se deben ordenar por fecha de la mas reciente a la mas antigua y deben ser las de cada usuario\n\n          -->\n\n            <button ion-item  *ngFor="let factura of facturas$ | async; let i = index" (click)="mostrarFactura(factura, factura.$key)">\n\n             <ion-icon name="document"></ion-icon> Factura {{i+1}} - {{ factura.estado }} \n\n            </button>\n\n        </ion-list>\n\n   \n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\yenifer\Documents\uniquindio\SOFT2\Centro\src\pages\mis-facturas\mis-facturas.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */]])
], MisFacturasPage);

//# sourceMappingURL=mis-facturas.js.map
>>>>>>> ec8145499cc36a22e34ed55a1b11a22aeed9beb2

/***/ })

});
//# sourceMappingURL=4.js.map