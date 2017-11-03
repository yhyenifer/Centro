webpackJsonp([19],{

/***/ 464:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetalleFacturaClientePageModule", function() { return DetalleFacturaClientePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__detalle_factura_cliente__ = __webpack_require__(489);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DetalleFacturaClientePageModule = (function () {
    function DetalleFacturaClientePageModule() {
    }
    return DetalleFacturaClientePageModule;
}());
DetalleFacturaClientePageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__detalle_factura_cliente__["a" /* DetalleFacturaClientePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__detalle_factura_cliente__["a" /* DetalleFacturaClientePage */]),
        ],
    })
], DetalleFacturaClientePageModule);

//# sourceMappingURL=detalle-factura-cliente.module.js.map

/***/ }),

/***/ 489:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetalleFacturaClientePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2_database__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_firebase_service_firebase_service__ = __webpack_require__(298);
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
 * Generated class for the DetalleFacturaClientePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DetalleFacturaClientePage = (function () {
    function DetalleFacturaClientePage(navCtrl, navParams, database, firebaseService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.database = database;
        this.firebaseService = firebaseService;
        this.valor = 0;
        this.puntos = 0;
        var storageRef = __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.storage().ref();
        this.infoFactura$ = this.database.list('factura');
        this.factura = navParams.get('factura');
        this.id = navParams.get('id');
        this.estado = this.factura.estado;
        this.url = this.factura.url;
        var imageRef = storageRef.child(this.url);
        imageRef.getDownloadURL().then(function (url) {
            return _this.base64Image = url;
        });
        this.database.list('CentroComercial').subscribe(function (_data) {
            _this.politica = _data;
            _this.factor = _this.politica[0].factorpuntos;
        });
        if (this.estado == "Aprobada") {
            this.valor = this.factura.valor;
            this.puntos = Number(Math.floor(this.valor / this.factor));
        }
        else {
            this.valor = 0;
            this.puntos = 0;
        }
    }
    DetalleFacturaClientePage.prototype.ionViewDidLoad = function () {
    };
    return DetalleFacturaClientePage;
}());
<<<<<<< HEAD
DetalleFacturaClientePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
        selector: 'page-detalle-factura-cliente',template:/*ion-inline-start:"C:\Users\yenifer\Documents\uniquindio\SOFT2\Centro\src\pages\detalle-factura-cliente\detalle-factura-cliente.html"*/'<!--\n\n  Generated template for the DetalleFacturaClientePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>\n\n      Detalle Factura\n\n    </ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n    <ion-card>\n\n        <!-- <img src="https://firebasestorage.googleapis.com/v0/b/tiendq-3d47a.appspot.com/o/img%2Fadmin%2FavatarF.png?alt=media&token=fe0bacb2-f133-452b-9b29-7d16403b2af2"> -->\n\n        <img class="imagenFactura" [src]="base64Image">\n\n        \n\n        <!-- <img [src]="fotoFactura"/> -->\n\n        <ion-card-content>\n\n        <p><b>$ {{valor}}</b></p>\n\n        </ion-card-content>\n\n        <ion-card-content>\n\n            <p><b>Puntos:</b> {{puntos}}</p>\n\n        </ion-card-content>\n\n        <ion-card-content>\n\n            <p><b>Estado:</b> {{estado}}</p>\n\n        </ion-card-content>\n\n      </ion-card>\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\yenifer\Documents\uniquindio\SOFT2\Centro\src\pages\detalle-factura-cliente\detalle-factura-cliente.html"*/,
=======
DetalleEventosPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-detalle-eventos',template:/*ion-inline-start:"C:\Users\MauricioAndres\proyectos\Centro\src\pages\detalle-eventos\detalle-eventos.html"*/'<!--\n\n  Generated template for the DetalleEventosPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n          </button>\n\n      <ion-title class="titulo">Evento</ion-title>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    \n\n        <ion-row>\n\n            <ion-col>\n\n                <ion-item>\n\n                    <ion-label floating>*Nombre:</ion-label>\n\n                    <ion-input \n\n                      [(ngModel)]="nombreEvento" \n\n                      name="nombre" \n\n                      type="text" \n\n                      autocapitalize="off" \n\n                      required>\n\n                    </ion-input>\n\n                  </ion-item>\n\n            </ion-col> \n\n            <ion-col>\n\n                <ion-item class="label">\n\n                    <ion-label>*Fecha:</ion-label>\n\n                    <ion-datetime displayFormat="MMM DD YYYY" [(ngModel)]="fechaEvento"></ion-datetime>                  </ion-item>\n\n            </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n          <ion-col>\n\n                <ion-item>\n\n                        <ion-label floating>*Descripción:</ion-label>\n\n                        <ion-textarea\n\n                          [(ngModel)]="descEvento" \n\n                          name="descripcion" \n\n                          type="textArea" \n\n                          autocapitalize="off" \n\n                          class="area"\n\n                          >\n\n                        </ion-textarea>\n\n                      </ion-item>\n\n                   \n\n                      <br>\n\n                      <div class="divFoto">\n\n                     <ion-label >Foto: </ion-label>\n\n                     <input type="file" (change)="seleccionarFoto($event)"  accept=".jpg, .jpeg, .png" >\n\n                     <div class="preview">\n\n                       <img class="imgPremio" [src]="eventoImagen">\n\n                     </div>\n\n                    </div>   \n\n                   \n\n        </ion-col> \n\n        <ion-col>\n\n            <ion-item>\n\n                <ion-label>*Hora:</ion-label>\n\n                <ion-datetime displayFormat="h:mm A" pickerFormat="h mm A" [(ngModel)]="horaEvento"></ion-datetime>\n\n              </ion-item>\n\n                      \n\n                     \n\n                     <ion-item>\n\n                            <ion-label floating>*Estado:</ion-label>\n\n                            <ion-select [(ngModel)]="selectedEstado">\n\n                              <ion-option ><h2>Activo</h2></ion-option>\n\n                              <ion-option ><h2>Inactivo</h2></ion-option>\n\n                            </ion-select>\n\n                    </ion-item> \n\n                    <div class="text-center">\n\n                            <button *ngIf="ocultar1" class="guardar" (click)="guardar()"><ion-icon name="checkmark"></ion-icon> Guardar</button>\n\n                            <button *ngIf="ocultar2" class="modificar" (click)="modificar()"><ion-icon name="checkmark"></ion-icon> Modificar</button>\n\n                            <button class="cancelar" (click)="cancelar()"><ion-icon name="close"></ion-icon> Cancelar</button>               \n\n                            \n\n                    </div>\n\n        </ion-col> \n\n        </ion-row>\n\n  \n\n    \n\n    </ion-content>\n\n'/*ion-inline-end:"C:\Users\MauricioAndres\proyectos\Centro\src\pages\detalle-eventos\detalle-eventos.html"*/,
>>>>>>> 456daf160c0c69fa8892de8dbea8fd6db57e6557
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_0_angularfire2_database__["a" /* AngularFireDatabase */],
        __WEBPACK_IMPORTED_MODULE_3__providers_firebase_service_firebase_service__["a" /* FirebaseServicePrivider */]])
], DetalleFacturaClientePage);

//# sourceMappingURL=detalle-factura-cliente.js.map

/***/ })

});
//# sourceMappingURL=19.js.map