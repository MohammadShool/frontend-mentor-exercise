const colors = ["red", "green", "blue"]
const colorsAsConstructor = new Array("red", "blue", "green")

// note with pass a number to constructor its create empty place as the number who pass like this create 10 empty place

const emptyPlaces = new Array(10)

// empty slot in arrays

// array inherit its behavior from its constructor

console.log(colors["1"])

console.log(colors[10]) // this give you undefiend not an error 

// destructing assignments

// use [] to destruction array and {} to destruction objects
// here assignments is left to right
const [one, two, three] = [1, 2, 3]
// here based on order or if that key is same as variable identifire then its take that key identifire value
const [firstKey, secondKey] = {something: "hello", hi: "hello"}

console.log(one, two, three)
console.log(firstKey, secondKey)

// also you can omit a value or define a default value to prevent from undefiend

// use spread ... to make a array to indivisual elements

console.log(...colors)

// for copy an array use this
const colors2 = [...colors]

// or use this for merge two array to a single array

// also you can use spread to copy object or something else
// or merge them
// spread copy an shallow copy and prototype and non enumrable do not copy
// also you can not spread an array to object or a object to an array

// rest operator
const [colorOne, ...restColors] = colors

// or as argument array in arguments in a function