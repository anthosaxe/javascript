/* becode/javascript
 *
 * /07-classes/03-inheritance/script.js - 7.3: héritage
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    class Animal {
        sayHello() {
            return `${this.constructor.greeting}! I'm ${this.name}!`;
        }
    }
    // your code here
    class cat extends Animal{
        constructor(name){
            super();
            this.name = name;
        }
        static greeting = "miaou";
    }
    class dog extends Animal{
        constructor(name){
            super();
            this.name = name;
        }
        static greeting = "woof";
    }

    document.getElementById('run').addEventListener('click', () => {
        var doug = new dog("doug");
        var kit = new cat('kit');
        console.log(doug.sayHello());
        console.log(kit.sayHello());
    })

})();
