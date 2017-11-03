webpackJsonp([24],{

/***/ 458:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlmacenDetallePageModule", function() { return AlmacenDetallePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__almacen_detalle__ = __webpack_require__(483);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AlmacenDetallePageModule = (function () {
    function AlmacenDetallePageModule() {
    }
    return AlmacenDetallePageModule;
}());
AlmacenDetallePageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__almacen_detalle__["a" /* AlmacenDetallePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__almacen_detalle__["a" /* AlmacenDetallePage */]),
        ],
    })
], AlmacenDetallePageModule);

//# sourceMappingURL=almacen-detalle.module.js.map

/***/ }),

/***/ 483:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlmacenDetallePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_native_in_app_browser__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(87);
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
 * Generated class for the AlmacenDetallePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AlmacenDetallePage = (function () {
    function AlmacenDetallePage(navCtrl, navParams, iap, database, menu) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.iap = iap;
        this.database = database;
        this.menu = menu;
        this.almacen = {};
        this.menu1Active();
        this.file = [];
        this.urls = [];
        this.almacen = navParams.get("almacen");
        this.id = navParams.get("id");
        for (var index = 0; index < this.almacen.url.length; index++) {
            this.generarFotos(index);
        }
        this.descAlmacen = this.almacen.descripcion;
        this.horarioAlmacen = this.almacen.horario;
        this.telAlmacen = this.almacen.telefono;
        this.webAlmacen = this.almacen.web;
        this.nombreAlmacen = this.almacen.nombre;
        this.selectedCategoria = this.almacen.categoria;
        this.selectedEstado = this.almacen.estado;
        this.localAlmacen = this.almacen.local;
    }
    AlmacenDetallePage.prototype.menu1Active = function () {
        this.menu.enable(true, 'menu1');
        this.menu.enable(false, 'menu2');
    };
    AlmacenDetallePage.prototype.onPageDidEnter = function () {
    };
    AlmacenDetallePage.prototype.url = function () {
        // this.iap.create("https://megacity.herokuapp.com/");
        this.iap.create(this.webAlmacen);
    };
    AlmacenDetallePage.prototype.generarFotos = function (index) {
        var _this = this;
        var storageRef = __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.storage().ref();
        var imageRef = storageRef.child("img/almacenes/" + this.almacen.nombre + "/" + this.almacen.url[index]);
        imageRef.getDownloadURL().then(function (url) {
            _this.urls[index] = url;
            //this.premios[index].imagen = url;
            //console.log("imagen" + url);
        });
    };
    return AlmacenDetallePage;
}());
AlmacenDetallePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
<<<<<<< HEAD
        selector: 'page-almacen-detalle',template:/*ion-inline-start:"C:\Users\yenifer\Documents\uniquindio\SOFT2\Centro\src\pages\almacen-detalle\almacen-detalle.html"*/'<!--\n\n  Generated template for the AlmacenDetallePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n          <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title>\n\n          Alamacén\n\n        </ion-title>\n\n      </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <ion-card >\n\n        <ion-item>\n\n          <ion-slides pager  autoplay="2000"  speed="1000" effect="cube">\n\n              <ion-slide *ngFor="let url of almacen.url  let i = index">\n\n                   <img [src]="urls[i]"/>\n\n              </ion-slide> \n\n            </ion-slides>              \n\n          <ion-card-content>\n\n            <ion-row>\n\n              <ion-col >\n\n              <p class="titulo" ><b>{{nombreAlmacen}}</b></p>\n\n            </ion-col>\n\n            <ion-col class="derecha">\n\n              <p class="titulo"><b>{{selectedCategoria}}</b></p>\n\n            </ion-col>\n\n            </ion-row>\n\n            <p class="centro">\n\n            {{descAlmacen}}\n\n            </p>\n\n            <br>\n\n            <p class="centro rojo">\n\n              {{horarioAlmacen}}\n\n              </p>\n\n          <ion-row class="opciones">\n\n            <ion-col>\n\n            <button class="opcion puntos"><ion-icon name="paper-plane"></ion-icon><br>Local: {{localAlmacen}}</button>\n\n            </ion-col>\n\n            <ion-col>\n\n            <button class="opcion diferencia"><ion-icon name="call"></ion-icon><br>{{telAlmacen}}</button>\n\n          </ion-col>\n\n          <ion-col>\n\n            <button class="opcion canjear" (click)="url()"><ion-icon name="globe"></ion-icon><br>Sitio Web</button>\n\n          </ion-col>\n\n          </ion-row>\n\n        </ion-card-content>\n\n          </ion-item>\n\n        </ion-card>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\yenifer\Documents\uniquindio\SOFT2\Centro\src\pages\almacen-detalle\almacen-detalle.html"*/,
=======
<<<<<<< HEAD
        selector: 'page-almacen-detalle',template:/*ion-inline-start:"C:\Users\yenifer\Documents\uniquindio\SOFT2\Centro\src\pages\almacen-detalle\almacen-detalle.html"*/'<!--\n\n  Generated template for the AlmacenDetallePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n          <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title>\n\n          Alamacén\n\n        </ion-title>\n\n      </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <ion-card >\n\n        <ion-item>\n\n          <ion-slides pager  autoplay="2000"  speed="1000" effect="cube">\n\n              <ion-slide *ngFor="let url of almacen.url  let i = index">\n\n                   <img [src]="urls[i]"/>\n\n              </ion-slide> \n\n            </ion-slides>              \n\n          <ion-card-content>\n\n            <ion-row>\n\n              <ion-col >\n\n              <p class="titulo" ><b>{{nombreAlmacen}}</b></p>\n\n            </ion-col>\n\n            <ion-col class="derecha">\n\n              <p class="titulo"><b>{{selectedCategoria}}</b></p>\n\n            </ion-col>\n\n            </ion-row>\n\n            <p class="centro">\n\n            {{descAlmacen}}\n\n            </p>\n\n            <br>\n\n            <p class="centro rojo">\n\n              {{horarioAlmacen}}\n\n              </p>\n\n          <ion-row class="opciones">\n\n            <ion-col>\n\n            <button class="opcion puntos"><ion-icon name="paper-plane"></ion-icon><br>Local: {{localAlmacen}}</button>\n\n            </ion-col>\n\n            <ion-col>\n\n            <button class="opcion diferencia"><ion-icon name="call"></ion-icon><br>{{telAlmacen}}</button>\n\n          </ion-col>\n\n          <ion-col>\n\n            <button class="opcion canjear" (click)="url()"><ion-icon name="globe"></ion-icon><br>Sitio Web</button>\n\n          </ion-col>\n\n          </ion-row>\n\n        </ion-card-content>\n\n          </ion-item>\n\n        </ion-card>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\yenifer\Documents\uniquindio\SOFT2\Centro\src\pages\almacen-detalle\almacen-detalle.html"*/,
=======
        selector: 'page-almacen-detalle',template:/*ion-inline-start:"C:\Users\MauricioAndres\proyectos\Centro\src\pages\almacen-detalle\almacen-detalle.html"*/'<!--\n\n  Generated template for the AlmacenDetallePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n          <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title>\n\n          Alamacén\n\n        </ion-title>\n\n      </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <ion-card >\n\n        <ion-item>\n\n          <ion-slides pager  autoplay="2000" loop="false" speed="1000">\n\n            <!-- aqui van las fotos del almacen-->\n\n              <ion-slide *ngFor="let url of almacen.url  let i = index">\n\n                   <img [src]="urls[i]"/>\n\n                    \n\n                           <!-- [src]="imagenes[i]"> -->\n\n              </ion-slide> \n\n            </ion-slides>              \n\n          <ion-card-content>\n\n            <ion-row>\n\n              <ion-col >\n\n              <p class="titulo" ><b>{{nombreAlmacen}}</b></p>\n\n            </ion-col>\n\n            <ion-col class="derecha">\n\n              <p class="titulo"><b>{{selectedCategoria}}</b></p>\n\n            </ion-col>\n\n            </ion-row>\n\n            <p class="centro">\n\n            {{descAlmacen}}\n\n            </p>\n\n            <br>\n\n            <p class="centro rojo">\n\n              {{horarioAlmacen}}\n\n              </p>\n\n          <ion-row class="opciones">\n\n            <ion-col>\n\n            <button class="opcion puntos"><ion-icon name="paper-plane"></ion-icon><br>Local: {{localAlmacen}}</button>\n\n            </ion-col>\n\n            <ion-col>\n\n            <button class="opcion diferencia"><ion-icon name="call"></ion-icon><br>{{telAlmacen}}</button>\n\n          </ion-col>\n\n          <ion-col>\n\n            <button class="opcion canjear" (click)="url()"><ion-icon name="globe"></ion-icon><br>Sitio Web</button>\n\n          </ion-col>\n\n          </ion-row>\n\n        </ion-card-content>\n\n          </ion-item>\n\n        </ion-card>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\MauricioAndres\proyectos\Centro\src\pages\almacen-detalle\almacen-detalle.html"*/,
>>>>>>> ceb315ec6fbac2c4f5c8d54213e36b15f5d50bd7
>>>>>>> 00617020f62fa8e0ce25af623b9d685f21914bf3
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_0__ionic_native_in_app_browser__["a" /* InAppBrowser */],
        __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* MenuController */]])
], AlmacenDetallePage);

//# sourceMappingURL=almacen-detalle.js.map

/***/ })

});
//# sourceMappingURL=24.js.map