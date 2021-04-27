/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    // to get the value of an input: document.getElementById("element-id").value

    var performOperation = function(operation) {

        const a = parseInt(document.getElementById("op-one").value);
        const b = parseInt(document.getElementById("op-two").value);

        // perform the operation
        switch (operation){
            case "addition":
                alert(a+" + "+b+" = "+(a+b));
                break;
            case "substraction":
                alert(a+" - "+b+" = "+(a-b));
                break;
            case "multiplication":
                alert(a+" * "+b+" = "+(a*b));
                break;
            case "division":
                alert(a+" / "+b+" = "+(a/b).toFixed(2));
                break;
            default:
                break;
        }
    };

    Array.from(document.querySelectorAll("button.operator")).forEach(function($btn) {
        $btn.addEventListener("click", function() {
            performOperation($btn.id);
        });
    });
})();
