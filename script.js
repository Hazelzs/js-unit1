const currentDate = new Date();
const fallBreak = new Date("Nov 19 2022")
const winterBreak = new Date("Dec 25 2022")
const dms = 60*60*24*1000

//theses are the constants

let cdms = currentDate.getTime();
let fbms = fallBreak.getTime();
let wdms = winterBreak.getTime();

let daysuntilfb = Math.floor((fbms - cdms)/dms)
let daysuntilcd = Math.floor((wdms - cdms)/dms)

//this is for the breaks
let userinput = prompt('When was your brithday?')
function calculate_age(dob) { 
    var diff_ms = Date.now() - dob.getTime();
    var age_dt = new Date(diff_ms); 
  
    return Math.abs(age_dt.getDay());
}

let userbday = calculate_age(new Date(userinput))

document.write('days until winter break =  ' + daysuntilcd)
document.write("<br>")
document.write('days until fall break =  ' + daysuntilfb)
document.write("<br>")
document.write('your brithday is on a  ' + userbday)