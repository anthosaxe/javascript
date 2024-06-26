/* becode/javascript
 *
 * /07-classes/04-getter-setter/script.js - 7.4: getter & setter
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    class Person {
        constructor(firstname, lastname) {
            this._firstname = firstname;
            this._lastname = lastname;
        }

        getname(){
            return `${this._firstname} ${this._lastname}`;
        }

        setname(bigname){
            var split_name = bigname.split(' ');
            this._firstname = split_name[0];
            this._lastname = split_name[1];
        }
    }

    document.getElementById('run').addEventListener('click', () => {
        var person1 = new Person();
        person1.setname("sale boite");
        console.log(person1.getname());
    })
})();
