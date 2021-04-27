/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    const buttonRun=document.getElementById("run");

    buttonRun.addEventListener("click", function () {

        const selectYearValue = document.getElementById("year").value;

            for (let month = 0; month < 12; month++) {
                let selectDate = new Date(selectYearValue, month, 13);
                if (selectDate.getDay() == 5) {
                    let dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
                    let changeContant=document.getElementsByClassName("explain")[0];
                    changeContant.innerHTML += selectDate.toLocaleDateString("en-gb",dateOptions)+"<br />";
                }
            }
        }
)
})();


