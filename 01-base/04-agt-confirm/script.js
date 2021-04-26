/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function infoControl() {
    var age=prompt("Your age?");
    var gender=prompt("Your gender?");
    var town=prompt("Your town?");
    var infoConfirm=confirm("Your age:"+age+" ;\nYour gender: "+gender+" ;\nYour town: "+town+" ;\nCorrect?");
    if(infoConfirm!==true){
        infoControl();
    }
    // your code here

})();
