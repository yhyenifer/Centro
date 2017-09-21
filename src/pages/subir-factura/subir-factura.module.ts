import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SubirFacturaPage } from './subir-factura';

@NgModule({
  declarations: [
    SubirFacturaPage,
  ],
  imports: [
    IonicPageModule.forChild(SubirFacturaPage),
  ],
})
export class SubirFacturaPageModule {}
