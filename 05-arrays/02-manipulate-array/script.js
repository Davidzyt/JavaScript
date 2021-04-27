/* becode/javascript
 *
 * /05-arrays/02-manipulate-array/script.js - 5.2: manipulation de tableau
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    const fruits = [
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "orange",
        "mandarine",
        "durian",
        "pêche",
        "raisin",
        "cerise",
    ];

    // your code here
    const buttonRun=document.getElementById("run");
    buttonRun.addEventListener("click",function (){
        fruits.shift();
        fruits.pop();
        fruits.unshift("banana");
        fruits.push("kiwi");

        let changeContant=document.getElementsByClassName("explain")[0];
        changeContant.innerHTML ="The new array is:"+"<br />"+fruits;
        console.log("The new array is:\n"+fruits);

    })

})();
