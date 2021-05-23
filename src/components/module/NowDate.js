export default class NowDate {
    constructor() {
        this.currentDate = new Date()
        this.currentMonth = this.currentDate.getMonth() + 1
        this.currentGetDate = this.currentDate.getDate()
        this.weekList = new Array('Sun.', 'Mon.', 'Tue.', 'Wed.', 'Thu.', 'Fri.', 'Sat.')
        this.currentYoil = this.weekList[this.currentDate.getDay()]
        this.currentHours = this.currentDate.getHours()
    }

    /*
    header상단 date값 출력
    */

    getTransDate() {
        return `${this.currentMonth}/${this.currentGetDate} ${this.currentYoil}`
    }

    /*
    오전,오후,저녁 여부
    */
    getTransHour() {
        if (this.currentHours >= 0 && this.currentHours < 12) {
            return 'Good Morning!'
        } else if (this.currentHours >= 12 && this.currentHours < 18) {
            return 'Good Afternoon!'
        } else {
            return 'Good Evening!'
        }
    }

    /*
     라이트,다크 모드 설정
     */
    getTransDisplay() {
        if (this.currentHours >= 0 && this.currentHours < 18) {
            return false
        } else {
            return true
        }
    }
}