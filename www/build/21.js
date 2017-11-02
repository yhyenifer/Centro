webpackJsonp([21],{

/***/ 460:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetalleAlmacenPageModule", function() { return DetalleAlmacenPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__detalle_almacen__ = __webpack_require__(484);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DetalleAlmacenPageModule = (function () {
    function DetalleAlmacenPageModule() {
    }
    return DetalleAlmacenPageModule;
}());
DetalleAlmacenPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__detalle_almacen__["a" /* DetalleAlmacenPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__detalle_almacen__["a" /* DetalleAlmacenPage */]),
        ],
    })
], DetalleAlmacenPageModule);

//# sourceMappingURL=detalle-almacen.module.js.map

/***/ }),

/***/ 484:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetalleAlmacenPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(87);
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
 * Generated class for the DetalleAlmacenPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DetalleAlmacenPage = (function () {
    function DetalleAlmacenPage(navCtrl, navParams, zone, database, menu, storage, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.zone = zone;
        this.database = database;
        this.menu = menu;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.conteoFile = 0;
        this.conteoURL = 0;
        this.conteoE = 0;
        this.ocultar1 = false;
        this.ocultar2 = false;
        this.almacen = {};
        this.categoria = {};
        this.campos = "";
        this.menu1Active();
        this.file = [];
        this.fileT = [];
        this.fileS = [];
        this.infoAlmacen$ = this.database.list('Almacen');
        this.infoCate$ = this.database.list('CategoriaAlmacen');
        this.accion = navParams.get("accion");
        this.filefoto = new Array(this.file.length);
        if (this.accion == 1) {
            this.almacen = navParams.get("almacen");
            this.id = navParams.get("id");
            this.descAlmacen = this.almacen.descripcion;
            this.horarioAlmacen = this.almacen.horario;
            this.telAlmacen = this.almacen.telefono;
            this.webAlmacen = this.almacen.web;
            this.nombreAlmacen = this.almacen.nombre;
            this.selectedCategoria = this.almacen.categoria;
            this.selectedEstado = this.almacen.estado;
            this.localAlmacen = this.almacen.local;
            this.almacen.realurl = new Array(this.almacen.url.length);
            this.almacen.img = new Array(this.almacen.url.length);
            this.conteoURL = this.almacen.url.length;
            this.volverReal();
            for (var index = 0; index < this.almacen.url.length; index++) {
                this.generarFotos(index);
            }
            this.fileS = this.almacen.url;
            console.log("este es" + this.filefoto);
            this.ocultar2 = !this.ocultar2;
        }
        else {
            this.descAlmacen = "";
            this.telAlmacen = "";
            this.webAlmacen = "";
            this.ocultar1 = !this.ocultar1;
        }
    }
    DetalleAlmacenPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.file = [];
        this.fileT = [];
        this.fileS = this.almacen.url;
        this.storage.get('nombre').then(function (data) {
            _this.nombre = data;
        });
    };
    DetalleAlmacenPage.prototype.menu1Active = function () {
        this.menu.enable(true, 'menu2');
        this.menu.enable(false, 'menu1');
    };
    DetalleAlmacenPage.prototype.volverReal = function () {
        for (var index = 0; index < this.almacen.url.length; index++) {
            this.almacen.realurl[index] = "img/almacenes/" + this.almacen.nombre + "/" + this.almacen.url[index];
        }
        //this.almacen.realurl
    };
    DetalleAlmacenPage.prototype.generarFotos = function (index) {
        var _this = this;
        //for (var index = 0; index < this.almacen.url.length; index++) {
        var storageRef = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.storage().ref();
        var imageRef = storageRef.child(this.almacen.realurl[index]);
        imageRef.getDownloadURL().then(function (url) {
            return _this.almacen.img[index] = url;
        });
        console.log("contador" + this.almacen.img);
        //}
    };
    DetalleAlmacenPage.prototype.readPhoto = function (file, index) {
        var _this = this;
        var reader = new FileReader();
        reader.onload = function (e) {
            _this.zone.run(function () {
                var path = e.target;
                _this.filefoto[index] = path.result;
            });
        };
        reader.readAsDataURL(file);
    };
    DetalleAlmacenPage.prototype.validarDatos = function () {
        this.campos = null;
        if (this.conteoE + this.conteoURL + this.conteoFile < 1) {
            var alert_1 = this.alertCtrl.create({
                title: 'Error',
                subTitle: this.nombre + " el registro debe tener minímo (1) de archivo",
                buttons: ['Aceptar']
            });
            alert_1.present();
        }
        if (this.nombreAlmacen == null) {
            this.campos = "Nombre, ";
        }
        if (this.nombreAlmacen == "") {
            this.campos = "Nombre, ";
        }
        if (this.selectedCategoria == null) {
            if (this.campos == null) {
                this.campos = "Categoría, ";
            }
            else {
                this.campos = this.campos + "Categoría, ";
            }
        }
        if (this.localAlmacen == null) {
            if (this.campos == null) {
                this.campos = "Local, ";
            }
            else {
                this.campos = this.campos + "Local, ";
            }
        }
        if (this.localAlmacen * 1 == 0) {
            if (this.campos == null) {
                this.campos = "Local1, ";
            }
            else {
                this.campos = this.campos + "Local, ";
            }
        }
        else {
            if (this.localAlmacen < 0) {
                var alert_2 = this.alertCtrl.create({
                    title: 'Error',
                    subTitle: "El local no es un número correcto",
                    buttons: ['Aceptar']
                });
                alert_2.present();
            }
        }
        if (this.horarioAlmacen == null) {
            if (this.campos == null) {
                this.campos = "Horario de Atención, ";
            }
            else {
                this.campos = this.campos + "Horario de Atención, ";
            }
        }
        if (this.horarioAlmacen == "") {
            if (this.campos == null) {
                this.campos = "Horario de Atención, ";
            }
            else {
                this.campos = this.campos + "Horario de Atención, ";
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
    DetalleAlmacenPage.prototype.modificar = function () {
        var _this = this;
        //this.selectedCategoria = this.almacen.categoria;
        console.log(this.selectedCategoria);
        if (this.validarDatos() == true) {
            var alert_4 = this.alertCtrl.create({
                title: 'Confirmación',
                subTitle: "¿" + this.nombre + " está seguro de Modificar éste Almacén?",
                buttons: [
                    {
                        text: 'Si',
                        role: 'si',
                        handler: function () {
                            console.log('si');
                            //aqui va el codigo de modificar
                            var storageRef = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.storage().ref();
                            var filenames = new Array(10);
                            var urlfotos = new Array(10);
                            for (var index = 0; index < _this.file.length; index++) {
                                filenames[index] = "" + _this.file[index].name;
                                urlfotos[index] = "" + filenames[index];
                                console.log(filenames[index]);
                                var imageRef = storageRef.child("img/almacenes/" + _this.nombreAlmacen + "/" + filenames[index]);
                                imageRef.put(_this.file[index]).then(function (snapshot) {
                                });
                            }
                            for (var index2 = 0; urlfotos[index2] != undefined; index2++) {
                                _this.fileS.splice(_this.fileS.length, 0, urlfotos[index2]);
                            }
                            //urlfotos.push.apply(urlfotos, this.fileS);
                            console.log(_this.fileS);
                            console.log(urlfotos);
                            _this.infoAlmacen$.update(_this.id, {
                                nombre: _this.nombreAlmacen,
                                descripcion: _this.descAlmacen,
                                horario: _this.horarioAlmacen,
                                categoria: _this.selectedCategoria,
                                local: _this.localAlmacen,
                                telefono: _this.telAlmacen,
                                web: _this.webAlmacen,
                                estado: _this.selectedEstado,
                                url: _this.fileS
                            }); //notificacion de accion realizada
                            var alert = _this.alertCtrl.create({
                                title: 'Notifiación',
                                subTitle: "Se ha modificado exitosamente el Almacén",
                                buttons: [{
                                        text: 'Aceptar',
                                        role: 'Aceptar',
                                        handler: function () {
                                            _this.navCtrl.setRoot("ListaAlmacenesPage");
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
    DetalleAlmacenPage.prototype.guardar = function () {
        var _this = this;
        if (this.validarDatos() == true) {
            var alert_5 = this.alertCtrl.create({
                title: 'Confirmación',
                subTitle: "¿" + this.nombre + " está seguro de Crear éste Almacén?",
                buttons: [
                    {
                        text: 'Si',
                        role: 'si',
                        handler: function () {
                            console.log('si');
                            //aqui va el codigo de crear
                            var storageRef = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.storage().ref();
                            var filenames = new Array(10);
                            var urlfotos = new Array(10);
                            console.log(_this.file);
                            for (var index = 0; index < _this.file.length; index++) {
                                filenames[index] = "" + _this.file[index].name;
                                urlfotos[index] = "" + filenames[index];
                                console.log(filenames[index]);
                                var imageRef = storageRef.child("img/almacenes/" + _this.nombreAlmacen + "/" + filenames[index]);
                                imageRef.put(_this.file[index]).then(function (snapshot) {
                                });
                            }
                            _this.infoAlmacen$.push({
                                nombre: _this.nombreAlmacen,
                                descripcion: _this.descAlmacen,
                                horario: _this.horarioAlmacen,
                                categoria: _this.selectedCategoria,
                                local: _this.localAlmacen,
                                telefono: _this.localAlmacen,
                                web: _this.webAlmacen,
                                estado: _this.selectedEstado,
                                url: urlfotos
                            });
                            //notificacion de accion realizada
                            var alert = _this.alertCtrl.create({
                                title: 'Notifiación',
                                subTitle: "Se ha creado exitosamente el Almacén",
                                buttons: [{
                                        text: 'Aceptar',
                                        role: 'Aceptar',
                                        handler: function () {
                                            _this.navCtrl.setRoot("ListaAlmacenesPage");
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
            alert_5.present();
        }
    };
    DetalleAlmacenPage.prototype.seleccionarFoto = function (e) {
        this.conteoE = parseInt(e.target.files.length);
        if (this.conteoE + this.conteoURL + this.conteoFile <= 10) {
            this.fileT = e.target.files;
        }
        else {
            var alert_6 = this.alertCtrl.create({
                title: 'Error',
                subTitle: this.nombre + " se ha excedido el número máximo (10) de archivos",
                buttons: ['Aceptar']
            });
            alert_6.present();
        }
    };
    DetalleAlmacenPage.prototype.agregar = function () {
        //this.file = this.file.concat(this.fileT);
        this.file.push.apply(this.file, this.fileT);
        this.fileT = [];
        console.log(this.file);
        for (var index = 0; index < this.file.length; index++) {
            this.readPhoto(this.file[index], index);
        }
        this.conteoFile = this.file.length;
    };
    DetalleAlmacenPage.prototype.cancelar = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Confirmación',
            subTitle: "¿" + this.nombre + " está seguro que desea salir sin Guardar?",
            buttons: [
                {
                    text: 'Si',
                    role: 'si',
                    handler: function () {
                        _this.nombreAlmacen = " ";
                        _this.descAlmacen = " ";
                        _this.localAlmacen = null;
                        _this.selectedCategoria = null;
                        _this.selectedEstado = null;
                        _this.navCtrl.setRoot("ListaAlmacenesPage");
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
        alert.present();
    };
    DetalleAlmacenPage.prototype.eliminarFotoStorage = function (nombre, idx) {
        //aqui va el evento de eliminar la foto del almacen
        var storageRef = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.storage().ref();
        //console.log("amt "+this.almacen.url);
        //this.url = this.file.name;1
        var imageRefBorrar = storageRef.child("img/almacenes/" + this.nombreAlmacen + "/" + nombre);
        this.almacen.url.splice(idx, 1);
        //console.log("desp" + this.almacen.url);
        //name = this.file.name;
        imageRefBorrar.delete().then(function (snapshot) {
        });
    };
    DetalleAlmacenPage.prototype.eliminarFotoFile = function (idx) {
        var newList = [];
        var newFileFoto = [];
        for (var i = 0; i < this.file.length; i++) {
            if (i !== idx) {
                newList.push(this.file[i]);
                newFileFoto.push(this.filefoto[i]);
            }
        }
        console.log(idx);
        //this.file.slice(idx,1);
        this.file = newList;
        this.filefoto = newFileFoto;
        console.log(newList);
    };
    return DetalleAlmacenPage;
}());
DetalleAlmacenPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-detalle-almacen',template:/*ion-inline-start:"C:\Users\yenifer\Documents\uniquindio\SOFT2\Centro\src\pages\detalle-almacen\detalle-almacen.html"*/'<!--\n  Generated template for the DetalleAlmacenPage page.\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    \n        <ion-navbar>\n            <button ion-button menuToggle>\n                <ion-icon name="menu"></ion-icon>\n              </button>\n          <ion-title class="titulo">Almacén</ion-title>\n        </ion-navbar>\n    \n    </ion-header>\n    \n    \n    <ion-content padding>\n    \n        <ion-row>\n            <ion-col>\n                <ion-item>\n                    <ion-label floating>*Nombre:</ion-label>\n                    <ion-input \n                      [(ngModel)]="nombreAlmacen" \n                      name="nombre" \n                      type="text" \n                      autocapitalize="off" \n                      required>\n                    </ion-input>\n                  </ion-item>\n            </ion-col> \n            <ion-col>\n                <ion-item>\n                    <ion-label floating>*Categoría:</ion-label>\n                    <ion-select [(ngModel)]="selectedCategoria">\n                \n                      <ion-option *ngFor="let categoria of infoCate$ | async"><h2>{{ categoria.nombre }}</h2></ion-option>\n                    </ion-select>\n                  </ion-item>\n            </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n                <ion-item>\n                        <ion-label floating>Descripción:</ion-label>\n                        <ion-textarea\n                          [(ngModel)]="descAlmacen" \n                          name="descripcion" \n                          type="textArea" \n                          autocapitalize="off" \n                          class="area"\n                          >\n                        </ion-textarea>\n                      </ion-item>\n                      <ion-item>\n                            <ion-label floating>*Horario de Atención:</ion-label>\n                            <ion-input \n                              [(ngModel)]="horarioAlmacen" \n                              name="horario" \n                              type="text" \n                              autocapitalize="off"\n                              required>\n                            </ion-input>\n                     </ion-item> \n                      <br>\n                      <div class="divFoto">\n                     <ion-label >Foto(s):</ion-label>\n                     <input type="file" (change)="seleccionarFoto($event)" accept=".jpg, .jpeg, .png" multiple/>\n                     <button class="agregar" (click)="agregar()"> Agregar</button>\n                     <div class="preview">\n                        <ion-list>                      \n                              <button ion-item *ngFor="let nombre of almacen.url; let idx = index " (click)="eliminarFotoStorage(nombre,idx)">\n                                  <img class="brochure-poster" src="{{almacen.img[idx]}}"/> \n                                  {{nombre}}                         </button>\n                              <button ion-item *ngFor="let f of file, let idx = index " (click)="eliminarFotoFile(idx)">\n                                  <img class="brochure-poster"  src="{{filefoto[idx]}}"/> \n                                  {{f.name}}                        </button>    \n                          </ion-list>\n                     </div>\n                    </div>   \n                   \n        </ion-col> \n        <ion-col>\n                <ion-item>\n                        <ion-label floating>*Local:</ion-label>\n                        <ion-input \n                          [(ngModel)]="localAlmacen" \n                          name="local" \n                          type="number" \n                          autocapitalize="off" \n                          required>\n                        </ion-input>\n                      </ion-item>\n                      <ion-item>\n                            <ion-label floating>Teléfono:</ion-label>\n                            <ion-input \n                              [(ngModel)]="telAlmacen" \n                              name="telefono" \n                              type="tel" \n                              autocapitalize="off" \n                            >\n                            </ion-input>\n                     </ion-item> \n                     <ion-item>\n                            <ion-label floating>Sitio Web:</ion-label>\n                            <ion-input \n                              name="web" \n                              type="text" \n                              autocapitalize="off">\n                            </ion-input>\n                     </ion-item>   \n                     <ion-item>\n                            <ion-label floating>*Estado:</ion-label>\n                            <ion-select [(ngModel)]="selectedEstado"\n                                        >\n                              <!--  se debe crear estados de los almacenes (activo e inactivo) en la base de datos -->\n                              <ion-option  ><h2>Activo</h2></ion-option>\n                              <ion-option ><h2>Inactivo</h2></ion-option>\n                            </ion-select>\n                          </ion-item> \n                  <div class="text-center">\n                              <button *ngIf="ocultar1" class="guardar" (click)="guardar()"><ion-icon name="checkmark"></ion-icon> Guardar</button>\n                              <button *ngIf="ocultar2" class="modificar" (click)="modificar()"><ion-icon name="checkmark"></ion-icon> Modificar</button>\n                              <button class="cancelar" (click)="cancelar()"><ion-icon name="close"></ion-icon> Cancelar</button>               \n                              \n                  </div>     \n        </ion-col> \n        </ion-row>\n     \n    \n    </ion-content>'/*ion-inline-end:"C:\Users\yenifer\Documents\uniquindio\SOFT2\Centro\src\pages\detalle-almacen\detalle-almacen.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* NgZone */],
        __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], DetalleAlmacenPage);

//# sourceMappingURL=detalle-almacen.js.map

/***/ })

});
//# sourceMappingURL=21.js.map