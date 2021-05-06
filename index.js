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
    format(d=0) {
        // let rep = {D: 'getDay()', M: 'getMonth()', Y: 'getFullYear()' }
        // let output = ''
        // // let d, m, y, h, i, s }
        // for(let i = 0; i < f.length; i++) {
        //     if (f[i] in rep) {
        //         let val = rep[f[i]]
        //         console.log(val.splice(1, val.length))
        //         // let idk = this._date.${val}
        //         // console.log(idk)
        //     } else {
        //         console.log('no', f[i])
        //     }
        // }
        // come back to me :) 
    }
    when() {
        let today = new Date()

        if (today < this._date) {
            console.log('future')
        } else {
            console.log('past')
        }


        // console.log(today)
        console.log(today.getDate(today - this._date))
        // console.log(today.getDate - this._date)
        // let difference = today - this._date 

        // console.log(difference)
        // console.log(today)
        // return when the date will occur 
    }
}

const d = new D(2019, 0, 2, 3, 4, 5)
console.log(d.when()) // 6 months ago
// const d = new D(2019, 9, 2, 3, 4, 5)
// console.log(d.when()) // 3 months from now
// const d = new D(2024, 9, 2, 3, 4, 5)
// console.log(d.when()) // 5 years from now
// const d = new D(2019, 6, 30, 3, 4, 5)
// console.log(d.when()) // 3 days from now
// const d = new D()
// console.log(d.when()) // today