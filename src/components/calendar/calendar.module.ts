import { NgModule } from '@angular/core';
import { IonicPageModule, IonicModule } from 'ionic-angular';
import { Calendar } from './calendar';
@NgModule({
  declarations: [
    Calendar,
  ],
  imports: [
    IonicModule,
  ],
  exports:[
    Calendar
  ]
})
export class CalendarModule { }