import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ValidarFacturasPage } from './validar-facturas';

@NgModule({
  declarations: [
    ValidarFacturasPage,
  ],
  imports: [
    IonicPageModule.forChild(ValidarFacturasPage),
  ],
})
export class ValidarFacturasPageModule {}
