// objects unlike primitive data types is mutable its mean can associate multiple values as key value pairs
// and keep its object data type except their properties value types 

// aside from primitives every things in js is object
// also primitives have a object like behavior

// objects is like a dictionary who create from key value pairs like this

const firstObj = {
    name: "mohammad",
    sayYourName() {
        console.log(`hey my name is ${this.name}`)
    }
}

// property keys can be any symbol or string

// and you can not use template literal `` like this for keys

// and values can be in any data type

// and when a property value is a function we call it a method

// also you can create a object with new like this

// in somewhere you have to use curly braces 

// isnt any diffrent between new object and {} 
// but primitives is diffrent in this way 

// but a diffrent between this two syntax is who new Object() and {} is who you can create properties in initial in {}
// but in (new object) you have to create first object then add properties

// also you can use new object to convert a primitive to a object type

let myNumObj = new Object(10) // this equivalent as new Number

// passing null and undefiend is like to create a empty object (new object())

// and pass a object to new object is like to return object its self

// dot notation

const someObject = {
    "myKey": "myValue"
}

// only valid identifier for non valid identifire you have use bracket notation
console.log(someObject.myKey)

// and if this property dont fined instead give you undefiend its give you error
// so you can use ? chain to safe access to a property and if its undefiend its give you undefiend

// you can use bracket notation for symbol keys and non valid indentifire like this

someObject["hi thtere a"] = "my name is mohammad"

// this syntax power is who you can create dynamic key in runtime to access to a property

// someObject[Symbol()]

const colors = {
    "color1": "red",
    "color2": "yellow"
}

const randomNum = Math.ceil(Math.random() * 2)

console.log(colors["color" + randomNum])

// objects like other data type inheritance from prototype object and have properties from your and prototype

// and you can get access and modify a prototype with
// Object.getPrototypeOf(colors)
// Object.setPrototypeOf(colors, {})'

// this check is that property is own object or inherit or not exit
// Object.hasOwn()


// for accessor on objects

Object.defineProperty(colors, "color1", {
    value: true

})

// use this to create a new object and inherit from another object as prototype
// first a object to inherit second a object from mappin keys with their accessors and descriptors 
// Object.create()