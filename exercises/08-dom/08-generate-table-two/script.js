/* becode/javascript
 *
 * /08-dom/08-generate-table-two/script.js - 8.8: génération d'un tableau (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    var tabm = '<table>';


    for(i = 0; i<=10;i++){
        tabm += '<tr>' + '<td>' + i + '</td>';
        for(j=0;j<=10;j++){
            tabm += '<td>' + (i*j) + '</td>';
        }
        tabm += '</tr>';
    }

    tabm += '</table>';

    document.getElementById('target').innerHTML = tabm;
})();
