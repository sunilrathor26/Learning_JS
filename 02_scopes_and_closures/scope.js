/*we defined “scope” as the set of rules that govern how the engine can look up a variable by its identifier name and find it, either in the current scope, or in any of the nested scopes it’s contained within*/
function foo(a){
    var b = a*2;
    function bar(c)
    {
        console.log(a,b,c);
    }
    bar(3);
}
foo(4); // 4 8 3

//There are three nested scopes inherent in this code example. It may be helpful to think about these scopes as bubbles inside of each other

//Bubble 1 encompasses the global scope and has just one identifier in it: foo.

//Bubble 2 encompasses the scope of foo, which includes the three identifiers: a, bar, and b.

//Bubble 3 encompasses the scope of bar, and it includes just one identifier: c.


/*Scope From Functions
The most common answer to those questions is that JavaScript has function-based scope. That is, each function you declare creates a bubble for itself, but no other structures create their own scope bubbles. As we’ll see in just a little bit, this is not quite true.

But first, let’s explore function scope and its implications.

Consider this code:*/

function foo(a) {
    var b = 2;

    // some code

    function bar() {
        // ...
    }

    // more code

    var c = 3;
}
foo(3)
/*In this snippet, the scope bubble for foo(..) includes identifiers a, b, c, and bar. It doesn’t matter where in the scope a declaration appears, the variable or function belongs to the containing scope bubble, regardless. We’ll explore how exactly that works in the next chapter.

bar(..) has its own scope bubble. So does the global scope, which has just one identifier attached to it: foo.

Because a, b, c, and bar all belong to the scope bubble of foo(..), they are not accessible outside of foo(..). That is, the following code would all result in ReferenceError errors, as the identifiers are not available to the global scope:*/

bar(); // fails

console.log( a, b, c ); // all 3 fail