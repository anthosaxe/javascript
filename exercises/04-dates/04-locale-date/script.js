/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"
    // your code here
    var date = new Date();
    var jour = date.getDay(); // 0 = dimanche du coup dimanche first dans le tab
    var tab_day = ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi'];
    var jour = tab_day[jour];
    var mois_jour = date.getDate();
    var mois = date.getMonth();
    var tab_mois = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'aout', 'septembre', 'octobre', 'novembre', 'decembre']
    var mois = tab_mois[mois];
    var an = date.getFullYear();
    var heure = date.getHours();
    var minute = date.getMinutes();

    document.getElementById('target').innerHTML = jour + ' ' + mois_jour + ' ' + mois + ' ' + an + ', ' + heure + "h" + minute;
})();
