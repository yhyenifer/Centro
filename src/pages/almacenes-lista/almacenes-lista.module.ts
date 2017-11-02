import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AlmacenesListaPage } from './almacenes-lista';

@NgModule({
  declarations: [
    AlmacenesListaPage,
  ],
  imports: [
    IonicPageModule.forChild(AlmacenesListaPage),
  ],
})
export class AlmacenesListaPageModule {}
