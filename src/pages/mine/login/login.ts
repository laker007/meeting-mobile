import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IonicPage, ViewController } from 'ionic-angular';
import { HttpService } from '../../../providers/http.service';
@IonicPage()
@Component({
    selector: 'page-login',
    templateUrl: 'login.html'
})

export class LoginPage {
    loginForm;

    constructor(
        public viewCtrl: ViewController,
        public http: HttpService
    ) {
        this.loginForm = new FormGroup({
            username: new FormControl("", Validators.required),
            password: new FormControl("", Validators.required)
        })
    }

    dismiss() {
        this.viewCtrl.dismiss();
    }

    login() {
        let user;
        user = {
            username: this.loginForm.value.username,
            password: this.loginForm.value.password
        }
        console.log(this.loginForm.value.username);
        console.log(this.loginForm.value.password);
        this.http.post('http://localhost:3001/api/user', user).subscribe(
            data => {
                console.log(data);
            }
        )
    }
}
