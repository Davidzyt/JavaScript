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

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

    // your code here

    const target=document.getElementById("target");

    let currentTime=new Date();
    let hours=currentTime.getHours();
    let mins=currentTime.getMinutes();

    if (hours<17){
        target.innerText="Hello";
    }
    else if(hours>18){
        target.innerText="Good Evening";
    }
    else{
        if(mins<30){
            target.innerText="Hello";
        }
        else{
            target.innerText="Good Evening";
        }
    }

})();
