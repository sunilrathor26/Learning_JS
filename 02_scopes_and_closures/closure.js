//Closure is when a function is able to remember and access its lexical scope even when that function is executing outside its lexical scope.

function foo() {
    var a = 2;

    function bar() {
        console.log( a ); // 2
    }

    bar();
}

foo();

/*This code should look familiar from our discussions of nested scope. Function bar() has access to the variable a in the outer enclosing scope because of lexical scope look-up rules (in this case, it’s an RHS reference look-up).

Is this closure?

Well, technically…perhaps. But by our what-you-need-to-know definition above…not exactly. I think the most accurate way to explain bar() referencing a is via lexical scope look-up rules, and those rules are only (an important!) part of what closure is.

From a purely academic perspective, what is said of the above snippet is that the function bar() has a closure over the scope of foo() (and indeed, even over the rest of the scopes it has access to, such as the global scope in our case). Put slightly differently, it’s said that bar() closes over the scope of foo(). Why? Because bar() appears nested inside of foo(). Plain and simple.

But, closure defined in this way is not directly observable, nor do we see closure exercised in that snippet. We clearly see lexical scope, but closure remains sort of a mysterious shifting shadow behind the code. */

//Let us then consider code that brings closure into full light:

function foo() {
    var a = 2;

    function bar() {
        console.log( a );
    }

    return bar;
}

var baz = foo();

baz(); // 2 -- Whoa, closure was just observed, man.

/*The function bar() has lexical scope access to the inner scope of foo(). But then, we take bar(), the function itself, and pass it as a value. In this case, we return the function object itself that bar references.

After we execute foo(), we assign the value it returned (our inner bar() function) to a variable called baz, and then we actually invoke baz(), which of course is invoking our inner function bar(), just by a different identifier reference.

bar() is executed, for sure. But in this case, it’s executed outside of its declared lexical scope.

After foo() executed, normally we would expect that the entirety of the inner scope of foo() would go away, because we know that the engine employs a garbage collector that comes along and frees up memory once it’s no longer in use. Since it would appear that the contents of foo() are no longer in use, it would seem natural that they should be considered gone.

But the “magic” of closures does not let this happen. That inner scope is in fact still in use, and thus does not go away. Who’s using it? The function bar() itself.

By virtue of where it was declared, bar() has a lexical scope closure over that inner scope of foo(), which keeps that scope alive for bar() to reference at any later time.

bar() still has a reference to that scope, and that reference is called closure.

So, a few microseconds later, when the variable baz is invoked (invoking the inner function we initially labeled bar), it duly has access to author-time lexical scope, so it can access the variable a just as we’d expect.

The function is being invoked well outside of its author-time lexical scope. Closure lets the function continue to access the lexical scope it was defined in at author time.

Of course, any of the various ways that functions can be passed around as values, and indeed invoked in other locations, are all examples of observing/exercising closure. */

//another example

function wait(message)
{
    setTimeout(function timer(){
        console.log(message);
    },1000);
}
wait("llala");

/*We take an inner function (named timer) and pass it to setTimeout(..). But timer has a scope closure over the scope of wait(..), indeed keeping and using a reference to the variable message.

A thousand milliseconds after we have executed wait(..), and its inner scope should otherwise be long gone, that anonymous function still has closure over that scope.

Deep down in the guts of the engine, the built-in utility setTimeout(..) has reference to some parameter, probably called fn or func or something like that. Engine goes to invoke that function, which is invoking our inner timer function, and the lexical scope reference is still intact.*/