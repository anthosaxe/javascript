/* becode/javascript
 *
 * /09-misc/02-typewriter-effect/script.js - 9.2: effet machine à écrire
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    const text = document.getElementById('target').textContent;
    const writingEffect = document.getElementById("target");
    writingEffect.innerHTML = "";

    let i = 0;
    function writeText() {
        if (i < text.length) {
            writingEffect.innerHTML += text[i];
            i++;
            setTimeout(writeText, Math.random() * 100);
        }
    }

    writeText();
})();
