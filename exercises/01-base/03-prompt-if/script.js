/* becode/javascript
 *
 * /01-base/03-prompt-if/script.js - 1.3: promp & if
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    var gateau = prompt('du gateau frère ?');
    if(gateau === 'oui'){
        alert('Ah bah alors, comme ça, tu veux du gateau mon coquin?');
    }
    else{
        alert('Ah bah alors, comme ça, tu ne veux pas de gateau mon coquin');
    }
})();
