import { Component, ViewChild } from '@angular/core';
import { NavController, IonicPage, ModalController } from 'ionic-angular';
import { Calendar } from '../../components/calendar/calendar';
import { HttpService } from '../../providers/http.service';
@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild(Calendar) private calendar: Calendar;

  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    public http: HttpService,
  ) {

  }

  today() {
    this.calendar.today();
  }

  reserve() {
    // Todo: 检查登录状态，未登录弹出登录模态框
    let modal = this.modalCtrl.create('ReservePage');
    modal.present();
  }

  onDaySelect(day) {
    console.log(day);
    this.http.get('http://localhost:3001/api/user').subscribe(
      data => {
        console.log(data);
      }
    )
  }
}
