import { Component } from '@angular/core';
import { IonicPage, ModalController } from 'ionic-angular';
@IonicPage()
@Component({
    selector: 'page-mine',
    templateUrl: 'mine.html'
})

export class MinePage {
    constructor(
        public modalCtrl: ModalController,
    ) { }

    login() {
        let login = this.modalCtrl.create('LoginPage');
        login.present();
    }

    signup() {
        let signup = this.modalCtrl.create('SignupPage');
        signup.present();
    }
}