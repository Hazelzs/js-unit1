const currentDate = new Date();
const fallBreak = new Date("Nov 19 2022")
const winterBreak = new Date("Dec 25 2022")
const dms = 60*60*24*1000

let cdms = currentDate.getTime();
let fbms = fallBreak.getTime();
let wdms = winterBreak.getTime();

let daysuntilfb = Math.floor((fbms - cdms)/dms)
let daysuntilcd = Math.floor((wdms - cdms)/dms)


document.write('days until winter break =  ' + daysuntilcd)
document.write("<br>")
document.write('days until fall break =  ' + daysuntilfb)