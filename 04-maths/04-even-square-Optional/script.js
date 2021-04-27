/* becode/javascript
 *
 * /02-maths/03-even-square/script.js - 2.3: carrés des pairs
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    const buttonRun=document.getElementById("run");

    buttonRun.addEventListener("click", function() {

        for(let x=1;x<=21;x++){
            if(Math.pow(x,2)<=21){
                let changeContant=document.getElementsByClassName("explain")[0];
                changeContant.innerHTML += Math.pow(x,2)+" is squre of "+x+"<br />";
            }
        }
    });

})();
