/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

function printTime() {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

    // your code here
    var d = new Date();
    var year = d.getUTCFullYear();
    var month = d.getMonth();
    var date = d.getDate();
    var day = d.getDay();
    var hour = d.getHours();
    var min = d.getMinutes();
    var sec = d.getSeconds();

    function getWeekDay() {
        var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        return days[day];
    }
    function getMonth(){
        var months=["January","February","March","April","May","June","July","August","September","October","November","December"];
        return months[month];
    }

    document.getElementById("target").innerHTML = getWeekDay() + " " + date + " " + getMonth() + " " + year + ", " + hour + ":" + min + ":" + sec;
    if (sec <= 9) {
        document.getElementById("target").innerHTML = getWeekDay() + " " + date + " " + getMonth() + " " + year + ", " + hour + ":" + min + ":" + 0 + sec;
    }
    if (min <= 9) {
        document.getElementById("target").innerHTML = getWeekDay() + " " + date + " " + getMonth() + " " + year + ", " + hour + ":" + 0 + min + ":" + sec;
    }
    if (hour <= 9) {
        document.getElementById("target").innerHTML = getWeekDay() + " " + date + " " + getMonth() + " " + year + ", " + 0 + hour + ":" + 0 + min + ":" + sec;
    }

    setInterval(printTime, 1000);
}
printTime();