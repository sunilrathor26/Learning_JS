// const annoyer = {
//   phases: [
//     "literally",
//     "cray cray",
//     "i cant even",
//     "Totes",
//     "YOLO",
//     "cant stop",
//     "wont stop",
//   ],
//   pickPhases() {
//     const { phases } = this;
//     const idx = Math.round(Math.random() * phases.length);
//     return phases[idx];
//   },

//   startPhases() {
//     this.timerId = setInterval(() => {
//       //! Arrow function
//       //* i want the timerId to stop phases so i have stored it in this variable
//       console.log(this.pickPhases());
//     }, 300);
//   },

//   stopPhases() {
//     setInterval(() => {
//       //! Arrow function
//       clearInterval(this.timerId); //* i have used the timerId here
//       console.log("Thank god this is over");
//     }, 5000);
//   },
// };

// annoyer.startPhases();
// annoyer.stopPhases();

//* Arrow functions, introduced in ES6, do not have their own this context. Instead, they inherit this from the enclosing lexical context, which is the context in which the arrow function was defined. This behavior is sometimes referred to as "lexical scoping" of this.

//* RegularFunction: The anonymous function inside setTimeout has its own this which does not refer to the instance of RegularFunction. Instead, it refers to the global object (or undefined in strict mode).
//* ArrowFunction: The arrow function inside setTimeout inherits this from its lexical scope, which is the instance of ArrowFunction.

//* example 1

const myDeck = {
  deck: [],
  suites: ["heart", "Dimond", "spades", "clubes"],
  values: "2,3,4,5,6,7,8,9,10,J,Q,K,A",
  initilizeDeck() {
    const { suites, values, deck } = this;
    for (let value of values.split(",")) {
      for (let suite of suites) {
        deck.push({ suite, value });
      }
    }
    return deck;
  },

  drawCard() {
    return this.deck.pop();
  },
};

console.log(myDeck.initilizeDeck());
console.log(myDeck.drawCard());
