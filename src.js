//-------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------

//chapter 35 to 38 ||
// > chp 31 to 34 is down ok

// Question 1
function showTime() {
    alert(new Date())
}
showTime()

// Question 2
let first = prompt("Enter first name:")
let last = prompt("Enter last name:")
function sayHi(f, l) {
    alert("Hello " + f + " " + l)
}
sayHi(first, last)

// Question 3
function Calc(x, y, op) {
    if (op === "+") {
        return x + y
    } else if (op === "-") {
        return x - y
    } else if (op === "*") {
        return x * y
    } else if (op === "/") {
        return x / y
    } else {
        return "Wrong operator"
    }
}
let n1 = +prompt("Enter 1st number:")
let sign = prompt("Enter operator:")
let n2 = +prompt("Enter 2nd number:")
alert("Result: " + Calc(n1, n2, sign))

// Question 5
function makeSquare(n) {
    return n * n
}
let sq = +prompt("Number to square:")
alert("Square: " + makeSquare(sq))

// Question 6
function fact(num) {
    let total = 1
    for (let i = 1; i <= num; i++) {
        total *= i
    }
    return total
}
alert("Factorial: " + fact(5))

// Question 7
function showCount(start, end) {
    let txt = ""
    for (let i = start; i <= end; i++) {
        txt += i + "\n"
    }
    alert(txt)
}
showCount(1, 5)

// Question 8
function getHypo(b, p) {
    function sq(x) {
        return x * x
    }
    let hypo = Math.sqrt(sq(b) + sq(p))
    return hypo
}
let b = +prompt("Enter base:")
let p = +prompt("Enter height:")
alert("Hypotenuse is: " + getHypo(b, p))

// Question 9
function recArea1(w, h) {
    return w * h
}
alert("Area (numbers): " + recArea1(5, 6))

let width = 7
let height = 8
function recArea2(w, h) {
    return w * h
}
alert("Area (vars): " + recArea2(width, height))

// Question 10
function checkPalin(word) {
    let rev = word.split("").reverse().join("")
    return word === rev
}
let txt = prompt("Word to check:")
alert(txt + " is palindrome? " + checkPalin(txt))

// Question 11
function capEach(str) {
    let parts = str.split(" ")
    for (let i = 0; i < parts.length; i++) {
        parts[i] = parts[i][0].toUpperCase() + parts[i].slice(1)
    }
    return parts.join(" ")
}
alert(capEach("the quick brown fox"))

// Question 12
function bigWord(str) {
    let words = str.split(" ")
    let big = words[0]
    for (let i = 1; i < words.length; i++) {
        if (words[i].length > big.length) {
            big = words[i]
        }
    }
    return big
}
alert("Longest word: " + bigWord("Web Development Tutorial"))

// Question 13
function findChar(str, ch) {
    let total = 0
    for (let i = 0; i < str.length; i++) {
        if (str[i] === ch) {
            total++
        }
    }
    return total
}
alert("Count of letter: " + findChar("JSResourceS.com", "o"))

// Question 14
function circleLine(r) {
    let c = 2 * Math.PI * r
    alert("Circumference: " + c)
}
circleLine(5)

function circleArea(r) {
    let a = Math.PI * r * r
    alert("Area: " + a)
}
circleArea(5)

//-------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------

//chapter 31 to 34

// 1
let d = new Date()
alert("Current Date and Time: " + d)

// 2
let m = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
]
alert("Current Month: " + m[d.getMonth()])

// 3
let wd = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
alert("Today is: " + wd[d.getDay()])

// 4
let t = d.getDay()
if (t === 0 || t === 6) {
    alert("It Fun day")
}

// 5
let dt = d.getDate()
alert(dt < 16 ? "First fifteen days of the month" : "Last days of the month")

// 6
let mins = Math.floor(Date.now() / (1000 * 60))
alert("Minutes since Jan 1 1970: " + mins)

// 7
let h = d.getHours()
alert(h < 12 ? "It s AM" : "It s PM")

// 8
let ld = new Date(2020, 11, 31)
alert("Last date of 2020: " + ld)

// 9
let r = new Date("June, 18, 2015") 
let td = new Date()
let dp = Math.floor((td - r) / (1000 * 60 * 60 * 24))
alert("Days since 1st Ramadan: " + dp)

// 10
let ref = new Date()
let y15 = new Date("Jan, 1, 2015")
let sec = Math.floor((ref - y15) / 1000)
alert("Seconds since start of 2015: " + sec)

// 11
let cur = new Date()
cur.setHours(cur.getHours() + 1)
alert("Date one hour ahead: " + cur)

// 12
let od = new Date()
od.setFullYear(od.getFullYear() - 100)
alert("100 years back: " + od)

// 13
let a = prompt("Enter your age:")
let cy = new Date().getFullYear()
let by = cy - Number(a)
alert("Your birth year is: " + by)

// 14
let mn = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
]
let cn = prompt("Enter customer name:")
let cm = mn[new Date().getMonth()]
let u = parseFloat(prompt("Enter number of units:"))
let cpu = parseFloat(prompt("Enter charges per unit:"))
let ls = parseFloat(prompt("Enter late payment surcharge:"))
let na = parseFloat((u * cpu).toFixed(2))
let ga = parseFloat((na + ls).toFixed(2))

alert(
    "K-Electric Bill\n\n" +
    "Customer Name: " +
    cn +
    "\n" +
    "Month: " +
    cm +
    "\n" +
    "Number of Units: " +
    u +
    "\n" +
    "Charges per Unit: " +
    cpu +
    "\n" +
    "Net Amount Payable (within Due Date): " +
    na +
    "\n" +
    "Late Payment Surcharge: " +
    ls +
    "\n" +
    "Gross Amount Payable (after Due Date): " +
    ga
)

//-------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------

// Chapter 31 - 34

// ques 1
let dsdfa = new Date()

// ques 2
let ds = new Date().toString()

// ques 3
let dtf = new Date()
let dw = dt.getDay()

// ques 4
let dn = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
alert("Today is " + dn[dw])

// ques 5
let n = new Date()
let y = n.getFullYear()
let msdf = n.getMonth()
let da = n.getDate()
let hsf = n.getHours()
let mi = n.getMinutes()
let s = n.getSeconds()
let ms = n.getMilliseconds()

// ques 6
let l = new Date(2020, 11, 31)

// ques 7
let d2 = new Date(1992, 1, 2)

// ques 8
alert(new Date("1980-01-01").getTime())

// ques 9
let dd = new Date()
dd.setFullYear(2025)

// ques 10
function chMToJan(d) {
    d.setMonth(0)
    return d
}

// ques 11
// use setDate()

// ques 12
function chMin(d) {
    let nm = prompt("Enter min:")
    d.setMinutes(parseInt(nm))
    return d
}

// ques 13
function addH(d, x) {
    d.setHours(d.getHours() + x)
    return d
}

// ques 14
function calcA(bd) {
    let t = new Date()
    let a = t.getFullYear() - bd.getFullYear()
    let mo = t.getMonth() - bd.getMonth()
    if (mo < 0 || (mo === 0 && t.getDate() < bd.getDate())) a--
    return a
}

// Chapter 35 - 37

// ques 1
function dA() { }

// ques 2
function aN() {
    let n = prompt("Name:")
}

// ques 3
function f1() {
    console.log("f1")
}
function f2() {
    console.log("f2")
}
function c2() {
    f1()
    f2()
}

// ques 4
function pAN() {
    let n = prompt("Name:")
    alert(n)
}
pAN()

// ques 5
function c(a, b, c) { }

// ques 6
function c2Str(a, b) {
    let r = a + b
    return r
}

// ques 7
function m3(a, b, c) {
    return a * b * c
}

// ques 8
function avg(arr) {
    let s = 0
    for (let i = 0; i < arr.length; i++) s += arr[i]
    return s / arr.length
}

// ques 9
function sum2(a, b) {
    return a + b
}

// ques 10
// same as ques 8

// ques 11
let rrr = sum2(3, 7)

// ques 12
function len(w) {
    return w.length
}

// ques 13
function sY(d, y) {
    d.setFullYear(y)
    return d
}

// ques 14
function getA(dob) {
    return calcA(dob)
}

// ques 15
function inArr(w) {
    let a = ["zaid", "haris", "raza", "abubakar", "hassan", "hussain", "fatima"]
    return a.includes(w)
}

// ques 16
function rep(l) {
    return l.repeat(10)
}

// ques 17
function revArr(a) {
    return a.reverse()
}

// ques 18
function revNum(n) {
    return Number(n.toString().split("").reverse().join(""))
}

// ques 20
function upW(s) {
    return s
        .split(" ")
        .map((w) => w[0].toUpperCase() + w.slice(1))
        .join(" ")
}

// ques 21
function minMax(a) {
    return [Math.min(...a), Math.max(...a)]
}

// Chapter 38

// ques 1
function locV() {
    let l = "local"
    console.log(l)
}

// ques 2
let g = "global"
function getG() {
    console.log(g)
}

// Chapter 39, 40

// ques 1
let v = 2
switch (v) {
    case 1:
        console.log("1")
        break
    case 2:
        console.log("2")
        break
    default:
        console.log("other")
}

// ques 2
let c = prompt("City?").toLowerCase()
switch (c) {
    case "karachi":
        alert("Welcome Karachi")
        break
    case "lahore":
        alert("Welcome Lahore")
        break
    case "islamabad":
        alert("Welcome Islamabad")
        break
    default:
        alert("City not found")
}
