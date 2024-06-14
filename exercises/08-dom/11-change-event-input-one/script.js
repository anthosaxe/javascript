/* becode/javascript
 *
 * /08-dom/11-change-event-input-one/script.js - 8.11: événement change (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    document.getElementById('pass-one').addEventListener('input', function(event) {
        var inp = event.target;
        var i = inp.value.length;
        console.log(i);
        
        if(i > 10){
            inp.value = inp.value.substring(0,10);
        }
    })
})();
