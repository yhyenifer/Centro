import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FacturasDenegadasPage } from './facturas-denegadas';

@NgModule({
  declarations: [
    FacturasDenegadasPage,
  ],
  imports: [
    IonicPageModule.forChild(FacturasDenegadasPage),
  ],
})
export class FacturasDenegadasPageModule {}
