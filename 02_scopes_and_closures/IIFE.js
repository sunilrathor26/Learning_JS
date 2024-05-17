var a=2;
(function foo(){
    var a = 3;
    console.log(a);//3
})();

console.log(a);//2

/*Now that we have a function as an expression by virtue of wrapping it in a ( ) pair, we can execute that function by adding another () on the end, like (function foo(){ .. })(). The first enclosing ( ) pair makes the function an expression, and the second () executes the function.

This pattern is so common, a few years ago the community agreed on a term for it: IIFE, which stands for immediately invoked function expression. */


/*There’s a slight variation on the traditional IIFE form, which some prefer: (function(){ .. }()). Look closely to see the difference. In the first form, the function expression is wrapped in ( ), and then the invoking () pair is on the outside right after it. In the second form, the invoking () pair is moved to the inside of the outer ( ) wrapping pair.

These two forms are identical in functionality. It’s purely a stylistic choice which you prefer.

Another variation on IIFEs that is quite common is to use the fact that they are, in fact, just function calls, and pass in argument(s).

For instance: */

var a = 2;

(function IIFE( global ){

    var a = 3;
    console.log( a ); // 3
    console.log( global.a ); // 2

})( window );

console.log( a ); // 2


//block as scope//

/*While functions are the most common unit of scope, and certainly the most widespread of the design approaches in the majority of JS in circulation, other units of scope are possible, and the usage of these other scope units can lead to even better, cleaner to maintain code. */

for(var i=0;i<10;i++)
    {
        console.log(i);
    }
/*We declare the variable i directly inside the for loop head, most likely because our intent is to use i only within the context of that for loop, and essentially ignore the fact that the variable actually scopes itself to the enclosing scope (function or global). */

/*the var(variable) if declared it is scopes itself to the enclosing scope (function or variable) which result to pollute the globle scope
Why pollute the entire scope of a function with the i variable that is only going to be (or only should be, at least) used for the for loop? */


///////////////////////////let////////////////////////

/*Thus far, we’ve seen that JavaScript only has some strange niche behaviors that expose block scope functionality. If that were all we had, and it was for many, many years, then block scoping would not be terribly useful to the JavaScript developer.

Fortunately, ES6 changes that, and introduces a new keyword let, which sits alongside var as another way to declare variables.

The let keyword attaches the variable declaration to the scope of whatever block (commonly a { .. } pair) it’s contained in. In other words, let implicitly hijacks any block’s scope for its variable declaration. */

var foo = true;

if (foo) {
    let bar = foo * 2;
    bar = something( bar );
    console.log( bar );
}

console.log( bar ); // ReferenceError

/*Using let to attach a variable to an existing block is somewhat implicit. It can confuse if you’re not paying close attention to which blocks have variables scoped to them and are in the habit of moving blocks around, wrapping them in other blocks, etc., as you develop and evolve code. */

////Explicit blocks//////

var foo = true;

if (foo) {
    { // <-- explicit block
        let bar = foo * 2;
        bar = something( bar );
        console.log( bar );
    }
}

console.log( bar ); // ReferenceError

//We can create an arbitrary block for let to bind to by simply including a { .. } pair anywhere a statement is valid grammar. In this case, we’ve made an explicit block inside the if statement, which may be easier as a whole block to move around later in refactoring, without affecting the position and semantics of the enclosing if statement.


