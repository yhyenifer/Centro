webpackJsonp([7],{

<<<<<<< HEAD
/***/ 463:
=======
/***/ 462:
>>>>>>> dddb33375dc5525951e357fbb0c5ea00d1380619
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
<<<<<<< HEAD
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeAdminPageModule", function() { return HomeAdminPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_admin__ = __webpack_require__(475);
=======
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacturasPendientesPageModule", function() { return FacturasPendientesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__facturas_pendientes__ = __webpack_require__(474);
>>>>>>> dddb33375dc5525951e357fbb0c5ea00d1380619
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



<<<<<<< HEAD
var HomeAdminPageModule = (function () {
    function HomeAdminPageModule() {
    }
    return HomeAdminPageModule;
}());
HomeAdminPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__home_admin__["a" /* HomeAdminPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home_admin__["a" /* HomeAdminPage */]),
        ],
    })
], HomeAdminPageModule);

//# sourceMappingURL=home-admin.module.js.map

/***/ }),

/***/ 475:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeAdminPage; });
=======
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

/***/ 474:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FacturasPendientesPage; });
>>>>>>> dddb33375dc5525951e357fbb0c5ea00d1380619
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
<<<<<<< HEAD
 * Generated class for the HomeAdminPage page.
=======
 * Generated class for the FacturasPendientesPage page.
>>>>>>> dddb33375dc5525951e357fbb0c5ea00d1380619
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
<<<<<<< HEAD
var HomeAdminPage = (function () {
    function HomeAdminPage(navCtrl, navParams, menu) {
=======
var FacturasPendientesPage = (function () {
    function FacturasPendientesPage(navCtrl, navParams, menu, database) {
>>>>>>> dddb33375dc5525951e357fbb0c5ea00d1380619
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menu = menu;
        this.menu1Active();
<<<<<<< HEAD
    }
    HomeAdminPage.prototype.ionViewDidLoad = function () {
    };
    HomeAdminPage.prototype.menu1Active = function () {
        this.menu.enable(true, 'menu2');
        this.menu.enable(false, 'menu1');
    };
    HomeAdminPage.prototype.openPage = function (page) {
        this.navCtrl.setRoot(page);
    };
    return HomeAdminPage;
}());
HomeAdminPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home-admin',template:/*ion-inline-start:"C:\Users\yenifer\Documents\uniquindio\SOFT2\Centro\src\pages\home-admin\home-admin.html"*/'<!--\n\n  Generated template for the HomeAdminPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>\n\n      Menú\n\n    </ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n <ion-row> \n\n <ion-col >\n\n<img class="admin" src="https://firebasestorage.googleapis.com/v0/b/tiendq-3d47a.appspot.com/o/img%2Fadmin%2Fadministrador.png?alt=media&token=6a9ff6cb-d278-4597-8dce-aea70ca5200d">\n\n </ion-col> \n\n <ion-col class="lista" >\n\n    <ion-row> \n\n        <button class="boton" (click)="openPage(\'FacturasPendientesPage\')"> \n\n                Validar Facturas\n\n        </button> \n\n     </ion-row>    \n\n     <ion-row> \n\n        <button class="boton" (click)="openPage(\'ListaPremiosPage\')"> \n\n                Administrar Premios\n\n        </button > \n\n     </ion-row>\n\n     <ion-row> \n\n        <button class="boton"> \n\n                Administrar Eventos\n\n        </button> \n\n     </ion-row>\n\n     <ion-row> \n\n        <button class="boton" (click)="openPage(\'ListaAlmacenesPage\')"> \n\n                Administrar Almacenes\n\n        </button> \n\n     </ion-row>\n\n     <ion-row> \n\n        <button class="boton"> \n\n                Generar Reportes\n\n        </button> \n\n     </ion-row>\n\n</ion-col> \n\n</ion-row>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\yenifer\Documents\uniquindio\SOFT2\Centro\src\pages\home-admin\home-admin.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */]])
], HomeAdminPage);

//# sourceMappingURL=home-admin.js.map
=======
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
        selector: 'page-facturas-pendientes',template:/*ion-inline-start:"C:\Users\MauricioAndres\proyectos\Centro\src\pages\facturas-pendientes\facturas-pendientes.html"*/'<!--\n\n  Generated template for the FacturasPendientesPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  \n\n    <ion-navbar>\n\n      <button ion-button menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n      <ion-title>\n\n        Facturas\n\n      </ion-title>\n\n    </ion-navbar>\n\n    <ion-navbar>\n\n      <ion-row>\n\n        <ion-col class="groupTabs">\n\n\n\n          <button class="tab tab1" (click)="openPage(\'FacturasPendientesPage\')">Pendientes</button>\n\n        </ion-col>\n\n        <ion-col class="groupTabs">\n\n          <button class="tab tab2" (click)="openPage(\'FacturasAprobadasPage\')"> Aprobadas</button>\n\n        </ion-col>\n\n        <ion-col class="">\n\n          <button class="tab tab3" (click)="openPage(\'FacturasDenegadasPage\')">Denegadas</button>\n\n        </ion-col>\n\n      </ion-row>\n\n     </ion-navbar>\n\n  \n\n  </ion-header>\n\n\n\n\n\n<ion-content padding>\n\n<ion-row>\n\n  <ion-col>\n\n    <!-- se deben mostrar las 20 facturas en estado pendiente de  la mas antigua a la mas reciente -->\n\n      <ion-list>\n\n        <button ion-item  *ngFor="let factura of facturas$ | async; let i = index" (click)="mostrarFactura(factura, factura.$key)">\n\n          <ion-icon name="document"></ion-icon> Factura {{i+1}} - {{ factura.estado }} - {{factura.almacen}} \n\n         </button>      \n\n        </ion-list>\n\n\n\n  </ion-col>\n\n  <ion-col>\n\n      <img class="adminVal" src="https://firebasestorage.googleapis.com/v0/b/tiendq-3d47a.appspot.com/o/img%2Fadmin%2Fvalidar.png?alt=media&token=3a31579e-ac19-42e4-bdd0-f35b1a24e1f5">      \n\n  </ion-col>\n\n</ion-row>  \n\n  \n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\MauricioAndres\proyectos\Centro\src\pages\facturas-pendientes\facturas-pendientes.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */],
        __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]])
], FacturasPendientesPage);

//# sourceMappingURL=facturas-pendientes.js.map
>>>>>>> dddb33375dc5525951e357fbb0c5ea00d1380619

/***/ })

});
//# sourceMappingURL=7.js.map