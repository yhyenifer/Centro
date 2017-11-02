webpackJsonp([16],{

/***/ 466:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventosPageModule", function() { return EventosPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__eventos__ = __webpack_require__(491);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EventosPageModule = (function () {
    function EventosPageModule() {
    }
    return EventosPageModule;
}());
EventosPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__eventos__["a" /* EventosPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__eventos__["a" /* EventosPage */]),
        ],
    })
], EventosPageModule);

//# sourceMappingURL=eventos.module.js.map

/***/ }),

/***/ 491:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2_database__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(155);
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
 * Generated class for the EventosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EventosPage = (function () {
    function EventosPage(navCtrl, navParams, menu, alertCtrl, database, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menu = menu;
        this.alertCtrl = alertCtrl;
        this.database = database;
        this.storage = storage;
        this.evento = {};
        this.menu1Active();
        this.eventos$ = this.database.list('eventos');
        this.eventos = [];
        this.database.list('eventos').subscribe(function (data) {
            _this.eventos = data;
            console.log("y " + data);
            _this.imagenes = Array(_this.eventos.length);
            for (var index = 0; index < _this.eventos.length; index++) {
                _this.imagenes[index] = "img/eventos/" + _this.eventos[index].nombre + "/" + _this.eventos[index].url;
                _this.generarFotos(index);
            }
            _this.items = _this.eventos;
            _this.loadItems = _this.eventos;
        });
    }
    EventosPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.storage.get('nombre').then(function (data) {
            _this.nombre = data;
        });
        this.eventos$ = this.database.list('evento');
        this.eventos = [];
        this.database.list('evento').subscribe(function (data) {
            _this.eventos = data;
            _this.imagenes = Array(_this.eventos.length);
            for (var index = 0; index < _this.eventos.length; index++) {
                _this.imagenes[index] = "img/eventos/" + _this.eventos[index].nombre + "/" + _this.eventos[index].url;
                _this.generarFotos(index);
            }
        });
        this.initializeItems();
    };
    EventosPage.prototype.menu1Active = function () {
        this.menu.enable(true, 'menu1');
        this.menu.enable(false, 'menu2');
    };
    EventosPage.prototype.generarFotos = function (index) {
        var _this = this;
        var storageRef = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.storage().ref();
        var imageRef = storageRef.child(this.imagenes[index]);
        imageRef.getDownloadURL().then(function (url) {
            _this.imagenes[index] = url;
        });
    };
    EventosPage.prototype.initializeItems = function () {
        this.items = this.loadItems;
    };
    EventosPage.prototype.getItems = function (searchbar) {
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
    return EventosPage;
}());
EventosPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
        selector: 'page-eventos',template:/*ion-inline-start:"C:\Users\yenifer\Documents\uniquindio\SOFT2\Centro\src\pages\eventos\eventos.html"*/'<!--\n\n  Generated template for the EventosPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  \n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n          <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title>\n\n          Eventos\n\n        </ion-title>\n\n      </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <ion-searchbar (ionInput)="getItems($event)"  placeholder="Buscar" ></ion-searchbar>\n\n    <!-- se deben listar en orden de posibilidad de canje -->\n\n    <ion-list>\n\n    <ion-card ion-item *ngFor="let evento of items let i = index">\n\n      <ion-item>\n\n        <img  [src]="imagenes[i]">\n\n        <!-- "https://firebasestorage.googleapis.com/v0/b/tiendq-3d47a.appspot.com/o/img%2Fpremios%2FBicicleta%2Fbici.jpg?alt=media&token=0850465b-cccd-4eef-9d06-1642aa5a145c"/> -->\n\n        <ion-card-content>\n\n       <p><b>\n\n            {{evento.nombre}}\n\n          </b>\n\n          </p>\n\n          <p>\n\n            {{evento.descripcion}}\n\n          </p><br>\n\n          <p class="rojo">\n\n              {{evento.fecha}}  {{evento.hora}}\n\n            </p>\n\n      </ion-card-content>\n\n        </ion-item>\n\n      </ion-card>\n\n    \n\n    </ion-list>\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\yenifer\Documents\uniquindio\SOFT2\Centro\src\pages\eventos\eventos.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* MenuController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_0_angularfire2_database__["a" /* AngularFireDatabase */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
], EventosPage);

//# sourceMappingURL=eventos.js.map

/***/ })

});
//# sourceMappingURL=16.js.map