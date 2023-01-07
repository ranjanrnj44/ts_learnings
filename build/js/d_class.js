"use strict";
//class basic structure
// we see 2 ways of defining class (redundant code vs good way)
//REDUNDANT - more boilerplate and rework
class Coder {
    constructor(cName, music, age, lang) {
        this.cName = cName;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
}
//BEST WAY - using(access modifiers) VISIBILITY MODIFIERS
class Coder1 {
    constructor(cName, music, //readonly cannot be changed
    age, // age can only be accessed in class
    //PROTECTED class can be accessed by derived/instantiated/subclass class, PRIVATE only same class alone
    lang = "Ts" // this is default params, so we can skip if required on instantiating
    ) {
        this.cName = cName;
        this.music = music;
        this.age = age;
        this.lang = lang;
        this.cName = cName;
        this.age = age;
        this.lang = lang;
    }
    //methods
    getAge() {
        return `Hello, my age is : ${this.age}`;
    }
}
let Ranjan = new Coder1("Rnj", "Music", 2);
Ranjan.getAge(); // 2
//Ranjan.age; // private, will only with parent class. Remember, While compiled to JS, it can access
//
//
// CLASS EXTENDED
class WebDev extends Coder1 {
    constructor(computer, cName, music, age) {
        super(cName, music, age);
        this.computer = computer;
        this.computer = computer;
    }
    getLang() {
        return `I write ${this.lang}`;
    }
}
let Sara = new WebDev("Mac", "Sara", "Lofi", 22);
console.log(Sara.getLang());
class Guitarist {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return `Hey, ${this.name}, ${action} the ${this.instrument}`;
    }
}
const Page = new Guitarist("Ranjan", "Guitar");
console.log(Page.play("strums"));
//
//
//CLASS STATIC
class Peeps {
    static getCount() {
        return Peeps.count; // this.count OR Peeps.count == both will work
    }
    constructor(name) {
        this.name = name;
        this.name = name;
        this.ids = ++Peeps.count; // will have 1 when 1st instance is created
    }
}
//static means, props assigned with static, will not apply to any instantiate rather than own class itself
Peeps.count = 0;
let John = new Peeps("John");
let Jan = new Peeps("Jan");
let Jawn = new Peeps("Jawn");
console.log(Peeps.count); // will show the 3
//
//
//GETTERS and SETTERS, used in state in react most
class Bands {
    constructor() {
        this.dataString = [];
    }
    //method for GETTER and SETTER
    get data() {
        return this.dataString;
    }
    //setter method
    set data(newValue) {
        if (Array.isArray(newValue) &&
            newValue.every((item) => typeof item === "string")) {
            //return this.dataString = newValue; // remember SETTERS cannot return value. SetData will not return a value
            this.dataString = newValue;
            return;
        }
        else {
            throw new Error("No Values are returned!");
        }
    }
}
const myBands = new Bands();
myBands.data = ["blues", "led zep"];
console.log(myBands.data);
//myBands.data = 'bsp'; //error since string, not of arr type
myBands.data = [...myBands.data, "ZZ Top"];
console.log(myBands.data);
//
//
//
class Student {
    //constructor
    constructor(fname, lname, age) {
        this.fname = fname;
        this.lname = lname;
        this.age = age;
        this.fullName = fname + " " + lname + " ";
    }
}
function persons(personObject) {
    console.log(`Hi, I am ${personObject.fname}. I am ${personObject.age} year old.`);
    return `Hi, I am ${personObject.fname}. I am ${personObject.age} year old.`;
}
let personA = new Student("Ranjan", "R", 3);
persons(personA);
