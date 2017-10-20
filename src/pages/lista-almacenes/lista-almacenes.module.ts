import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListaAlmacenesPage } from './lista-almacenes';

@NgModule({
  declarations: [
    ListaAlmacenesPage,
  ],
  imports: [
    IonicPageModule.forChild(ListaAlmacenesPage),
  ],
})
export class ListaAlmacenesPageModule {}
