# Date Library 

Nya's JavaScript Date Library for FEW 2.1 (Third try 🥲).

 * hello
 * @param {String} input string
 * @returns {String} 'Hello' and the input string

```javascript
function hello(name) {
	return `Hello ${name}`
}
```

#### Create A New Date Object 
```javascript 
const a = new D() // no parameters
const b = new D('January 1, 1970') // with a string
const c = new D(2001, 4, 12, 16, 45) // with year, month, date, hours, mins
const d = new D(new Date()) // with another date object 
```
#### Human Readable Code 
```javascript
const d = new D()
d.year   // 2021 - Full year
d.yr     // 21   - Short year
d.month  // July - Full month
d.mon    // Jul  - Short month
d.day    // Tuesday - Full day
d.dy     // Tue  - Short day
d.date   // 27   - Date
d.hours  // 18   - Hour
d.mins   // 6    - Minutes
d.secs   // 5    - Seconds
```

#### Format 
```javascript
const d = new D(2017, 0, 2, 3, 4, 5)
d.format()              // 2017 January 02
d.format('y/m/d')       // 17/Jan/2
d.format('H:I:S')       // 03:04:05
d.format('h:i:s')       // 3:4:5
d.format('Y-M-D h:I:S') // 2017-January-02 3:04:05 
```
#### When 
```javascript 
const d = new D(2019, 0, 2, 3, 4, 5)
console.log(d.when()) // 6 months ago
const d = new D(2019, 9, 2, 3, 4, 5)
console.log(d.when()) // 3 months from now
const d = new D(2024, 9, 2, 3, 4, 5)
console.log(d.when()) // 5 years from now
const d = new D(2019, 6, 30, 3, 4, 5)
console.log(d.when()) // 3 days from now
const d = new D()
console.log(d.when()) // today
```