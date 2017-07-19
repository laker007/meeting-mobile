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

    displayYear: number;

    displayMonth: number;

    dateArray: Array<dateObj> = [];

    weekHead: string[] = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];
    items: string[] = ['1', '2', '3', '4', '5', '6', '7'];

    constructor() {
        this.currentYear = moment().year();
        this.currentMonth = moment().month();
        this.currentDate = moment().date();
        this.currentDay = moment().day();

        this.displayYear = this.currentYear;
        this.displayMonth = this.currentMonth;
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
            year: this.displayYear,
            month: this.currentMonth - 1,
        }).daysInMonth());
        // 本月 1 号星期几
        console.log(moment({
            year: this.displayYear,
            month: this.displayMonth,
            date: 1,
        }).day());
        // 本月最后一天星期几
        console.log(moment({
            year: this.displayYear,
            month: this.displayMonth,
            date: moment({
                year: this.displayYear,
                month: this.displayMonth,
            }).daysInMonth(),
        }).day());

        this.createMonth(this.displayYear, 2)
    }

    createMonth(year: number, month: number) {
        //当前选择月份的 1 号星期几,决定了上个月取出几天出来。星期日不用显示上个月，星期一显示上个月一天，星期二显示上个月两天
        let firstDay = moment({ year: year, month: month, date: 1 }).day();
        let preMonthDays = moment({ year: year, month: month - 1 }).daysInMonth();
        let monthDays = moment({ year: year, month: month }).daysInMonth();

        // 将上个月的最后几天添加入数组
        if (firstDay !== 7) { //星期日不用显示上个月
            let lastMonthStart = preMonthDays - firstDay + 1;// 从上个月几号开始
            for (let i = 0; i < firstDay; i++) {
                this.dateArray.push({
                    date: lastMonthStart + i,
                    isThisMonth: false,
                    isToday: false,
                    isSelected: false,
                })
            }
        }

        // 将本月天数添加到数组中
        for (let i = 0; i < monthDays; i++) {
            this.dateArray.push({
                date: i + 1,
                isThisMonth: true,
                isToday: false,
                isSelected: false,
            })
        }

        // 将下个月天数添加到数组中
        if (this.dateArray.length % 7 !== 0) {
            let nextMonthAdd = 7 - this.dateArray.length % 7
            for (let i = 0; i < nextMonthAdd; i++) {
                this.dateArray.push({
                    date: i + 1,
                    isThisMonth: false,
                    isToday: false,
                    isSelected: false,
                })
            }
        }

        console.log("createMonth: " + firstDay);
        console.log(this.dateArray);

        // 至此所有日期数据都被添加入数组中
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

// 日历的每个格子
interface dateObj {
    date: number,//几号
    isThisMonth: boolean,//是否为当前选择的月份
    isToday: boolean,
    isSelected: boolean,
}