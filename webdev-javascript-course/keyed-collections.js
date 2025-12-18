// map allow you to have any data type as value and key and iterate them

const myMap = new Map([
    ["mykey", "value"],
    ["second", true],
    [1, 5]
]);

console.log(myMap)

// map inherit from map constructor so you have methods like set and get and delete

myMap.set("somekey", "somevalue")

myMap.has(1)

myMap.get("second")

myMap.delete("myKey")

// keys in map is unique and set two value on one key overide last value

// WeakMap

// set is a collection who have unique values

const mySet = new Set([1 , 2 , 3 , 3])

console.log(mySet)

mySet.add(10)

mySet.has(4)

mySet.delete(1)

// note set isnt indexed collections

// Array.from(mySet)