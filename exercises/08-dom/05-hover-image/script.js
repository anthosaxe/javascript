/* becode/javascript
 *
 * /08-dom/05-hover-image/script.js - 8.5: survol d'image
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    var img = document.querySelector("img");
    var img2 = document.querySelector("img").getAttribute('data-hover');
    console.log(img2);
    img.addEventListener("mouseover", function() {
        img.src = img2;
    })
})();
