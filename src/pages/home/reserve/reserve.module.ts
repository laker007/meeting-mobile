import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReservePage } from './reserve';
@NgModule({
  declarations: [ReservePage],
  imports: [
    IonicPageModule.forChild(ReservePage),
  ],
  exports: [ReservePage]
})
export class ReservePageModule { }