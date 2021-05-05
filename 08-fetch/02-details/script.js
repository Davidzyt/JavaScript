/* becode/javascript
 *
 * /09-fetch/03-details/script.js - 11.3: details
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here

    const target = document.querySelector('#target');
    const run = document.querySelector('#run');
    const template = document.querySelector('#tpl-hero');

    async function getData(){
        const id = document.querySelector('#hero-id').value;
        let data = await fetch(`http://localhost:3000/heroes?id=${id}`);
        let hero = await data.json();
        return hero;
    }

    run.addEventListener('click',function (){

    })

})();
