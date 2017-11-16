webpackJsonp([23],{

/***/ 460:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlmacenesListaPageModule", function() { return AlmacenesListaPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__almacenes_lista__ = __webpack_require__(485);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AlmacenesListaPageModule = (function () {
    function AlmacenesListaPageModule() {
    }
    return AlmacenesListaPageModule;
}());
AlmacenesListaPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__almacenes_lista__["a" /* AlmacenesListaPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__almacenes_lista__["a" /* AlmacenesListaPage */]),
        ],
    })
], AlmacenesListaPageModule);

//# sourceMappingURL=almacenes-lista.module.js.map

/***/ }),

/***/ 485:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlmacenesListaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2_database__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(153);
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
 * Generated class for the AlmacenesListaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AlmacenesListaPage = (function () {
    function AlmacenesListaPage(navCtrl, navParams, database, menu) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.database = database;
        this.menu = menu;
        this.almacen = {};
        this.menu1Active();
        this.almacenes$ = this.database.list('Almacen');
        this.almacenes = [];
        this.database.list('Almacen').subscribe(function (data) {
            _this.almacenes = data;
            _this.items = _this.almacenes;
            _this.loadItems = _this.almacenes;
        });
    }
    AlmacenesListaPage.prototype.menu1Active = function () {
        this.menu.enable(true, 'menu1');
        this.menu.enable(false, 'menu2');
    };
    AlmacenesListaPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.almacenes$ = this.database.list('Almacen');
        this.almacenes = [];
        this.database.list('Almacen').subscribe(function (data) {
            _this.almacenes = data;
            console.log("yh " + _this.almacenes);
        });
        this.initializeItems();
    };
    AlmacenesListaPage.prototype.mostrarAlmacen = function (almacen, almacenId) {
        this.navCtrl.push('AlmacenDetallePage', {
            almacen: almacen,
            id: almacenId,
        });
    };
    AlmacenesListaPage.prototype.initializeItems = function () {
        this.items = this.loadItems;
    };
    AlmacenesListaPage.prototype.getItems = function (searchbar) {
        // Reset items back to all of the items
        this.initializeItems();
        // set q to the value of the searchbar
        var q = searchbar.target.value;
        if (q && q.trim() != '') {
            this.items = this.items.filter(function (item) {
                return (item.nombre.toLowerCase().indexOf(q.toLowerCase()) > -1);
            });
            console.log("f " + q, this.items.length);
        }
    };
    return AlmacenesListaPage;
}());
AlmacenesListaPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
        selector: 'page-almacenes-lista',template:/*ion-inline-start:"C:\Users\MauricioAndres\proyectos\Centro\src\pages\almacenes-lista\almacenes-lista.html"*/'<!--\n\n  Generated template for the AlmacenesListaPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n          <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title>\n\n          Almacenes\n\n        </ion-title>\n\n      </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <ion-searchbar (ionInput)="getItems($event)"  placeholder="Buscar"></ion-searchbar>\n\n    <ion-list>\n\n        <button ion-item  *ngFor="let almacen of items let i = index" (click)="mostrarAlmacen(almacen,almacen.$key)">\n\n          <ion-icon name="home"></ion-icon> {{almacen.nombre}} \n\n         </button>      \n\n    </ion-list>    \n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\MauricioAndres\proyectos\Centro\src\pages\almacenes-lista\almacenes-lista.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_0_angularfire2_database__["a" /* AngularFireDatabase */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* MenuController */]])
], AlmacenesListaPage);

//# sourceMappingURL=almacenes-lista.js.map

/***/ })

});
//# sourceMappingURL=23.js.map