webpackJsonp([4],{

/***/ 477:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MisPremiosPageModule", function() { return MisPremiosPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mis_premios__ = __webpack_require__(502);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MisPremiosPageModule = (function () {
    function MisPremiosPageModule() {
    }
    return MisPremiosPageModule;
}());
MisPremiosPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__mis_premios__["a" /* MisPremiosPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__mis_premios__["a" /* MisPremiosPage */]),
        ],
    })
], MisPremiosPageModule);

//# sourceMappingURL=mis-premios.module.js.map

/***/ }),

/***/ 502:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MisPremiosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(155);
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
 * Generated class for the MisPremiosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MisPremiosPage = (function () {
    function MisPremiosPage(navCtrl, navParams, menu, alertCtrl, database, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menu = menu;
        this.alertCtrl = alertCtrl;
        this.database = database;
        this.storage = storage;
        this.menu1Active();
        this.premiosCanjeados$ = this.database.list('premioCanjeado', {
            query: {
                orderByChild: 'usuario',
                equalTo: this.uid
            }
        });
        this.premiosCanjeados = [];
        this.database.list('premioCanjeado', {
            query: {
                orderByChild: 'usuario',
                equalTo: this.uid
            }
        }).subscribe(function (data) {
            _this.premiosCanjeados = data;
            //this.imagenes = Array(this.premiosCanjeados.length);
            // for (var index = 0; index < this.premiosCanjeados.length; index++) {
            //   this.imagenes[index] = `img/premios/`+this.premiosCanjeados[index].nombre+`/`+this.premiosCanjeados[index].url;
            //   //this.generarFotos(index);
            //   this.premiosCanjeados[index].imagen = this.imagenes[index];
            // }
            //
            _this.items = _this.premiosCanjeados;
            _this.loadItems = _this.premiosCanjeados;
        });
    }
    MisPremiosPage.prototype.menu1Active = function () {
        this.menu.enable(true, 'menu1');
        this.menu.enable(false, 'menu2');
    };
    MisPremiosPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.storage.get('uid').then(function (data) {
            _this.uid = data;
        });
        this.premiosCanjeados$ = this.database.list('premioCanjeado', {
            query: {
                orderByChild: 'usuario',
                equalTo: this.uid
            }
        });
        this.premiosCanjeados = [];
        this.database.list('premioCanjeado', {
            query: {
                orderByChild: 'usuario',
                equalTo: this.uid
            }
        }).subscribe(function (data) {
            _this.premiosCanjeados = data;
            _this.imagenes = Array(_this.premiosCanjeados.length);
            // for (var index = 0; index < this.premiosCanjeados.length; index++) {
            //   this.imagenes[index] = `img/premios/`+this.premiosCanjeados[index].nombre+`/`+this.premiosCanjeados[index].url;
            //   //this.generarFotos(index);
            //   this.premiosCanjeados[index].imagen = this.imagenes[index];
            // }
            //
            _this.items = _this.premiosCanjeados;
            _this.loadItems = _this.premiosCanjeados;
        });
        this.initializeItems();
    };
    MisPremiosPage.prototype.initializeItems = function () {
        this.items = this.loadItems;
    };
    MisPremiosPage.prototype.getItems = function (searchbar) {
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
    return MisPremiosPage;
}());
MisPremiosPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-mis-premios',template:/*ion-inline-start:"C:\Users\yenifer\Documents\uniquindio\SOFT2\Centro\src\pages\mis-premios\mis-premios.html"*/'<!--\n\n  Generated template for the MisPremiosPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n          <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title>\n\n          Mis Premios\n\n        </ion-title>\n\n      </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <ion-searchbar (ionInput)="getItems($event)" placeholder="Buscar"></ion-searchbar>\n\n    <!-- se deben listar en orden de posibilidad de canje -->\n\n    <ion-list class="ancho">\n\n    <ion-card ion-item *ngFor="let premio of items let i = index">\n\n      <ion-item>\n\n         <img class="imagenPremio" [src]="premio.url"> \n\n        <!-- "https://firebasestorage.googleapis.com/v0/b/tiendq-3d47a.appspot.com/o/img%2Fpremios%2FBicicleta%2Fbici.jpg?alt=media&token=0850465b-cccd-4eef-9d06-1642aa5a145c"/> -->\n\n        <ion-card-content>\n\n          <ion-card-title>\n\n            {{premio.nombre}}\n\n            </ion-card-title>\n\n          <p  class="desc">\n\n            {{premio.descripcion}}\n\n          </p>\n\n        \n\n        <ion-row class="opciones">\n\n          <ion-col>\n\n          <button class="opcion puntos"><ion-icon name="star"></ion-icon><br>{{premio.valorPuntos}}</button>\n\n          </ion-col>      \n\n        </ion-row>\n\n      </ion-card-content>\n\n        </ion-item>\n\n      </ion-card>\n\n    \n\n    </ion-list>\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\yenifer\Documents\uniquindio\SOFT2\Centro\src\pages\mis-premios\mis-premios.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
], MisPremiosPage);

//# sourceMappingURL=mis-premios.js.map

/***/ })

});
//# sourceMappingURL=4.js.map