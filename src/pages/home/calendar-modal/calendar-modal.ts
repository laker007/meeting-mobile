import { Component } from '@angular/core';
import { IonicPage, ViewController } from 'ionic-angular';
@IonicPage()
@Component({
    selector: 'modal-calendar',
    templateUrl: 'calendar-modal.html'
})

export class CalendarModal {
    constructor(
        public viewCtrl: ViewController
    ) {

    }

    dismiss() {
        // using the injected ViewController this page
        // can "dismiss" itself and pass back data
        this.viewCtrl.dismiss();
    }
}