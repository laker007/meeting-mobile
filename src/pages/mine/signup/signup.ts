import { Component } from '@angular/core';
import { IonicPage, ViewController } from 'ionic-angular';
@IonicPage()
@Component({
    selector: 'page-signup',
    templateUrl: 'signup.html'
})

export class SignupPage {
    constructor(
        public viewCtrl: ViewController
    ) { }
    dismiss() {
        this.viewCtrl.dismiss();
    }
}