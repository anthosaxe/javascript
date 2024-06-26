/* becode/javascript
 *
 * /10-asynchronous/04-promise-get-posts/script.js - 10.4: chargement d'articles (Promise)
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here

    document.getElementById("run").addEventListener("click", async () => {
        try {
            const posts = await window.lib.getPosts();
            console.log("Articles obtenus :", posts);
        } catch (error) {
            console.error("Erreur lors du chargement des articles :", error);
        }
    });
})();
