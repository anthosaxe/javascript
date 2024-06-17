/* becode/javascript
 *
 * /09-misc/01-waving-text/script.js - 9.1: effet vague
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    function applyWaveEffect(element, minSize, maxSize, waveLength) {
        const text = element.textContent;
        element.innerHTML = ""; 

        for (let i = 0; i < text.length; i++) {
            const char = text[i];
            const span = document.createElement('span');
            const size = minSize + (maxSize - minSize) * (Math.sin(i / waveLength) + 1) / 2;
            span.style.fontSize = size + "px";
            span.textContent = char;
            element.appendChild(span);
        }
    }

    const waveTextElement = document.getElementById('target');
    applyWaveEffect(waveTextElement, 10, 30, 5); 
})();
