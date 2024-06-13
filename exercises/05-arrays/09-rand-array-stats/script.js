/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code 


    document.getElementById('run').addEventListener('click', () => {
        var mytab = [];

        for (let i = 0; i < 10; i++) {
            let rando = Math.floor(Math.random() * 100);
            mytab.push(rando);
            let id_name = "n-" + (i + 1); //les id commencent à 1 et le i commence à 0
            document.getElementById(id_name).innerHTML = mytab[i];
        }

        var min = 101
        var max = 0
        var somme = 0

        mytab.forEach((element) => {
            somme += element;

            if (element < min) {
                min = element;
            }

            if (element > max) {
                max = element;
            }
        })
        var moy = somme / mytab.length;

        document.getElementById('min').innerHTML = min;
        document.getElementById('max').innerHTML = max;
        document.getElementById('sum').innerHTML = somme;
        document.getElementById('average').innerHTML = moy;
    })
})();
