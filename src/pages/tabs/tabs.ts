import { Component } from '@angular/core';
import * as moment from 'moment';
import { IonicPage } from 'ionic-angular';
@IonicPage()
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = 'HomePage';
  tab2Root = 'NoticePage';
  tab3Root = 'MinePage';

  constructor() {
    let now = moment().format('LLLL');
    console.log(now);
  }
}
