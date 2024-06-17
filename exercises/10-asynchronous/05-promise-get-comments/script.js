/* becode/javascript
 *
 * /10-asynchronous/05-promise-get-comments/script.js - 10.5: chargement d'articles et de commentaires (Promise)
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

        let remaining = posts.length;

            posts.forEach(post => {
                window.lib.getComments(post.id, (error, comments) => {
                    if (error) {
                        console.error(error);
                        return;
                    }

                    post.comments = comments;
                    remaining--;

                    if (remaining === 0) {
                        console.log(posts);
                    }
                });
            });
    });
})();
