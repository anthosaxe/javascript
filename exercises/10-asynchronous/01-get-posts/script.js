/* becode/javascript
 *
 * /10-asynchronous/01-get-posts/script.js - 10.1: chargement d'articles
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    const button = document.getElementById('run');

    // Fonction de callback pour traiter les articles
    function handlePosts(error, posts) {
        if (error) {
            console.error('An error occurred:', error);
        } else {
            console.log('Articles:', posts);
        }
    }

    // Ajouter un événement de clic au bouton
    button.addEventListener('click', () => {
        window.lib.getPosts(handlePosts);
    });
})();
