import { Component } from '@angular/core';
import * as moment from 'moment';

@Component({
    selector: 'ion-calendar',
    templateUrl: 'calendar.html'
})

export class Calendar {

    weekHead: string[] = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];
    items: string[] = ['1', '2', '3', '4', '5', '6', '7'];

    constructor() {

    }


    back() {
        console.log('back');
    }

    forward() {
        console.log('forward');
    }
}