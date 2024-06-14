/* becode/javascript
 *
 * /08-dom/12-change-event-input-two/script.js - 8.12: événement change (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    document.getElementById('pass-one').addEventListener('input', function (element) {
        var inp = element.target;
        console.log(inp);
        var inpv = inp.value;

        var i = inp.value.length;
        console.log(i);

        var j = 0;
        var inpv_tab = inpv.split('');


        for (i = 0; i < inpv_tab.length; i++) {
            if (/\d/.test(inpv_tab[i])) {
                j += 1;
            }
        }

        if (i >= 8 && j >= 2) {
            document.getElementById('validity').innerHTML = "OK"
        }
    })
})();
