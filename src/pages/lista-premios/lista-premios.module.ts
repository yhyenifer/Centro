import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListaPremiosPage } from './lista-premios';

@NgModule({
  declarations: [
    ListaPremiosPage,
  ],
  imports: [
    IonicPageModule.forChild(ListaPremiosPage),
  ],
})
export class ListaPremiosPageModule {}
