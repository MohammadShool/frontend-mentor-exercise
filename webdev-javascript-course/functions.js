// functions are objects with a diffrent who they can be called
// and you can pass arguments and return data from them

function myFirstFunction() {
    console.log("this is my first function");
}

// when you add a function to a object we call it method
// and fucntions outside of object will be in global object

// function also same as a variable who declared with var expression and you can use them in strict mode to prevent from this happening

// you can create a scope strict to prevent from hoisting function like this

// "use strict"
// {
//     mySecondFunction();
//     function mySecondFunction() {
//         console.log("this is my second function");
//     }
// }

// so use of strict mode can help you to scope function to enclose block like let and const

// "use strict";
// {
//     var something = "hi"
// }

// console.log(something)


function mySecondFunction() {
    console.log("hello world!")
}

// if you just use that name return to you a object of this function
console.log(mySecondFunction)

// so for invoke them you have to use parantheses in front of them

function printAge(age) {
    console.log(age)
}

//so arguments is like placeholder for data and its common to use of them just and do not change them in a pure function
// if you omit a parameter parameter pass as undefiend
// you can pass it a default value like this

function printName(name = "mohammad") {
    console.log(`my name is ${name}`)
}

// note the body of a non-arrow function have a arguments property by its self who pass all arguments as array
// who now its deprecated or unpopular and you can use another way but at all its is like this

function testArguments() {
    console.log(arguments)
}

testArguments(10, "mohammad", "something");

// for modern js we use this way to create vardiac funcitons

function myFunc(...args) {
    console.log(args)
}

// and this way also work with arrow functions

const someArrowFunc = (...args) => {
    // you can not use arguments but can use
    console.log(args)
}

// you can create anonymous function like this (this is a group function in parantheses)
(function () {

})

const myAnonfunc = function () {
    console.log("anonymous function");
}

myAnonfunc();

// this good for debugging
const mySecondAnonFuncVar = function mySecondAnonFunc() {
    // you just access to function name in its function 
    // who now in modern days its not good practice
    mySecondAnonFunc();
}

// mySecondAnonFunc() // you can not do this

/*---------------arrow functions--------------- */

// you can use arrow function when ever function expression expected
// so you can create a anonymouse function like this

const firstArrowFunction = () => { }

// if you just have one parameter you can compact it like this

const printAgeArrow = age => { console.log(age) }

// also if you have just one state who return something you can omit return expression and use this like this

const sumTwoNum = (a, b) => a + b

    // important note arrow functions do not have their own this and arguments instead they have their parent this mean they use lexical scoping not a big thing

    // if do not inherit any argument or this from their parent they return undefiend to them

    // also you can call a anonymous function without pass it to a variable you can do this like this

    // () this is a function group this mean just run this function but you can do this
    (function () {

    }())

    // run a array of functions in a function group
    (function () {

    }, () => {

    })()

// note you can not run a arrow function in group function beacuse interpreter do not expect that syntax

// use this to handle scopes

/* -------------- new function expression ---------------- */

// you can use new expression before call a function to create a new object from its function

// this good for something like this

function Post() {
    // this reffer to created object for this function
    this.title = "something";
}

// you can use this as a constructor for a object
let post1 = new Post();

// you can use this to encapsulation data who have to act as a single and portable unit

// in outside strict mode and normal calling a function without constructor

// this refer to globalThis
// but in strict mode return undefiend


// and its conventional to determine constructor function name with capitailize


/* ---------return keyword------------- */

// when interpreter reach to return expression end function execution at that point
// and next statement do not run after that return expression

// beacuse return is signal of function end

// following statements after return might result in warning (not an error)

// also we see that who we can omit return in a arrow function like this (() => 2 + 2)


/* ----------- this expression ---------- */

// this expression refer to the value of the object that is bound to the function at the time of its call
// this mean its diffrent from call it as a method, standlone function or a constructor

// wehn a function called its create a this behind the scenes as a refrence to  the obbject taaht contains that function
// giving access to properties and methods defiend alongside it from within its scope

// this is like const you can not change its value or do something you just can change properties

// global binding

// outside any function body or constructor this refer to globalThis for example in browser global object is window object

// in node js globalThis is global

// console.log(this ) // this refer to globalThis object

// also in outside of strict mode this in standlone function refer to globalThis object

// but in strict mode this return undefiend in a standlone function


// implict binding

// when you run a method in a object this refer to that object like this

const myFirstObj = {
    myVal: "something",
    myMethod() {
        console.log(this.myVal)
    }
}

// this in a arrow function inherit from its parrent

// explict binding

// in some case this after a time rmeoved so you have to run that method with bind or apply or call and with a explict binding this argument

// and explict calling override the this value

// also you can override this with a primitive with call and apply and bind :-/

// in strict mode its dont coerced to object and remain primitive

// new binding

// when a class is used as constructor use from this refer to newly created instance

class MyClass {
    myString;
    constructor() {
        this.myString = "my str";
    }
    logThis() {
        console.log(this);
    }
}

const thisClass = new MyClass();

thisClass.logThis();

// similar in function new expression
function SomeFunc () {
    this.myStr = "my str";
    this.logThis = function () {
        console.log(this);
    }
}

const myObjectTest = new SomeFunc()

myObjectTest.logThis();


// event handler 
// in event context this refer to 

// event handler binding

// this refer to a element ot have that handler and invoke that event
// in here also arrow function steel refer to globalThis beacuse its do not provide a this by it self


// also you can bind a fucntion just like explict binding