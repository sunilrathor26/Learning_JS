/*Why would “hiding” variables and functions be a useful technique?

There’s a variety of reasons motivating this scope-based hiding. They tend to arise from the software design principle Principle of Least Privilege[2], also sometimes called Least Authority or Least Exposure. This principle states that in the design of software, such as the API for a module/object, you should expose only what is minimally necessary, and “hide” everything else.

This principle extends to the choice of which scope to contain variables and functions. If all variables and functions were in the global scope, they would of course be accessible to any nested scope. But this would violate the “Least…” principle in that you are (likely) exposing many variables or functions that you should otherwise keep private, as proper use of the code would discourage access to those variables/functions.*/

function doSomething(a)
{
    b = a+doSomethingElse(a*2); //doSomethingElse fun declartion
    console.log(b*3);
}

function doSomethingElse(a)  // fun defination
{
    return a-1;
}
var b;

doSomething(4)//33

/*In this snippet, the b variable and the doSomethingElse(..) function are likely “private” details of how doSomething(..) does its job. Giving the enclosing scope “access” to b and doSomethingElse(..) is not only unnecessary but also possibly “dangerous,” in that they may be used in unexpected ways, intentionally or not, and this may violate pre-condition assumptions of doSomething(..). A more “proper” design would hide these private details inside the scope of doSomething(..), such as:*/

function doSomething(a)
{
    function doSomethingElse(a)
    {
        return a-1;
    }

    var b = a+doSomethingElse(a*2);
    console.log(b);//14
}

doSomething(5)

//Now, b and doSomethingElse(..) are not accessible to any outside influence, instead controlled only by doSomething(..). The functionality and end result has not been affected, but the design keeps private details private, which is usually considered better software.

