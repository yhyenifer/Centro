webpackJsonp([11],{

/***/ 471:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeClientePageModule", function() { return HomeClientePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_cliente__ = __webpack_require__(496);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HomeClientePageModule = (function () {
    function HomeClientePageModule() {
    }
    return HomeClientePageModule;
}());
HomeClientePageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__home_cliente__["a" /* HomeClientePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home_cliente__["a" /* HomeClientePage */]),
        ],
    })
], HomeClientePageModule);

//# sourceMappingURL=home-cliente.module.js.map

/***/ }),

/***/ 496:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeClientePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(303);
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





/**
 * Generated class for the HomeClientePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var HomeClientePage = (function () {
    function HomeClientePage(camera, navCtrl, navParams, database, alertCtrl, menu, zone) {
        var _this = this;
        this.camera = camera;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.database = database;
        this.menu = menu;
        this.zone = zone;
        this.firestore = __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.database().ref('/pushtokens');
        this.firemsg = __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.database().ref('/messages');
        this.evento = {};
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
        this.infoFactura$ = this.database.list('factura');
        this.alertCtrl = alertCtrl;
        this.uid = navParams.get("uid");
        this.eventos$ = this.database.list('eventos');
        this.eventos = [];
        this.nombreEvento = [];
        this.database.list('eventos').subscribe(function (data) {
            _this.eventos = data;
            _this.eventos.sort(function (a, b) {
                a = new Date(a.fecha);
                b = new Date(b.fecha);
                return (a < b ? -1 : a > b ? 1 : 0);
            });
            _this.imagenes = Array(_this.eventos.length);
            for (var index = 0; index <= 2; index++) {
                _this.nombreEvento[index] = _this.eventos[index].nombre;
                _this.imagenes[index] = "img/eventos/" + _this.eventos[index].nombre + "/" + _this.eventos[index].url;
                _this.generarFotos(index);
            }
        });
    }
    HomeClientePage.prototype.generarFotos = function (index) {
        var _this = this;
        var storageRef = __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.storage().ref();
        var imageRef = storageRef.child(this.imagenes[index]);
        imageRef.getDownloadURL().then(function (url) {
            _this.imagenes[index] = url;
            _this.eventos[index].imagen = url;
        });
    };
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
    HomeClientePage.prototype.ionViewDidLoad = function () {
        this.uid = this.navParams.get("uid");
        this.nombre = this.navParams.get("nombre");
        this.email = this.navParams.get("email");
        this.puntos = this.navParams.get("puntos");
    };
    HomeClientePage.prototype.ir = function () {
        this.navCtrl.setRoot('SubirFacturaPage');
    };
    HomeClientePage.prototype.seleccionar = function (e) {
        this.fileT = e.target.files[0];
        this.readPhoto(this.fileT);
    };
    HomeClientePage.prototype.readPhoto = function (file) {
        var _this = this;
        var reader = new FileReader();
        reader.onload = function (e) {
            _this.zone.run(function () {
                var path = e.target;
                _this.base64Image = path.result;
                _this.navCtrl.setRoot('SubirFacturaPage', {
                    base64Image: _this.base64Image,
                    uid: _this.uid
                });
            });
        };
        reader.readAsDataURL(file);
    };
    return HomeClientePage;
}());
HomeClientePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home-cliente',template:/*ion-inline-start:"C:\Users\yenifer\Documents\uniquindio\SOFT2\Centro\src\pages\home-cliente\home-cliente.html"*/'<!--\n\n  Generated template for the HomeClientePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n\n\n<ion-header>\n\n    <ion-navbar>\n\n      <button ion-button menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n      <ion-title>\n\n        Menú\n\n      </ion-title>\n\n    </ion-navbar>\n\n  </ion-header>\n\n  \n\n  \n\n  <ion-content padding>\n\n     \n\n  <div class="text-center"> \n\n  <h4 class="text-center">Súbe aquí tú factura para que acumules puntos y redimas por grandes premios.</h4>\n\n  <img class="gana" src="https://firebasestorage.googleapis.com/v0/b/tiendq-3d47a.appspot.com/o/img%2Fadmin%2Fgana.png?alt=media&token=c6d87ebf-ca83-40a6-a5e6-a54e0dba188f">\n\n  <p class="mobile">Tómale una foto a tú factura</p>\n\n  <button ion-button icon-only class="camara mobile" (click)="tomarFoto()">\n\n    <ion-icon name="camera"></ion-icon>\n\n  </button>\n\n  <p class="mobile">O súbela desde tus imágenes</p>\n\n  <button ion-button icon-only class="camara mobile" (click)="sacarFoto()" >\n\n      <ion-icon name="image"></ion-icon>\n\n  </button>\n\n  <div class="divFoto">\n\n    <ion-label >Seleccione la foto de tú Factura: </ion-label>\n\n    <input type="file" (change)="seleccionar($event)"  accept=".jpg, .jpeg, .png"  >\n\n   \n\n    \n\n   </div>\n\n\n\n  </div>\n\n  <div class="slide_eventos">\n\n    \n\n      <ion-slides pager   speed="1000" >\n\n          <ion-slide  *ngFor="let evento of nombreEvento let i = index ">\n\n                <ion-row>\n\n                    <ion-col>\n\n                      <img class="logoEvento" [src]="imagenes[i]">\n\n                    </ion-col> \n\n                    <ion-col>\n\n                      <p class="letra12">{{evento}}</p>\n\n                    </ion-col>   \n\n                    </ion-row>\n\n            </ion-slide>\n\n                    \n\n          </ion-slides>\n\n  </div> \n\n\n\n \n\n  \n\n  \n\n  </ion-content>'/*ion-inline-end:"C:\Users\yenifer\Documents\uniquindio\SOFT2\Centro\src\pages\home-cliente\home-cliente.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* NgZone */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* NgZone */]) === "function" && _g || Object])
], HomeClientePage);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=home-cliente.js.map

/***/ })

});
//# sourceMappingURL=11.js.map