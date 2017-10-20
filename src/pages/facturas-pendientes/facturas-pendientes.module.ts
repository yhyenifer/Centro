import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FacturasPendientesPage } from './facturas-pendientes';

@NgModule({
  declarations: [
    FacturasPendientesPage,
  ],
  imports: [
    IonicPageModule.forChild(FacturasPendientesPage),
  ],
})
export class FacturasPendientesPageModule {}
