import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetalleAlmacenPage } from './detalle-almacen';

@NgModule({
  declarations: [
    DetalleAlmacenPage,
  ],
  imports: [
    IonicPageModule.forChild(DetalleAlmacenPage),
  ],
})
export class DetalleAlmacenPageModule {}