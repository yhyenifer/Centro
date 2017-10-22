import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetallePremiosPage } from './detalle-premios';

@NgModule({
  declarations: [
    DetallePremiosPage,
  ],
  imports: [
    IonicPageModule.forChild(DetallePremiosPage),
  ],
})
export class DetallePremiosPageModule {}
