/* becode/javascript
 *
 * /09-misc/04-worst-ui-two/script.js - 9.4: la pire interface (2) : phone clicker
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    function cycleValue(button) {
        let min = parseInt(button.getAttribute('data-min'));
        let max = parseInt(button.getAttribute('data-max'));
        let currentValue = parseInt(button.textContent);
        
        currentValue++;
        if (currentValue > max) {
            currentValue = min;
        }

        button.textContent = currentValue.toString().padStart(button.getAttribute('data-max').length, '0');
        updatePhoneNumber();
    }

    function updatePhoneNumber() {
        const partOne = document.getElementById('part-one').textContent;
        const partTwo = document.getElementById('part-two').textContent;
        const partThree = document.getElementById('part-three').textContent;
        const partFour = document.getElementById('part-four').textContent;

        document.getElementById('target').textContent = `+${partOne}${partTwo}${partThree}${partFour}`;
    }

    document.getElementById('part-one').addEventListener('click', function() {
        cycleValue(this);
    });

    document.getElementById('part-two').addEventListener('click', function() {
        cycleValue(this);
    });

    document.getElementById('part-three').addEventListener('click', function() {
        cycleValue(this);
    });

    document.getElementById('part-four').addEventListener('click', function() {
        cycleValue(this);
    });

    updatePhoneNumber();
})();
