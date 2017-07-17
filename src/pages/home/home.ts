import { Component } from '@angular/core';
import { NavController, IonicPage, ModalController } from 'ionic-angular';
// import { CalendarModal } from './calendar-modal/calendar-modal';
@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController
  ) {

  }

  goCalendar() {
    let calendarModal = this.modalCtrl.create('CalendarModal');
    calendarModal.present();
  }
}
