webpackJsonp([14],{

/***/ 464:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacturasAprobadasPageModule", function() { return FacturasAprobadasPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__facturas_aprobadas__ = __webpack_require__(485);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FacturasAprobadasPageModule = (function () {
    function FacturasAprobadasPageModule() {
    }
    return FacturasAprobadasPageModule;
}());
FacturasAprobadasPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__facturas_aprobadas__["a" /* FacturasAprobadasPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__facturas_aprobadas__["a" /* FacturasAprobadasPage */]),
        ],
    })
], FacturasAprobadasPageModule);

//# sourceMappingURL=facturas-aprobadas.module.js.map

/***/ }),

/***/ 485:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FacturasAprobadasPage; });
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
 * Generated class for the FacturasAprobadasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FacturasAprobadasPage = (function () {
    function FacturasAprobadasPage(navCtrl, navParams, menu, database) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menu = menu;
        this.database = database;
        this.menu1Active();
        this.facturas$ = this.database.list('/factura', {
            query: {
                orderByChild: 'estado',
                equalTo: 'Aprobada'
            }
        }).map(function (array) { return array.reverse(); });
    }
    FacturasAprobadasPage.prototype.menu1Active = function () {
        this.menu.enable(true, 'menu2');
        this.menu.enable(false, 'menu1');
    };
<<<<<<< HEAD
    DetallePremiosPage.prototype.seleccionarFoto = function (e) {
        this.file = e.target.files[0];
        console.log(this.file);
        this.readPhoto(this.file);
    };
    DetallePremiosPage.prototype.readPhoto = function (file) {
        var _this = this;
        var reader = new FileReader();
        reader.onload = function (e) {
            _this.zone.run(function () {
                var path = e.target;
                _this.img = path.result;
            });
        };
        reader.readAsDataURL(file);
    };
    DetallePremiosPage.prototype.validarDatos = function () {
        this.campos = null;
        if (this.nombrePremio == null) {
            this.campos = "Nombre, ";
        }
        if (this.nombrePremio == "") {
            this.campos = "Nombre, ";
        }
        if (this.cantidad == null) {
            if (this.campos == null) {
                this.campos = "Cantidad Disponible, ";
            }
            else {
                this.campos = this.campos + "Cantidad Disponible, ";
            }
        }
        if (this.cantidad * 1 == 0) {
            if (this.campos == null) {
                this.campos = "Cantidad Disponible, ";
            }
            else {
                this.campos = this.campos + "Cantidad Disponible, ";
            }
        }
        else {
            if (this.cantidad < 0) {
                var alert_1 = this.alertCtrl.create({
                    title: 'Error',
                    subTitle: "La Cantidad Disponible debe ser mayor a Cero",
                    buttons: ['Aceptar']
                });
                alert_1.present();
                return false;
            }
        }
        if (this.valorPuntos * 1 == 0) {
            if (this.campos == null) {
                this.campos = "Valor en Puntos, ";
            }
            else {
                this.campos = this.campos + "Valor en Puntos, ";
            }
        }
        if (this.valorPuntos == null) {
            if (this.campos == null) {
                this.campos = "Valor en Puntos, ";
            }
            else {
                this.campos = this.campos + "Valor en Puntos, ";
            }
        }
        else {
            if (this.valorPuntos < 0) {
                var alert_2 = this.alertCtrl.create({
                    title: 'Error',
                    subTitle: "El Valor en Puntos debe ser mayor a Cero",
                    buttons: ['Aceptar']
                });
                alert_2.present();
                return false;
            }
        }
        if (this.selectedEstado == null) {
            if (this.campos == null) {
                this.campos = "Estado, ";
            }
            else {
                this.campos = this.campos + "Estado, ";
            }
        }
        if (this.campos != null) {
            var alert_3 = this.alertCtrl.create({
                title: 'Error',
                subTitle: "Verifica los datos ingresados, los campos " + this.campos + "son requeridos",
                buttons: ['Aceptar']
            });
            alert_3.present();
            return false;
        }
        else {
            return true;
        }
    };
    DetallePremiosPage.prototype.modificar = function () {
        var _this = this;
        if (this.validarDatos() == true) {
            var alert_4 = this.alertCtrl.create({
                title: 'Confirmación',
                subTitle: "¿" + this.nombre + " está seguro de Modificar éste Premio?",
                buttons: [
                    {
                        text: 'Si',
                        role: 'si',
                        handler: function () {
                            console.log('si');
                            //aqui va el codigo de modificar
                            var name = "";
                            if (_this.file != undefined) {
                                console.log("cleto" + _this.file.name);
                                var storageRef = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.storage().ref();
                                //this.url = this.file.name;
                                var imageRefBorrar = storageRef.child("" + _this.url);
                                name = _this.file.name;
                                imageRefBorrar.delete().then(function (snapshot) {
                                });
                                var imageRef = storageRef.child("img/premios/" + _this.nombrePremio + "/" + _this.file.name);
                                imageRef.put(_this.file).then(function (snapshot) {
                                });
                            }
                            else {
                                name = _this.premio.url;
                            }
                            _this.infoPremio$.update(_this.id, {
                                nombre: _this.nombrePremio,
                                descripcion: _this.descPremio,
                                cantidad: _this.cantidad,
                                valorPuntos: _this.valorPuntos,
                                estado: _this.selectedEstado,
                                url: name
                            });
                            //notificacion de accion realizada
                            var alert = _this.alertCtrl.create({
                                title: 'Notifiación',
                                subTitle: "Se ha modificado exitosamente el Premio",
                                buttons: [{
                                        text: 'Aceptar',
                                        role: 'Aceptar',
                                        handler: function () {
                                            _this.navCtrl.setRoot("ListaPremiosPage");
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
            alert_4.present();
        }
    };
    DetallePremiosPage.prototype.guardar = function () {
        var _this = this;
        if (this.validarDatos() == true) {
            var alert_5 = this.alertCtrl.create({
                title: 'Confirmación',
                subTitle: "¿" + this.nombre + " está seguro de  Agregar éste Premio?",
                buttons: [
                    {
                        text: 'Si',
                        role: 'si',
                        handler: function () {
                            console.log('si');
                            //aqui va el codigo para guardar el premio
                            var storageRef = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.storage().ref();
                            _this.url = _this.file.name;
                            var imageRef = storageRef.child("img/premios/" + _this.nombrePremio + "/" + _this.file.name);
                            imageRef.put(_this.file).then(function (snapshot) {
                                _this.infoPremio$.push({
                                    nombre: _this.nombrePremio,
                                    descripcion: _this.descPremio,
                                    cantidad: _this.cantidad,
                                    valorPuntos: _this.valorPuntos,
                                    estado: _this.selectedEstado,
                                    url: _this.url
                                });
                            });
                            console.log("nombre" + _this.infoPremio$);
                            //notificacion de accion realizada
                            var alert = _this.alertCtrl.create({
                                title: 'Notifiación',
                                subTitle: "Se ha creado exitosamente el Premio",
                                buttons: [{
                                        text: 'Aceptar',
                                        role: 'Aceptar',
                                        handler: function () {
                                            _this.navCtrl.setRoot("ListaPremiosPage");
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
                            console.log('no');
                        }
                    }
                ]
            });
            alert_5.present();
        }
=======
    FacturasAprobadasPage.prototype.ionViewDidLoad = function () {
    };
    FacturasAprobadasPage.prototype.openPage = function (page) {
        this.navCtrl.setRoot(page);
>>>>>>> ec8145499cc36a22e34ed55a1b11a22aeed9beb2
    };
    FacturasAprobadasPage.prototype.mostrarFactura = function (factura, facturaId) {
        this.navCtrl.setRoot('DetalleFacturaPage', {
            factura: factura,
            id: facturaId
        });
    };
    return FacturasAprobadasPage;
}());
<<<<<<< HEAD
DetallePremiosPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-detalle-premios',template:/*ion-inline-start:"C:\Users\MauricioAndres\proyectos\Centro\src\pages\detalle-premios\detalle-premios.html"*/'<!--\n\n  Generated template for the DetallePremiosPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n          </button>\n\n          \n\n      <ion-title class="titulo">Premio</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n    <ion-row>\n\n        <ion-col>\n\n            <ion-item>\n\n                <ion-label floating>*Nombre:</ion-label>\n\n                <ion-input \n\n                  [(ngModel)]="nombrePremio" \n\n                  name="nombre" \n\n                  type="text" \n\n                  autocapitalize="off" \n\n                  required>\n\n                </ion-input>\n\n              </ion-item>\n\n        </ion-col> \n\n        <ion-col>\n\n            <ion-item>\n\n                <ion-label floating>*Cantidad Disponible:</ion-label>\n\n                <ion-input \n\n                  [(ngModel)]="cantidad" \n\n                  name="cantidad" \n\n                  type="number" \n\n                  autocapitalize="off" \n\n                  required>\n\n                </ion-input>\n\n              </ion-item>\n\n        </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col>\n\n\n\n            <ion-item>\n\n                    <ion-label floating>Descripción:</ion-label>\n\n                    <ion-textarea\n\n                      [(ngModel)]="descPremio" \n\n                      name="descripcion" \n\n                      type="textArea" \n\n                      autocapitalize="off" \n\n                      class="area"\n\n                      >\n\n                    </ion-textarea>\n\n                  </ion-item>\n\n               \n\n                  <br>\n\n                  <div class="divFoto">\n\n                 <ion-label >Foto: </ion-label>\n\n                 <input type="file" (change)="seleccionarFoto($event)" accept=".jpg, .jpeg, .png" >\n\n                 <div class="preview">\n\n                   <img class="imgPremio" [src]="img">\n\n                 </div>\n\n                </div>   \n\n               \n\n    </ion-col> \n\n    <ion-col>\n\n            <ion-item>\n\n                    <ion-label floating>*Valor  en Puntos:</ion-label>\n\n                    <ion-input \n\n                      [(ngModel)]="valorPuntos" \n\n                      name="puntos" \n\n                      type="number" \n\n                      autocapitalize="off" \n\n                      required>\n\n                    </ion-input>\n\n            </ion-item>\n\n                  \n\n                 \n\n                 <ion-item>\n\n                        <ion-label floating>*Estado:</ion-label>\n\n                        <ion-select [(ngModel)]="selectedEstado"\n\n                                    >\n\n                          <!--  se debe crear estados de los almacenes (activo e inactivo) en la base de datos -->\n\n                          <ion-option ><h2>Activo</h2></ion-option>\n\n                          <ion-option ><h2>Inactivo</h2></ion-option>\n\n                        </ion-select>\n\n                </ion-item> \n\n                <div class="text-center">\n\n                    <button *ngIf="ocultar1" class="guardar" (click)="guardar()"><ion-icon name="checkmark"></ion-icon> Guardar</button>\n\n                    <button *ngIf="ocultar2" class="modificar" (click)="modificar()"><ion-icon name="checkmark"></ion-icon> Modificar</button>\n\n                    <button class="cancelar" (click)="cancelar()"><ion-icon name="close"></ion-icon> Cancelar</button>               \n\n                    \n\n                </div>\n\n    </ion-col> \n\n    </ion-row>\n\n   \n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\MauricioAndres\proyectos\Centro\src\pages\detalle-premios\detalle-premios.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* NgZone */],
        __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["a" /* AngularFireDatabase */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */]])
], DetallePremiosPage);

//# sourceMappingURL=detalle-premios.js.map
=======
FacturasAprobadasPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-facturas-aprobadas',template:/*ion-inline-start:"C:\Users\yenifer\Documents\uniquindio\SOFT2\Centro\src\pages\facturas-aprobadas\facturas-aprobadas.html"*/'<!--\n\n  Generated template for the FacturasPendientesPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n    \n\n      <ion-navbar>\n\n        <button ion-button menuToggle>\n\n          <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title>\n\n          Facturas\n\n        </ion-title>\n\n      </ion-navbar>\n\n      <ion-navbar>\n\n        <ion-row>\n\n          <ion-col class="groupTabs">\n\n            <button class="tab tab1" (click)="openPage(\'FacturasPendientesPage\')">Pendientes</button>\n\n          </ion-col>\n\n          <ion-col class="groupTabs">\n\n            <button class="tab tab2" (click)="openPage(\'FacturasAprobadasPage\')"> Aprobadas</button>\n\n          </ion-col>\n\n          <ion-col class="">\n\n            <button class="tab tab3" (click)="openPage(\'FacturasDenegadasPage\')">Denegadas</button>\n\n          </ion-col>\n\n        </ion-row>\n\n       </ion-navbar>\n\n    \n\n    </ion-header>\n\n  \n\n  \n\n  <ion-content padding>\n\n  <ion-row>\n\n    <ion-col>\n\n      <!-- se deben mostrar las 20 facturas en estado aprobadas de  la mas reciente  a la mas antigua -->\n\n        <ion-list>\n\n          <button ion-item  *ngFor="let factura of facturas$ | async; let i = index" (click)="mostrarFactura(factura)">\n\n            <ion-icon name="document"></ion-icon> Factura {{i+1}} - {{ factura.estado }} - {{factura.almacen}} \n\n           </button>\n\n        \n\n                    \n\n          </ion-list>\n\n    </ion-col>\n\n    <ion-col>\n\n        <img class="adminVal" src="https://firebasestorage.googleapis.com/v0/b/tiendq-3d47a.appspot.com/o/img%2Fadmin%2Fvalidar.png?alt=media&token=3a31579e-ac19-42e4-bdd0-f35b1a24e1f5">      \n\n    </ion-col>\n\n  </ion-row>  \n\n    \n\n  </ion-content>\n\n  '/*ion-inline-end:"C:\Users\yenifer\Documents\uniquindio\SOFT2\Centro\src\pages\facturas-aprobadas\facturas-aprobadas.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */],
        __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]])
], FacturasAprobadasPage);

//# sourceMappingURL=facturas-aprobadas.js.map
>>>>>>> ec8145499cc36a22e34ed55a1b11a22aeed9beb2

/***/ })

});
//# sourceMappingURL=14.js.map