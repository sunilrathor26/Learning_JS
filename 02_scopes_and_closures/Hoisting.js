// Hoisting is dealing with the variable anf function declared in various location inside the scope

a = 2;

var a;

console.log( a ); //2

/*Many developers would expect undefined, since the var a statement comes after the a = 2, and it would seem natural to assume that the variable is redefined, and thus assigned the default undefined. However, the output will be 2. */

//Consider another piece of code:

console.log( a );  //undifined

var a = 2; 

/*You might be tempted to assume that, since the previous snippet exhibited some less-than-top-down looking behavior, perhaps in this snippet, 2 will also be printed. Others may think that since the a variable is used before it is declared, this must result in a ReferenceError being thrown.

Unfortunately, both guesses are incorrect. undefined is the output. */


//So, the best way to think about things is that all declarations, both variables and functions, are processed first, before any part of your code is executed.

//When you see var a = 2;, you probably think of that as one statement. But JavaScript actually thinks of it as two statements: var a; and a = 2;. The first statement, the declaration, is processed during the compilation phase. The second statement, the assignment, is left in place for the execution phase.

//Our first snippet then should be thought of as being handled like this:

var a;
a = 2;

console.log( a ); //2

//where the first part is the compilation and the second part is the execution.

//Similarly, our second snippet is actually processed as:

var a;
console.log( a );

a = 2;


//function

foo();  /*<-- able to execute*/

function foo() {
    console.log( a ); // undefined

    var a = 2;
}

//Function declarations are hoisted, as we just saw. But function expressions are not.

foo(); // not ReferenceError, but TypeError!

var foo = function bar() {
    // ...
};

//The variable identifier foo is hoisted and attached to the enclosing scope (global) of this program, so foo() doesn’t fail as a ReferenceError. But foo has no value yet (as it would if it had been a true function declaration instead of expression). So, foo() is attempting to invoke the undefined value, which is a TypeError illegal operation.