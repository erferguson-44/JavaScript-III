/* The four principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global binding -- when in global scope, value of "this" will be console Object.
* 2. Implicit binding -- when a function is called by preceding dot, to the left; Object left of dot gets "this".
* 3. Explicit binding -- .call or .apply method use, "this" is explicity defined.
* 4. New binding -- whenever a Constructor function is used
*
* write out a code example of each explanation above
*/

// Principle 1
function favFC (club){
console.log(this)
    return club
}
favFC("Everton F.C");
// ^ code example for Window Binding ^


// Principle 2
const myFavPlayer = {
    name: "Gylfi",
    favFood: "meat pies",
    eat: function(x){
    console.log (`${this.name} likes to eat ${this.favFood}.`)
    }
    
};
myFavPlayer.eat()
console.log(myFavPlayer.eat())
// ^ code example for Implicit Binding ^ 


// Principle 3 -- Explicit
function DogsBarking (barker){
    this.happyBark = "Ruff Ruff";
    this.barker = barker;
    this.speak = function (){
        console.log(`${this.happyBark} + ${this.barker}`)
        console.log(this);
    };
}
const karl = new DogsBarking("Effie");
const effie = new DogsBarking("Karl");

karl.speak();
effie.speak();
// code example for New Binding



// Principle 4
// ---- using code from Principle 3 ----- 

karl.speak.call(effie); effie.speak.apply(karl);
// code example for Explicit Binding