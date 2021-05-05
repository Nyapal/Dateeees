let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August',  'September', 'October', 'November', 'December']
let mons = ['Jan', 'Feb', 'Mar', 'April', 'May', 'June', 'July', 'Aug',  'Sept', 'Oct', 'Nov', 'Dec']
let week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
let weee = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
class D {
    constructor(...args) {
        this._date = new Date(...args)
    }
    get year() {
        return this._date.getFullYear()
    }
    get yr() {
        let yr = this._date.getYear().toString()
        return yr.slice(1, yr.length)
    }
    get month() {
        let month = this._date.getMonth()
        return months[month]
    }
    get mon() {
        let mon = this._date.getMonth()
        return mons[mon]
    }
    get day() {
        let day = this._date.getDay() 
        return week[day]
    }
    get dy() {
        let day = this._date.getDay()
        return weee[day]
    }
    get date() {
        return this._date.getDate()
    }
    get hours() {
        return this._date.getHours()
    }
    get mins() {
        return this._date.getMinutes()
    }
    get secs() {
        return this._date.getSeconds()
    }
}

const d = new D()

console.log( d.year )  // 2021 - Full year
console.log( d.yr )    // 21   - Short year
console.log( d.month ) // July - Full month
console.log( d.mon )   // Jul  - Short month
console.log( d.day )   // Tuesday - Full day
console.log( d.dy )    // Tue  - Short day
console.log( d.date )  // 27   - Date
console.log( d.hours ) // 18   - Hour
console.log( d.mins )  // 6    - Minutes
console.log( d.secs )  // 5    - Seconds