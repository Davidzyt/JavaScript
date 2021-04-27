/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function(){

    const buttonRun=document.getElementById("run");

    buttonRun.addEventListener("click",function () {
        let dobYear = document.getElementById('dob-year').value;
        let dobMonth = document.getElementById('dob-month').value;
        let dobDate = document.getElementById('dob-day').value;

        let currentTime=new Date();
        let currentYear=currentTime.getUTCFullYear();
        let currentMonth=currentTime.getMonth();
        let currentDate=currentTime.getDate();

        let age=currentYear-dobYear;

        if(currentMonth<dobMonth){
            age=age-1;
        }
        else {
            if(currentMonth=dobMonth&&currentDate<dobDate){
                age=age-1;
            }
        }
        alert("Your age is: "+age+".")
    })

})();