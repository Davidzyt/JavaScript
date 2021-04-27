/* becode/javascript
 *
 * /02-maths/06-fizzbuzz/script.js - 2.6: fizzbuzz
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    for (i = 0; i <= 100; i++) {
        if (i % 15 == 0) {
            console.log(i+"(FizzBuzz:Multiple of 15)")
        } else if (i % 5 == 0) {
            console.log(i+"(Buzz:Multiple of 5)")
        } else if (i % 3 == 0) {
            console.log(i+"(Fizz:Multiple of 3)")
        } else {
            console.log(i);
        }
    }
})();