/* becode/javascript
 *
 * /09-misc/07-storage-clicker/script.js - 9.7: jeu : clicker persistant
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    document.addEventListener('DOMContentLoaded', () => {
        const counterDisplay = document.getElementById('target');
        const incrementButton = document.getElementById('increment');
    
        // Récupérer la valeur du compteur depuis localStorage ou initialiser à 0 si non défini
        let counter = parseInt(localStorage.getItem('counter')) || 0;
        counterDisplay.textContent = counter;
    
        // Fonction pour incrémenter le compteur
        function incrementCounter() {
            counter++;
            counterDisplay.textContent = counter;
            localStorage.setItem('counter', counter);
        }
    
        // Ajouter un événement de clic au bouton
        incrementButton.addEventListener('click', incrementCounter);
    });
})();
