/* becode/javascript
 *
 * /02-maths/06-fizzbuzz/script.js - 2.6: fizzbuzz
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(()=> {
    var m3 = "fizz";
    var m5 = "buzz"
    for (let i = 1; i <= 100; i++) {
        if ((i % 3 === 0) && (i % 5 === 0)){
            console.log(m3+m5);
        }
        else if (i % 3 === 0){
            console.log(m3);
        }
        else if (i % 5 === 0){
            console.log(m5);
        }
        else{
            console.log(i);
        }
    }

})();
