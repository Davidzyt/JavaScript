/* becode/javascript
 *
 * /05-arrays/01-get-element/script.js - 5.1: élément de tableau
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    var fruits = [
        "apple",
        "pear",
        "raspberry",
        "tomatos",
        "kiwi",
        "banana",
        "orange",
        "mandarin",
        "durian",
        "peache",
        "grap",
        "cherry",
    ];

    // your code here
    const buttonRun=document.getElementById("run");
    buttonRun.addEventListener("click",function (){
        console.log("The fourth item from the array is:"+fruits[3]+".");
        let changeContant=document.getElementsByClassName("explain")[0];
        changeContant.innerHTML ="The fourth item from the array is:"+fruits[3]+". <br />";
    })

})();
