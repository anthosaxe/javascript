/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    document.getElementById('run').addEventListener('click', () => {
        var year = document.getElementById('year').value;
        console.log(year);
        let mois_tab = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'];

        for (let mois = 0;mois<12;mois ++){
            var date = new Date(year, mois, 13);
            if (date.getDay()===5){
                console.log(mois_tab[mois] + ' ' + year);
            }
        }
    })
})();
