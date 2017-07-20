import { Component } from '@angular/core';
import { IonicPage, ViewController } from 'ionic-angular';
@IonicPage()
@Component({
    selector: 'page-reserve',
    templateUrl: 'reserve.html'
})

export class ReservePage {
    constructor(
        public viewCtrl: ViewController
    ) { }
    
    dismiss() {
        this.viewCtrl.dismiss();
    }
}