import { Component } from '@angular/core';
import * as moment from 'moment';

@Component({
    selector: 'ion-calendar',
    templateUrl: 'calendar.html'
})

export class Calendar {

    currentYear: number;

    currentMonth: number;

    currentDate: number;

    currentDay: number;

    weekHead: string[] = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];
    items: string[] = ['1', '2', '3', '4', '5', '6', '7'];

    constructor() {
        this.currentYear = moment().year();
        this.currentMonth = moment().month();
        this.currentDate = moment().date();
        this.currentDay = moment().day();
    }

    ngOnChanges() { console.log("ngOnChanges") }

    ngOnInit() {
        console.log("ngOnInit");
        console.log(this.currentYear);
        console.log(this.currentMonth);
        console.log(this.currentDate);
        console.log(this.currentDay);
        // 上个月天数
        console.log(moment({
            year: this.currentYear,
            month: this.currentMonth - 1,
        }).daysInMonth());
        // 本月 1 号星期几
        console.log(moment({
            year: this.currentYear,
            month: this.currentMonth,
            date: 1,
        }).day());
        // 本月最后一天星期几
        console.log(moment({
            year: this.currentYear,
            month: this.currentMonth,
            date: moment({
                year: this.currentYear,
                month: this.currentMonth,
            }).daysInMonth(),
        }).day());

        this.createMonth(this.currentYear, this.currentMonth)
    }

    createMonth(year: number, month: number) {
        

    }

    ngDoCheck() { console.log("ngDoCheck") }

    ngAfterContentInit() { console.log("ngAfterContentInit") }

    ngAfterContentChecked() { console.log("ngAfterContentChecked") }

    ngAfterViewInit() { console.log("ngAfterViewInit") }

    ngAfterViewChecked() { console.log("ngAfterViewChecked") }

    ngOnDestroy() { console.log("ngOnDestroy") }

    back() {
        console.log('back');
    }

    forward() {
        console.log('forward');
    }


}