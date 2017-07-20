import { Component, ViewChild } from '@angular/core';
import { NavController, IonicPage, ModalController } from 'ionic-angular';
import { Calendar } from '../../components/calendar/calendar';
@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild(Calendar) private calendar: Calendar;

  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController
  ) {

  }

  today(){
    this.calendar.today();
  }
}
