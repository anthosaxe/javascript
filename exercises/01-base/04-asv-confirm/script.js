/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
var conf = false;
while(conf === false){
    var age = prompt('quel est ton age');
    var sexe = prompt('quel est ton sexe');
    var ville = prompt('quel est ta ville');

    confirmation = confirm(
        `Veuillez confirmer vos informations:\n` +
        `Âge: ${age}\n` +
        `Sexe: ${sexe}\n` +
        `Ville: ${ville}`
    );

    if(confirmation){
        alert('Merci pour votre réponse');
        conf = true;
    }
    }

})();
