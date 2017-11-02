webpackJsonp([19],{

/***/ 459:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetalleClientesPageModule", function() { return DetalleClientesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__detalle_clientes__ = __webpack_require__(480);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DetalleClientesPageModule = (function () {
    function DetalleClientesPageModule() {
    }
    return DetalleClientesPageModule;
}());
DetalleClientesPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__detalle_clientes__["a" /* DetalleClientesPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__detalle_clientes__["a" /* DetalleClientesPage */]),
        ],
    })
], DetalleClientesPageModule);

//# sourceMappingURL=detalle-clientes.module.js.map

/***/ }),

/***/ 480:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetalleClientesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(155);
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
 * Generated class for the DetalleClientesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DetalleClientesPage = (function () {
    function DetalleClientesPage(navCtrl, navParams, menu, storage, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menu = menu;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.menu1Active();
    }
    DetalleClientesPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.storage.get('nombre').then(function (data) {
            _this.nombre = data;
        });
    };
    DetalleClientesPage.prototype.menu1Active = function () {
        this.menu.enable(true, 'menu2');
        this.menu.enable(false, 'menu1');
    };
<<<<<<< HEAD
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
=======
    DetalleClientesPage.prototype.validarDatos = function () {
>>>>>>> ec8145499cc36a22e34ed55a1b11a22aeed9beb2
        if (this.selectedEstado == null) {
            this.campos = "Estado, ";
        }
        if (this.campos != null) {
            var alert_1 = this.alertCtrl.create({
                title: 'Error',
                subTitle: "Verifica los datos ingresados, el campo " + this.campos + "es requerido",
                buttons: ['Aceptar']
            });
            alert_1.present();
            return false;
        }
        else {
            return true;
        }
    };
    DetalleClientesPage.prototype.modificar = function () {
        var _this = this;
        if (this.validarDatos() == true) {
            var alert_2 = this.alertCtrl.create({
                title: 'Confirmación',
                subTitle: "¿" + this.nombre + " está seguro de Modificar éste Premio?",
                buttons: [
                    {
                        text: 'Si',
                        role: 'si',
                        handler: function () {
                            console.log('si');
                            //aqui va el codigo de modificar
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
            alert_2.present();
        }
<<<<<<< HEAD
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
=======
>>>>>>> ec8145499cc36a22e34ed55a1b11a22aeed9beb2
    };
    return DetalleClientesPage;
}());
DetalleClientesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
<<<<<<< HEAD
        selector: 'page-detalle-almacen',template:/*ion-inline-start:"C:\Users\MauricioAndres\proyectos\Centro\src\pages\detalle-almacen\detalle-almacen.html"*/'<!--\n\n  Generated template for the DetalleAlmacenPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n          </button>\n\n      <ion-title class="titulo">Almacén</ion-title>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n    <ion-row>\n\n        <ion-col>\n\n            <ion-item>\n\n                <ion-label floating>*Nombre:</ion-label>\n\n                <ion-input \n\n                  [(ngModel)]="nombreAlmacen" \n\n                  name="nombre" \n\n                  type="text" \n\n                  autocapitalize="off" \n\n                  required>\n\n                </ion-input>\n\n              </ion-item>\n\n        </ion-col> \n\n        <ion-col>\n\n            <ion-item>\n\n                <ion-label floating>*Categoría:</ion-label>\n\n                <ion-select [(ngModel)]="selectedCategoria">\n\n            \n\n                  <ion-option *ngFor="let categoria of infoCate$ | async"><h2>{{ categoria.nombre }}</h2></ion-option>\n\n                </ion-select>\n\n              </ion-item>\n\n        </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col>\n\n            <ion-item>\n\n                    <ion-label floating>Descripción:</ion-label>\n\n                    <ion-textarea\n\n                      [(ngModel)]="descAlmacen" \n\n                      name="descripcion" \n\n                      type="textArea" \n\n                      autocapitalize="off" \n\n                      class="area"\n\n                      >\n\n                    </ion-textarea>\n\n                  </ion-item>\n\n                  <ion-item>\n\n                        <ion-label floating>*Horario de Atención:</ion-label>\n\n                        <ion-input \n\n                          [(ngModel)]="horarioAlmacen" \n\n                          name="horario" \n\n                          type="text" \n\n                          autocapitalize="off"\n\n                          required>\n\n                        </ion-input>\n\n                 </ion-item> \n\n                  <br>\n\n                  <div class="divFoto">\n\n                 <ion-label >Foto(s):</ion-label>\n\n                 <input type="file" (change)="seleccionarFoto($event)" accept=".jpg, .jpeg, .png" multiple/>\n\n                 <button class="agregar" (click)="agregar()"> Agregar</button>\n\n                 <div class="preview">\n\n                    <ion-list>                      \n\n                          <button ion-item *ngFor="let nombre of almacen.url; let idx = index " (click)="eliminarFotoStorage(nombre,idx)">\n\n                              <img class="brochure-poster" src="{{almacen.img[idx]}}"/> \n\n                              {{nombre}}                         </button>\n\n                          <button ion-item *ngFor="let f of file, let idx = index " (click)="eliminarFotoFile(idx)">\n\n                              <img class="brochure-poster"  src="{{filefoto[idx]}}"/> \n\n                              {{f.name}}                        </button>    \n\n                      </ion-list>\n\n                 </div>\n\n                </div>   \n\n               \n\n    </ion-col> \n\n    <ion-col>\n\n            <ion-item>\n\n                    <ion-label floating>*Local:</ion-label>\n\n                    <ion-input \n\n                      [(ngModel)]="localAlmacen" \n\n                      name="local" \n\n                      type="number" \n\n                      autocapitalize="off" \n\n                      required>\n\n                    </ion-input>\n\n                  </ion-item>\n\n                  <ion-item>\n\n                        <ion-label floating>Teléfono:</ion-label>\n\n                        <ion-input \n\n                          [(ngModel)]="telAlmacen" \n\n                          name="telefono" \n\n                          type="tel" \n\n                          autocapitalize="off" \n\n                        >\n\n                        </ion-input>\n\n                 </ion-item> \n\n                 <ion-item>\n\n                        <ion-label floating>Sitio Web:</ion-label>\n\n                        <ion-input \n\n                          name="web" \n\n                          type="text" \n\n                          autocapitalize="off">\n\n                        </ion-input>\n\n                 </ion-item>   \n\n                 <ion-item>\n\n                        <ion-label floating>*Estado:</ion-label>\n\n                        <ion-select [(ngModel)]="selectedEstado"\n\n                                    >\n\n                          <!--  se debe crear estados de los almacenes (activo e inactivo) en la base de datos -->\n\n                          <ion-option  ><h2>Activo</h2></ion-option>\n\n                          <ion-option ><h2>Inactivo</h2></ion-option>\n\n                        </ion-select>\n\n                      </ion-item> \n\n              <div class="text-center">\n\n                          <button *ngIf="ocultar1" class="guardar" (click)="guardar()"><ion-icon name="checkmark"></ion-icon> Guardar</button>\n\n                          <button *ngIf="ocultar2" class="modificar" (click)="modificar()"><ion-icon name="checkmark"></ion-icon> Modificar</button>\n\n                          <button class="cancelar" (click)="cancelar()"><ion-icon name="close"></ion-icon> Cancelar</button>               \n\n                          \n\n              </div>     \n\n    </ion-col> \n\n    </ion-row>\n\n \n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\MauricioAndres\proyectos\Centro\src\pages\detalle-almacen\detalle-almacen.html"*/,
=======
        selector: 'page-detalle-clientes',template:/*ion-inline-start:"C:\Users\yenifer\Documents\uniquindio\SOFT2\Centro\src\pages\detalle-clientes\detalle-clientes.html"*/'\n\n<!--\n\n  Generated template for the DetalleClientesPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n      <button ion-button menuToggle>\n\n          <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        \n\n    <ion-title class="titulo">Cliente</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  \n\n      <ion-row>\n\n          <ion-col>\n\n              <ion-item>\n\n                  <ion-label floating>Nombres:</ion-label>\n\n                  <ion-input disabled="true"\n\n                    [(ngModel)]="nombresCliente" \n\n                    name="nombre" \n\n                    type="text" \n\n                    autocapitalize="off" \n\n                    required>\n\n                  </ion-input>\n\n                </ion-item>\n\n          </ion-col> \n\n          <ion-col>\n\n              <ion-item>\n\n                  <ion-label floating>Correo Electrónico:</ion-label>\n\n                  <ion-input disabled="true"\n\n                    [(ngModel)]="correoCliente" \n\n                    name="correo" \n\n                    type="number" \n\n                    autocapitalize="off" \n\n                    required>\n\n                  </ion-input>\n\n                </ion-item>\n\n          </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col>\n\n  \n\n              <ion-item>\n\n                      <ion-label floating>Apellidos:</ion-label>\n\n                      <ion-input disabled="true"\n\n                        [(ngModel)]="apellidosCliente" \n\n                        name="apellidos" \n\n                        type="text"  \n\n                        autocapitalize="off" \n\n                        \n\n                        >\n\n                      </ion-input>\n\n              </ion-item>\n\n              <ion-item>\n\n                <ion-label floating>Dirección:</ion-label>\n\n                <ion-input disabled="true"\n\n                  [(ngModel)]="direccionCliente" \n\n                  name="direccion" \n\n                  type="text"  \n\n                  autocapitalize="off">\n\n                </ion-input>\n\n             </ion-item>\n\n             <ion-item>\n\n              <ion-label floating>Teléfono:</ion-label>\n\n              <ion-input\n\n                [(ngModel)]="telefonoCliente" \n\n                name="telefono" \n\n                type="text"  \n\n                autocapitalize="off">\n\n              </ion-input>\n\n           </ion-item>\n\n                    <br>\n\n                    <div class="divFoto">\n\n                   <ion-label >Foto: </ion-label>\n\n                   <input type="file" disabled="true" (change)="seleccionarFoto($event)" accept=".jpg, .jpeg, .png" >\n\n                   <div class="preview">\n\n                     <img class="imgPremio" [src]="img">\n\n                   </div>\n\n                  </div>   \n\n                 \n\n      </ion-col> \n\n      <ion-col>\n\n              <ion-item>\n\n                      <ion-label floating>Puntos:</ion-label>\n\n                      <ion-input disabled="true"\n\n                        [(ngModel)]="puntos" \n\n                        name="puntos" \n\n                        type="number" \n\n                        autocapitalize="off" \n\n                        required>\n\n                      </ion-input>\n\n              </ion-item>\n\n                    \n\n                   \n\n                   <ion-item>\n\n                          <ion-label floating>*Estado:</ion-label>\n\n                          <ion-select [(ngModel)]="selectedEstado"\n\n                                      >\n\n                            <!--  se debe crear estados de los almacenes (activo e inactivo) en la base de datos -->\n\n                            <ion-option ><h2>Activo</h2></ion-option>\n\n                            <ion-option ><h2>Inactivo</h2></ion-option>\n\n                          </ion-select>\n\n                  </ion-item> \n\n                  <div class="text-center">\n\n                      <button  class="modificar" (click)="modificar()"><ion-icon name="checkmark"></ion-icon> Modificar</button>\n\n                      <button class="cancelar" (click)="cancelar()"><ion-icon name="close"></ion-icon> Cancelar</button>               \n\n                      \n\n                  </div>\n\n      </ion-col> \n\n      </ion-row>\n\n     \n\n  \n\n  </ion-content>\n\n  \n\n'/*ion-inline-end:"C:\Users\yenifer\Documents\uniquindio\SOFT2\Centro\src\pages\detalle-clientes\detalle-clientes.html"*/,
>>>>>>> ec8145499cc36a22e34ed55a1b11a22aeed9beb2
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], DetalleClientesPage);

//# sourceMappingURL=detalle-clientes.js.map

/***/ })

});
//# sourceMappingURL=19.js.map