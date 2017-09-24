import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FacturasAprobadasPage } from './facturas-aprobadas';

@NgModule({
  declarations: [
    FacturasAprobadasPage,
  ],
  imports: [
    IonicPageModule.forChild(FacturasAprobadasPage),
  ],
})
export class FacturasAprobadasPageModule {}
