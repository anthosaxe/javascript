/* becode/javascript
 *
 * /09-misc/06-guess-number/script.js - 9.6: jeu : trouver un nombre
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    // Générer un nombre aléatoire entre 1 et 100 au chargement de la page
let randomNumber = Math.floor(Math.random() * 100) + 1;

// Nombre d'essais de l'utilisateur
let attempts = 0;

// Fonction pour vérifier la devinette de l'utilisateur
function checkGuess(guess) {
    attempts++;

    if (guess < randomNumber) {
        alert("Votre nombre est plus petit");
        return false;
    } else if (guess > randomNumber) {
        alert("Votre nombre est plus grand");
        return false;
    } else {
        alert(`GG! Vous avez deviné le nombre en ${attempts} essais.`);
        return true;
    }
}

// Fonction principale pour le jeu
function playGame() {
    let guess;
    let correctGuess = false;

    while (!correctGuess) {
        guess = prompt("Devinez un nombre entre 1 et 100 :");

        // Vérifier si l'utilisateur a cliqué sur Annuler ou n'a pas entré de nombre
        if (guess === null || guess.trim() === "") {
            continue;
        }

        guess = parseInt(guess);

        // Vérifier si guess est un nombre valide
        if (isNaN(guess) || guess < 1 || guess > 100) {
            alert("Veuillez entrer un nombre valide entre 1 et 100.");
            continue;
        }

        // Vérifier la devinette de l'utilisateur
        correctGuess = checkGuess(guess);
    }
}

// Appeler la fonction principale pour démarrer le jeu au chargement de la page
window.onload = function() {
    playGame();
};



})();
