webpackJsonp([2],{

/***/ 480:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PremiosPageModule", function() { return PremiosPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__premios__ = __webpack_require__(505);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PremiosPageModule = (function () {
    function PremiosPageModule() {
    }
    return PremiosPageModule;
}());
PremiosPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__premios__["a" /* PremiosPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__premios__["a" /* PremiosPage */]),
        ],
    })
], PremiosPageModule);

//# sourceMappingURL=premios.module.js.map

/***/ }),

/***/ 505:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PremiosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2_database__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(155);
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
 * Generated class for the PremiosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PremiosPage = (function () {
    function PremiosPage(navCtrl, navParams, menu, alertCtrl, database, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menu = menu;
        this.alertCtrl = alertCtrl;
        this.database = database;
        this.storage = storage;
        this.premio = {};
        this.diferencia = 0;
        this.menu1Active();
        this.database.list('premio', {
            query: {
                orderByChild: 'estado',
                equalTo: 'Activo'
            }
        }).subscribe(function (data1) {
            _this.premios = data1;
            _this.premios.sort(function (a, b) {
                return parseFloat(a.valorPuntos) - parseFloat(b.valorPuntos);
            });
            _this.imagenes = Array(_this.premios.length);
            for (var index = 0; index < _this.premios.length; index++) {
                _this.hacerResta(index);
                console.log('constructor ' + _this.premios[index].imagen);
                _this.imagenes[index] = "img/premios/" + _this.premios[index].nombre + "/" + _this.premios[index].url;
                _this.generarFotos(index);
            }
            //
            _this.items = _this.premios;
            _this.loadItems = _this.premios;
        });
        this.usuarios$ = this.database.list('perfil');
        this.premios$ = this.database.list('premio', {
            query: {
                orderByChild: 'estado',
                equalTo: 'Activo'
            }
        }).map(function (array) { return array.reverse(); });
        this.premiosCanjeados$ = this.database.list('premioCanjeado');
        this.premios = [];
    }
    PremiosPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.storage.get('nombre').then(function (data) {
            _this.nombre = data;
        });
        this.storage.get('puntos').then(function (data) {
            _this.puntosCliente = data;
        });
    };
    PremiosPage.prototype.menu1Active = function () {
        this.menu.enable(true, 'menu1');
        this.menu.enable(false, 'menu2');
    };
    PremiosPage.prototype.hacerResta = function (index) {
        var _this = this;
        this.storage.get('puntos').then(function (data) {
            _this.puntosCliente = data;
            _this.premios[index].diferencia = Number(_this.premios[index].valorPuntos) - Number(_this.puntosCliente);
            if (_this.premios[index].diferencia < 0) {
                _this.premios[index].diferencia = 0;
            }
        });
    };
    PremiosPage.prototype.generarFotos = function (index) {
        var _this = this;
        var storageRef = __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.storage().ref();
        var imageRef = storageRef.child(this.imagenes[index]);
        imageRef.getDownloadURL().then(function (url) {
            _this.imagenes[index] = url;
            _this.premios[index].imagen = url;
        });
    };
    //validar que el cliente si tenga los puntos requeridos y validar que el premio si tenga cantidad dispobible
    PremiosPage.prototype.validarDatos = function (premio) {
        if (premio.cantidad < 0) {
            var alert_1 = this.alertCtrl.create({
                title: 'Error',
                subTitle: this.nombre + " el premio que deseas canjear no esta disponible",
                buttons: ['Aceptar']
            });
            alert_1.present();
            return false;
        }
        else {
            if (this.puntosCliente < premio.valorPuntos) {
                var alert_2 = this.alertCtrl.create({
                    title: 'Error',
                    subTitle: this.nombre + " no tienes puntos suficientes para realizar el canje",
                    buttons: ['Aceptar']
                });
                alert_2.present();
                return false;
            }
            else {
                return true;
            }
        }
    };
    PremiosPage.prototype.canjear = function (premio, premio_key) {
        var _this = this;
        var uid;
        this.storage.get('uid').then(function (data) {
            uid = data;
        });
        if (this.validarDatos(premio) == true) {
            var alert_3 = this.alertCtrl.create({
                title: 'Confirmación',
                subTitle: "¿" + this.nombre + " está seguro de Canjear éste Premio?",
                buttons: [
                    {
                        text: 'Si',
                        role: 'si',
                        handler: function () {
                            // console.log('si');
                            //aqui va el codigo de canjear
                            if (premio.cantidad - 1 == 0) {
                                _this.premios$.update(premio_key, {
                                    cantidad: premio.cantidad - 1,
                                    estado: 'Inactivo'
                                });
                            }
                            else {
                                _this.premios$.update(premio_key, {
                                    cantidad: premio.cantidad - 1,
                                });
                            }
                            _this.premiosCanjeados$.push({
                                nombre: premio.nombre,
                                descripcion: premio.descripcion,
                                valorPuntos: premio.valorPuntos,
                                usuario: uid,
                                url: premio.imagen
                            });
                            _this.usuarios$.update(uid, {
                                puntos: Number(_this.puntosCliente) - Number(premio.valorPuntos)
                            });
                            //notificacion de accion realizada
                            var alert = _this.alertCtrl.create({
                                title: 'Notifiación',
                                subTitle: "Se ha canjeado exitosamente el Premio",
                                buttons: [{
                                        text: 'Aceptar',
                                        role: 'Aceptar',
                                        handler: function () {
                                            _this.navCtrl.setRoot("PremiosPage");
                                        }
                                    }
                                ]
                            });
                            alert.present();
                        }
                    },
                    {
                        text: 'No',
                        role: 'no',
                        handler: function () {
                        }
                    }
                ]
            });
            alert_3.present();
        }
    };
    PremiosPage.prototype.initializeItems = function () {
        this.items = this.loadItems;
    };
    PremiosPage.prototype.getItems = function (searchbar) {
        // Reset items back to all of the items
        this.initializeItems();
        // set q to the value of the searchbar
        var q = searchbar.target.value;
        if (q && q.trim() != '') {
            this.items = this.items.filter(function (item) {
                return (item.nombre.toLowerCase().indexOf(q.toLowerCase()) > -1);
            });
        }
    };
    return PremiosPage;
}());
PremiosPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
        selector: 'page-premios',template:/*ion-inline-start:"C:\Users\yenifer\Documents\uniquindio\SOFT2\Centro\src\pages\premios\premios.html"*/'<!--\n\n  Generated template for the PremiosPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n          <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title>\n\n          Premios\n\n        </ion-title>\n\n      </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <ion-searchbar class="ancho" (ionInput)="getItems($event)" placeholder="Buscar"></ion-searchbar>\n\n    <!-- se deben listar en orden de posibilidad de canje -->\n\n    <ion-list class="ancho">\n\n    <ion-card ion-item *ngFor="let premio of items let i = index">\n\n      <ion-item>\n\n        <img class="imagenPremio" [src]="premio.imagen">\n\n        <!-- "https://firebasestorage.googleapis.com/v0/b/tiendq-3d47a.appspot.com/o/img%2Fpremios%2FBicicleta%2Fbici.jpg?alt=media&token=0850465b-cccd-4eef-9d06-1642aa5a145c"/> -->\n\n        <ion-card-content>\n\n          <ion-card-title>\n\n            {{premio.nombre}}\n\n            </ion-card-title>\n\n          <div class="desc">\n\n            {{premio.descripcion}}\n\n          </div>\n\n        \n\n        <ion-row class="opciones">\n\n          <ion-col>\n\n          <button class="opcion puntos"><ion-icon name="star"></ion-icon><br>{{premio.valorPuntos}}</button>\n\n          </ion-col>\n\n          <ion-col>\n\n          <button class="opcion diferencia"><ion-icon name="star-outline"></ion-icon><br>{{premio.diferencia}}</button>\n\n        </ion-col>\n\n        <ion-col>\n\n          <button class="opcion canjear" (click)="canjear(premio,premio.$key)"><ion-icon name="pricetags"></ion-icon><br>Canjear</button>\n\n        </ion-col>\n\n        </ion-row>\n\n      </ion-card-content>\n\n        </ion-item>\n\n      </ion-card>\n\n    \n\n    </ion-list>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\yenifer\Documents\uniquindio\SOFT2\Centro\src\pages\premios\premios.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* MenuController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_0_angularfire2_database__["a" /* AngularFireDatabase */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
], PremiosPage);

//# sourceMappingURL=premios.js.map

/***/ })

});
//# sourceMappingURL=2.js.map