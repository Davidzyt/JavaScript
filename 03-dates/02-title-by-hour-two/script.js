/* becode/javascript
 *
 * /04-dates/02-title-by-hour-two/script.js - 4.2: texte en fonction de l'heure (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    var x=new Date();
    var hours=x.getHours();
    var mins=x.getMinutes();
    if (hours<17){
        document.getElementById("target").innerText="Hello";
    }
    else if(hours>18){
        document.getElementById("target").innerText="Good Evening";
    }
    else{
        if(mins<30){
            document.getElementById("target").innerText="Hello";
        }
        else{
            document.getElementById("target").innerText="Good Evening";
        }
    }

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

    // your code here

})();
