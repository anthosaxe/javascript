/* becode/javascript
 *
 * /10-asynchronous/02-get-comments/script.js - 10.2: chargement d'articles et de commentaires
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    const button = document.getElementById('run')

    button.addEventListener('click', () => {
        window.lib.getPosts((error, posts) => {
            if (error) {
                console.error(error);
                return;
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
    })

})();
