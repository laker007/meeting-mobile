import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CalendarModal } from './calendar-modal';
@NgModule({
  declarations: [
    CalendarModal,
  ],
  imports: [
    IonicPageModule.forChild(CalendarModal),
  ],
  exports:[
    CalendarModal
  ]
})
export class CalendarModalModule { }