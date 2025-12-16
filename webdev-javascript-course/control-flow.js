// so what is program?
// javascript program make from statements and expressions
// who excute line by line in a single thread
// single thread means one command at a time
// so if you dont have any control flow statement
// your program will excute line by line from top to bottom

// conditional statements
// this mean if a expression is true do something
// if its false do something else

// like this:

if (true) { console.log("this is a true conditional contorl flow."); }

if (false) { console.log("this will not be printed"); }

// you can also use else statement

if (false) {
    console.log("this will not be printed");
} else {
    console.log("this will be printed because the if condition is false");
}

// chain conditional statements using else if

let score = 12.5;

if (score <= 5) {
    console.log("your score is bad")
} else if (score > 5 && score <= 10) {
    console.log("you need to practive harder")
} else if (score > 10 && score <= 15) {
    console.log("you are good at all")
} else {
    console.log("best score")
}

if (true)
    console.loog("non block condition statement");

// ternary condition

let myFirstTernary = true ? "yeah this true" : "no this isnt true";

console.log(myFirstTernary)

// this have a problem if false be the case every thing after case runned even another case 
switch (2 + 2 === 4) {
    case false:
        console.log("False.")
    case true:
        console.log("True.")
}

// to prevent from this use break and break switch body

switch (2 + 2 === 7) {
    case false:
        console.log("False.")
        break;

    case true:
        console.log("True");
        break;

    default:
        console.log("if no case matches the condition default runned");
}

// note cases dont create a lexial by them selves beacuse we dont create a block
// so you can not create a same variable in two diffrent case like this
// if you run this this give you error

// switch (2 + 2 === 6) {
//     case false:
//         let x = 5;
//         break;
//     case true:
//         let x = 8;
//         break;
// }

// so for handle this thing you can create scope for any of cases

switch (2 + 2 === 6) {
    case false: {
        let x = 7;
        break;
    }
    case true: {
        let x = 2;
        break;
    }
}

/*--------loops---------*/

// somewhere who appeared time complexity

// for example a while loop

let iterationCount = 0;
console.log("pre loop")

while (iterationCount < 3) {
    iterationCount++;
    console.log("loop iteration.")
}

console.log("continuing on")

// note if you create a infinite loop what happen?
// while (true)
// main execution tread freeze and maybe os kill your process
// for example in a browser, browser freeze

let i = 0; 

while (i < 4) {
    if (i == 2) {
        continue; // this mean please stop this block and continue from next iteration
    }
 
    if (i == 3) {
        break; // if interpreter see break on a loop stop while body and continue execute other things
    }
    
    console.log(i)

    i ++
}

// while is good for iteration with indeterminate length like this

let randomize = () => Math.floor(Math.random() * 10);
let randomNum = randomize();

while (randomNum !== 3) {
    console.log("the number is not " + randomNum)
    randomNum = randomize();
}

console.log(`the correct number is ${randomNum}`)

// do while loop
// first do something then check condition diffrent from while is who run for first time then check but while first check then run
do {
    console.log("something")
}while (false);

// also here do-while is good for indeterminate length of works

// for loop

// for (first before loop declare a variable or a expression like let and var, then a condition first check then run, statement like increate indexer)


for (let i = 0; i < 10; i++)
{
    console.log(i)
}

// this offen use for checking a array items but we can use a better way to do this for example

var fruits = ["apple", "orange", "cherry"];

// for of accept a expression like let and var and const then use from array and return value
for (const fruit of fruits) {
    console.log(fruit)
}

// for keys in a object use from in expression like this

let myObj = {"firstKey": false, "secondKey": true};

// every enumrebale propertys and do not show you non enumrable properties
for (const myKey in myObj) {
    // you can use this key to find its value beacuse you have key and you dont need any extra syntax to find value
    console.log(myKey);
}

// you can create a array from object keys or values or entire object enumrable with this methods

for (const key of Object.keys(myObj)){

}

for (const value of Object.values(myObj)) {

}

for (const [key, value] of Object.entries(myObj)){

}

// a short hand method who provide a simple iteration on a array who provide by a nodelist like this

let myNums = [1,2,3,4,5,6,7,8,9]
myNums.forEach((num, i , orginalArray)=>{
    // you can not use break and continue in here beacuse this isnt a loop body this is a callback function
    console.log(num)
    console.log(i)
    console.log(orginalArray)
})

const myMap = new Map([
    ['myKey', true]
])

myMap.forEach((key, value, orginalMap) => {
    console.log(key, value, orginalMap)
})

const aSet = new Set([true, false]);

aSet.forEach((key,value, orginalSet)=>{
    console.log(key, value, orginalSet)
})

// arrays and map and sets extends from iterator method who can iterate like this for iterator structure types you have to create next() method

const myIterable = [1 , 2 , 3]
const myIterator = myIterable[Symbol.iterator]();
console.log(myIterator)
// and you can run next method on them and iterate one toward like this
myIterator.next()
// this method return a object who have two thing first have a value and then have a done who tell you this iterator is done or not

// generator function

// this method remain state and do not execute a code immediatly after culling
function* myGeneratorFunction () {
    console.log("this is a generator function")
    yield "you can pause a value like this"
    yield "second value"

    const firstYield = yield;
    // second yield can replace to first yield
    yield firstYield + 10;
    // and yield do not remember last operation so replace it all
    // you can use yield* to bind this generator to another generator
    return 4 // you can do this and return value 4 and done true but if you dont use this return then return undefiend and true done
}

const myGenerator = myGeneratorFunction() // this give you a object

// generator function follow iterator protocol this mean they have next method
myGenerator.next();

/* ----------- asynchronous javascript ------------ */
// javascript basically is a synchronous but have some mechanism you can use it as asynchronous

// this function name is executor when executor do something asynchronous promise is in a state who we call it
// pending then when executor do its work this state mean fullfilled if executor do success if not rejected
const myPromise = new Promise(()=>{})

// promise run executor with two argument like this
const myPromise1 = new Promise((fullfiled, reject)=>{
    const myResult = true;

    setTimeout(()=>{
        if (myResult === true){
            fullfiled("this promise was successful.");
        }else{
            reject(new Error("this promise has been rejected."));
        }
    }, 10000)
})

// promise constructor have this methods

myPromise1.then((successFullResult)=>{console.log(successFullResult)}, (failedResult)=>{console.log(failedResult)})

//  you can use then to handle only fullfilled states and you can use catch to handle only fialed states
myPromise1.catch(err=>{
    console.log(err)
})

myPromise1.finally(()=>{
    console.log("this just tell you who this promise is ended and dont pass anything for you")
})

const firstPromise = new Promise((fullfiled, reject)=>{fullfiled("success 1")})
const secondPromise = new Promise((fullfiled, reject)=>{fullfiled("success 2")})
const thirdPromise = new Promise((fullfiled, reject)=>{fullfiled("success 3")})
const fourthPromise = new Promise((fullfilled, reject)=>{reject("hey how are you?")})

const successfulPromises = [firstPromise, secondPromise, thirdPromise]
const oneFailedPromise = [...successfulPromises, fourthPromise]

Promise.all(successfulPromises).then((allValues)=>{
    console.log(allValues)
}).catch(err=>{
    console.log(err)
})

Promise.all(oneFailedPromise).then((allValues)=>{
    console.log(allValues)
}).catch(err=>{
    console.log(err)
})

// every promises need to be true
// Promise.all

// just one of them be fullfilled
// Promise.any

// when every promise ended regardless of their results
// Promise.allSettled

// just first one is important to this promise resualt 
// Promise.race

// you can declare a function with async this mean you can handle a asynchronous work like a synchronous
// so when you create a function async this mean function return any value who want as promise object

async function myAsyncFucntion () {
    return "this is a value returned from this function"
}

myAsyncFucntion().then((fullfilled)=>{
    console.log(fullfilled)
})


// await just pause a asynchronous process (so you can not pause main event loop you can just stop and pause a asynchronous process)
// then await wait and pause async function to fullfilled a promise then return fullfilled value and continue
// and any non promises returned as fullfileed in await expression

async function doSomethingAsync () {
    const myPromise = new Promise((fullfilled, reject)=>{fullfilled("yes")})
    const result = await myPromise
    return myPromise
}

