/* becode/javascript
 *
 * /08-dom/10-match-password-two/script.js - 8.10: vérification de mots de passe (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.


(() => {
    // your code here
    document.getElementById("run").addEventListener("click", () => {
        var mdp = document.getElementById('pass-one').value;
        var mdpc = document.getElementById('pass-two').value;
        if (mdp !== mdpc) {
            document.getElementById('pass-one').classList.add('error');
            console.log(document.getElementById('pass-one').classList);
            document.getElementById('pass-two').classList.add('error');
            console.log(document.getElementById('pass-two').classList);
        }
    })
})();

