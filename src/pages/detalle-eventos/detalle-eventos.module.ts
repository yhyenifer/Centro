import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetalleEventosPage } from './detalle-eventos';

@NgModule({
  declarations: [
    DetalleEventosPage,
  ],
  imports: [
    IonicPageModule.forChild(DetalleEventosPage),
  ],
})
export class DetalleEventosPageModule {}
