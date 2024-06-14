/* becode/javascript
 *
 * /08-dom/07-generate-table-one/script.js - 8.7: génération d'un tableau (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    var table = '<table>' + 
        Array.from({length: 10},
             () => '<tr>' + 
        Array.from({length: 10},
             () => "<td>0</td>" ).join('')
             + '</tr>').join('')
             + '</table>';
    document.getElementById('target').innerHTML = table;
})();
