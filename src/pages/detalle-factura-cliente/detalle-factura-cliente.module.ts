import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetalleFacturaClientePage } from './detalle-factura-cliente';

@NgModule({
  declarations: [
    DetalleFacturaClientePage,
  ],
  imports: [
    IonicPageModule.forChild(DetalleFacturaClientePage),
  ],
})
export class DetalleFacturaClientePageModule {}
