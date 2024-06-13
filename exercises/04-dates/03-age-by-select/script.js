/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    var date = new Date();
    var jour_now = date.getDate();
    var mois_now = date.getMonth() + 1; //commence a 0 pour janvier donc +1
    var an_now = date.getFullYear();

    document.getElementById('run').addEventListener('click', () => {
        var jour = document.getElementById('dob-day').value;
        var mois = document.getElementById('dob-month').value;
        var an = document.getElementById('dob-year').value;
        var age = an_now - an;

        console.log(mois);

        if (mois >= mois_now && jour <= jour_now) {
            age -= 1;
        }

        console.log(age);
    })
})();
