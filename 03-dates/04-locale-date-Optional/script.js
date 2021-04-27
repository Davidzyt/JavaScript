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

    const changeTarget=document.getElementById("target");

    const currentDate = new Date();

    let year = currentDate.getUTCFullYear();
    let month = currentDate.getMonth();
    let date = currentDate.getDate();
    let day = currentDate.getDay();
    let hour = currentDate.getHours();
    let min = currentDate.getMinutes();
    let sec = currentDate.getSeconds();

    function getWeekDay() {
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        return days[day];
    }
    function getMonth(){
        let months=["January","February","March","April","May","June","July","August","September","October","November","December"];
        return months[month];
    }

    changeTarget.innerHTML = getWeekDay() + " " + date + " " + getMonth() + " " + year + ", " + hour + ":" + min + ":" + sec;
    if (sec <= 9) {
        changeTarget.innerHTML = getWeekDay() + " " + date + " " + getMonth() + " " + year + ", " + hour + ":" + min + ":" + 0 + sec;
    }
    if (min <= 9) {
        changeTarget.innerHTML = getWeekDay() + " " + date + " " + getMonth() + " " + year + ", " + hour + ":" + 0 + min + ":" + sec;
    }
    if (hour <= 9) {
        changeTarget.innerHTML = getWeekDay() + " " + date + " " + getMonth() + " " + year + ", " + 0 + hour + ":" + 0 + min + ":" + sec;
    }

    setInterval(printTime, 1000);
}

printTime();