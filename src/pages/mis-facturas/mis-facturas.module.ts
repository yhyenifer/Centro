import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MisFacturasPage } from './mis-facturas';

@NgModule({
  declarations: [
    MisFacturasPage,
  ],
  imports: [
    IonicPageModule.forChild(MisFacturasPage),
  ],
})
export class MisFacturasPageModule {}
