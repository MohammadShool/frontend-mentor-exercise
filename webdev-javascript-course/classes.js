// all code in body of class is in strict mode

class Person {
    constructor() {
        console.log("initialize")

        //this in this class body refer to this class instance itself
    }

    sayName() {
        console.log("hello my name is something !");
    }
}

const instance = new Person()

// beacuse of prototype chain inherit we can call directly method on this instance like this

instance.sayName();

// also we can create a anonymous class 

let AnonClass = class {

}

// so you can not redeclare a class with class expression but you can redeclare a varialbe so

// and you can not log a class who created with a expression but you can call a class who store in a varialbe

class ParentClass {
    someMethod() {
        console.log("hi")
    }
}

class ChildClass extends ParentClass {
    constructor (mypassedval) {
        super(mypassedval)
    }
    someMethod() {
        // call parent class method
        super.someMethod();
        console.log(" there")
    }

    set doubleThisValue(newval) {
        this.totalValue = newval * 2;
    }
    
    get currentValue () {
        
    }
}

// child classes can override parent class methods


// fields in classes

class SomeClass {
    static myStaticField;
    static myStaticMethod () {

    }
    
    someFiled = 10;
    // private methods and field

    #myPrivateField = 5
    #myPrivateMethod () {

    }

    set setValue (val) {
        // do something with this val then
        this.#myPrivateField = val
    }
}

const someInstance = new SomeClass()

// someInstance.#myPrivateField

// even child classes cant access to private fields

SomeClass.myStaticMethod()

// and you can not access to the statics form an instance