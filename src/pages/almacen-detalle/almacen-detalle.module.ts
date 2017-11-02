import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AlmacenDetallePage } from './almacen-detalle';

@NgModule({
  declarations: [
    AlmacenDetallePage,
  ],
  imports: [
    IonicPageModule.forChild(AlmacenDetallePage),
  ],
})
export class AlmacenDetallePageModule {}
