import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetalleClientesPage } from './detalle-clientes';

@NgModule({
  declarations: [
    DetalleClientesPage,
  ],
  imports: [
    IonicPageModule.forChild(DetalleClientesPage),
  ],
})
export class DetalleClientesPageModule {}
