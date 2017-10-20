webpackJsonp([4],{

/***/ 465:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListaAlmacenesPageModule", function() { return ListaAlmacenesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lista_almacenes__ = __webpack_require__(477);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ListaAlmacenesPageModule = (function () {
    function ListaAlmacenesPageModule() {
    }
    return ListaAlmacenesPageModule;
}());
ListaAlmacenesPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__lista_almacenes__["a" /* ListaAlmacenesPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__lista_almacenes__["a" /* ListaAlmacenesPage */]),
        ],
    })
], ListaAlmacenesPageModule);

//# sourceMappingURL=lista-almacenes.module.js.map

/***/ }),

/***/ 477:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListaAlmacenesPage; });
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
 * Generated class for the ListaAlmacenesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HomeClientePage = (function () {
    function HomeClientePage(camera, navCtrl, navParams, database, alertCtrl, menu, loadingCtrl) {
        this.camera = camera;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menu = menu;
        this.loadingCtrl = loadingCtrl;
        this.options1 = {
            quality: 25,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            sourceType: 1
        };
        this.options2 = {
            quality: 25,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            sourceType: 0
        };
        this.factura = {};
        this.menu1Active();
    }
    HomeClientePage.prototype.menu1Active = function () {
        this.menu.enable(true, 'menu1');
        this.menu.enable(false, 'menu2');
    };
    HomeClientePage.prototype.tomarFoto = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                try {
                    this.camera.getPicture(this.options1).then(function (ImageData) {
                        _this.base64Image = 'data:image/jpeg;base64,' + ImageData;
                        _this.navCtrl.setRoot('SubirFacturaPage', {
                            base64Image: _this.base64Image,
                            uid: _this.uid
                        });
                    }, function (err) {
                    });
                }
                catch (e) {
                }
                return [2 /*return*/];
            });
        });
    };
    HomeClientePage.prototype.sacarFoto = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                try {
                    this.camera.getPicture(this.options2).then(function (ImageData) {
                        _this.base64Image = 'data:image/jpeg;base64,' + ImageData;
                        _this.navCtrl.setRoot('SubirFacturaPage', {
                            base64Image: _this.base64Image,
                            uid: _this.uid
                        });
                    }, function (err) {
                    });
                }
                catch (e) {
                }
                return [2 /*return*/];
            });
        });
    };
    HomeClientePage.prototype.upload = function () {
        this.navCtrl.push('SubirFacturaPage', {
            base64Image: this.base64Image,
            uid: this.uid,
            nombre: this.nombre
        });
    };
    ListaAlmacenesPage.prototype.menu1Active = function () {
        this.menu.enable(true, 'menu2');
        this.menu.enable(false, 'menu1');
    };
    ListaAlmacenesPage.prototype.mostrarAlmacen = function () {
        this.navCtrl.setRoot('DetalleAlmacenPage');
    };
    HomeClientePage.prototype.presentLoading = function () {
        var loader = this.loadingCtrl.create({
            content: "Cargando imagen...",
            duration: 3000
        });
        loader.present();
    };
    return HomeClientePage;
}());
ListaAlmacenesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-lista-almacenes',template:/*ion-inline-start:"C:\Users\yenifer\Documents\uniquindio\SOFT2\Centro\src\pages\lista-almacenes\lista-almacenes.html"*/'<!--\n  Generated template for the ListaAlmacenesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n      <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n    <ion-title>Almacenes</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-row>\n        <ion-col>\n            <!-- se deben mostrar los almacenes en orden alfabetico -->\n              <ion-list>\n                <button ion-item   (click)="mostrarAlmacen()">\n                  <ion-icon name="house"></ion-icon> nombre almacen\n                 </button>      \n                </ion-list>\n        \n          </ion-col>\n          <ion-col>\n              <img class="adminVal" src="https://firebasestorage.googleapis.com/v0/b/tiendq-3d47a.appspot.com/o/img%2Fadmin%2Falmacenes_mega.png?alt=media&token=0364831f-6e19-4ca1-aa21-b9b8fc2d4107">      \n          </ion-col>\n    </ion-row>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\yenifer\Documents\uniquindio\SOFT2\Centro\src\pages\lista-almacenes\lista-almacenes.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
], HomeClientePage);

//# sourceMappingURL=lista-almacenes.js.map

/***/ })

});
//# sourceMappingURL=4.js.map