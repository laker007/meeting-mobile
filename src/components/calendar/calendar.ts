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

    dateArray: Array<dateObj> = []; // 本月展示的所有天

    weekArray = [];// 保存日历每行的数组

    weekHead: string[] = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];

    constructor() {
        this.currentYear = moment().year();
        this.currentMonth = moment().month();
        this.currentDate = moment().date();
        this.currentDay = moment().day();

        this.displayYear = this.currentYear;
        this.displayMonth = this.currentMonth;
    }

    ngOnInit() {
        this.createMonth(this.displayYear, this.displayMonth)
    }

    createMonth(year: number, month: number) {
        this.dateArray = [];// 清除上个月的数据
        this.weekArray = [];// 
        let firstDay;//当前选择月份的 1 号星期几,决定了上个月取出几天出来。星期日不用显示上个月，星期一显示上个月一天，星期二显示上个月两天
        let preMonthDays;// 上个月的天数
        let monthDays;// 当月的天数

        firstDay = moment({ year: year, month: month, date: 1 }).day();
        if (month === 0) {
            console.log("in month 0")
            preMonthDays = moment({ year: year - 1, month: 11 }).daysInMonth();
        } else {
            preMonthDays = moment({ year: year, month: month - 1 }).daysInMonth();
        }

        monthDays = moment({ year: year, month: month }).daysInMonth();

        // 将上个月的最后几天添加入数组
        if (firstDay !== 7) { //星期日不用显示上个月
            let lastMonthStart = preMonthDays - firstDay + 1;// 从上个月几号开始
            for (let i = 0; i < firstDay; i++) {
                if (month === 0) {
                    this.dateArray.push({
                        year: year,
                        month: 11,
                        date: lastMonthStart + i,
                        isThisMonth: false,
                        isToday: false,
                        isSelected: false,
                    })
                } else {
                    this.dateArray.push({
                        year: year,
                        month: month - 1,
                        date: lastMonthStart + i,
                        isThisMonth: false,
                        isToday: false,
                        isSelected: false,
                    })
                }

            }
        }

        // 将本月天数添加到数组中
        for (let i = 0; i < monthDays; i++) {
            this.dateArray.push({
                year: year,
                month: month,
                date: i + 1,
                isThisMonth: true,
                isToday: false,
                isSelected: false,
            })
        }

        // 将下个月天数添加到数组中，有些月份显示 6 周，有些月份显示 5 周
        if (this.dateArray.length % 7 !== 0) {
            let nextMonthAdd = 7 - this.dateArray.length % 7
            for (let i = 0; i < nextMonthAdd; i++) {
                if (month === 11) {
                    this.dateArray.push({
                        year: year,
                        month: 0,
                        date: i + 1,
                        isThisMonth: false,
                        isToday: false,
                        isSelected: false,
                    })
                } else {
                    this.dateArray.push({
                        year: year,
                        month: month + 1,
                        date: i + 1,
                        isThisMonth: false,
                        isToday: false,
                        isSelected: false,
                    })
                }

            }
        }

        // 至此所有日期数据都被添加入 dateArray 数组中

        // 将日期数据按照每 7 天插入新的数组中
        for (let i = 0; i < this.dateArray.length / 7; i++) {
            let weekDays: Array<dateObj> = []
            for (let j = 0; j < 7; j++) {
                weekDays.push(this.dateArray[i * 7 + j]);
            }
            this.weekArray.push(weekDays);
            weekDays = [];
        }
    }

    back() {
        // 处理跨年的问题
        if (this.displayMonth === 0) {
            this.displayYear--;
            this.displayMonth = 11;
        } else {
            this.displayMonth--;
        }
        this.createMonth(this.displayYear, this.displayMonth);
    }

    forward() {
        // 处理跨年的问题
        if (this.displayMonth === 11) {
            this.displayYear++;
            this.displayMonth = 0;
        } else {
            this.displayMonth++;
        }
        this.createMonth(this.displayYear, this.displayMonth);
    }


}

// 日历的每个格子
interface dateObj {
    year: number,
    month: number,
    date: number,//几号
    isThisMonth: boolean,//是否为当前选择的月份
    isToday: boolean,
    isSelected: boolean,
}