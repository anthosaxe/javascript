/* becode/javascript
 *
 * /05-arrays/11-dedupe-array/script.js - 5.11: dédoublonnement d'un tableau
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const fruits = [
        "cerise",
        "durian",
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "orange",
        "mandarine",
        "fraise",
        "durian",
        "pêche",
        "cerise",
        "raisin",
        "cerise",
    ];

    // your code here
    document.getElementById('run').addEventListener('click', () => {
        for(i=0;i<fruits.length;i++){
            var fruit = fruits[i];
            for(j=i+1;j<fruits.length;j++){
                if (fruits[j] === fruit && i !== j){
                    fruits.splice(j,1);
                }
            }
        }
        console.log(fruits);
    })
})();
