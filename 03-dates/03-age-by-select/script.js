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
    document.getElementById("run").addEventListener("click",function () {
        let dobYear = document.getElementById('dob-year').value;
        let dobMonth = document.getElementById('dob-month').value;
        let dobDate = document.getElementById('dob-day').value;

        var now=new Date();
        let nowYear=now.getUTCFullYear();
        let nowMonth=now.getMonth();
        let nowDate=now.getDate();

        var a = new Date(nowYear-dobYear,nowMonth-dobMonth,nowDate-dobDate);
        var age=a.getUTCFullYear();
        age = age.toString().substr(-2);
        alert("Your age is: "+age+".")
    })
})();