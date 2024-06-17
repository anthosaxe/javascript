/* becode/javascript
 *
 * /09-misc/05-worst-ui-three/script.js - 9.5: la pire interface (3) : phone slot
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    function cycleValue(input) {
        let min = parseInt(input.getAttribute('data-min'), 10);
        let max = parseInt(input.getAttribute('data-max'), 10);

        if (!input.cycling) {
            input.cycling = setInterval(() => {
                let currentValue = parseInt(input.value, 10);
                currentValue++;
                if (currentValue > max) {
                    currentValue = min;
                }
                input.value = currentValue.toString().padStart(max.toString().length, '0');
                updatePhoneNumber();
            }, 100);
        } else {
            clearInterval(input.cycling);
            input.cycling = null;
        }
    }

    function updatePhoneNumber() {
        const partOne = document.getElementById('part-one').value;
        const partTwo = document.getElementById('part-two').value;
        const partThree = document.getElementById('part-three').value;
        const partFour = document.getElementById('part-four').value;

        document.getElementById('target').textContent = `+${partOne}${partTwo}${partThree}${partFour}`;
    }

    cycleValue(document.getElementById('part-one'));
    cycleValue(document.getElementById('part-two'));
    cycleValue(document.getElementById('part-three'));
    cycleValue(document.getElementById('part-four'));
    
    document.getElementById('fix-part-one').addEventListener('click', function() {
        cycleValue(document.getElementById('part-one'));
    });

    document.getElementById('fix-part-two').addEventListener('click', function() {
        cycleValue(document.getElementById('part-two'));
    });

    document.getElementById('fix-part-three').addEventListener('click', function() {
        cycleValue(document.getElementById('part-three'));
    });

    document.getElementById('fix-part-four').addEventListener('click', function() {
        cycleValue(document.getElementById('part-four'));
    });

    updatePhoneNumber();

})();
