import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IonicPage, ViewController } from 'ionic-angular';
import { HttpService } from '../../../providers/http.service';
@IonicPage()
@Component({
    selector: 'page-signup',
    templateUrl: 'signup.html'
})

export class SignupPage {

    signupForm;

    constructor(
        public viewCtrl: ViewController,
        public http: HttpService,
    ) {
        this.signupForm = new FormGroup({
            username: new FormControl("", Validators.required),
            password: new FormControl("", Validators.required)
        })
    }
    dismiss() {
        this.viewCtrl.dismiss();
    }

    signup() {
        let user;
        user = {
            username: this.signupForm.value.username,
            password: this.signupForm.value.password
        }
        console.log(this.signupForm.value.username);
        console.log(this.signupForm.value.password);
        this.http.post('http://localhost:3001/api/user', user).subscribe(
            data => {
                console.log(data);
            }
        )
    }
}