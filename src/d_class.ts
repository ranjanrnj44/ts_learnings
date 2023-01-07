//class basic structure
// we see 2 ways of defining class (redundant code vs good way)
//REDUNDANT - more boilerplate and rework
class Coder {
  cName: string;
  music: string;
  age: number;
  lang: string;
  constructor(cName: string, music: string, age: number, lang: string) {
    this.cName = cName;
    this.music = music;
    this.age = age;
    this.lang = lang;
  }
}
//BEST WAY - using(access modifiers) VISIBILITY MODIFIERS
class Coder1 {
  //if kind of some additional api related stuff required then use below
  secondLang!: string;

  constructor(
    public cName: string,
    public music: string, //readonly cannot be changed
    private age: number, // age can only be accessed in class
    //PROTECTED class can be accessed by derived/instantiated/subclass class, PRIVATE only same class alone
    protected lang: string = "Ts" // this is default params, so we can skip if required on instantiating
  ) {
    this.cName = cName;
    this.age = age;
    this.lang = lang;
  }
  //methods
  public getAge() {
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
  constructor(
    public computer: string,
    cName: string,
    music: string,
    age: number
  ) {
    super(cName, music, age);
    this.computer = computer;
  }
  public getLang() {
    return `I write ${this.lang}`;
  }
}
let Sara = new WebDev("Mac", "Sara", "Lofi", 22);
console.log(Sara.getLang());
//console.log(Sara.age);  PRIVATE, so can't access
//console.log(Sara.lang); // it can only access inside WebDev(SUB CLASS)
//
//
//IMPLEMENTS IN CLASS
interface Musician {
  name: string;
  instrument: string;
  play(action: string): string;
}
class Guitarist implements Musician {
  //fields
  name: string;
  instrument: string;
  constructor(name: string, instrument: string) {
    this.name = name;
    this.instrument = instrument;
  }
  play(action: string): string {
    return `Hey, ${this.name}, ${action} the ${this.instrument}`;
  }
}
const Page = new Guitarist("Ranjan", "Guitar");
console.log(Page.play("strums"));
//
//
//CLASS STATIC
class Peeps {
  //static means, props assigned with static, will not apply to any instantiate rather than own class itself
  static count: number = 0;
  static getCount(): number {
    return Peeps.count; // this.count OR Peeps.count == both will work
  }
  //fields
  public ids: number;
  constructor(public name: string) {
    this.name = name;
    this.ids = ++Peeps.count; // will have 1 when 1st instance is created
  }
}
let John = new Peeps("John");
let Jan = new Peeps("Jan");
let Jawn = new Peeps("Jawn");
console.log(Peeps.count); // will show the 3
//
//
//GETTERS and SETTERS, used in state in react most
class Bands {
  private dataString: string[];

  constructor() {
    this.dataString = [];
  }
  //method for GETTER and SETTER
  public get data(): string[] {
    return this.dataString;
  }
  //setter method
  public set data(newValue: string[]) {
    if (
      Array.isArray(newValue) &&
      newValue.every((item) => typeof item === "string")
    ) {
      //return this.dataString = newValue; // remember SETTERS cannot return value. SetData will not return a value
      this.dataString = newValue;
      return;
    } else {
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
  //prop
  fullName: string;
  //constructor
  constructor(public fname: string, public lname: string, public age?: number) {
    this.fullName = fname + " " + lname + " ";
  }
}

//interface
interface Persons {
  fname: string;
  age?: number;
}

function persons(personObject: Persons): string {
  console.log(
    `Hi, I am ${personObject.fname}. I am ${personObject.age} year old.`
  );
  return `Hi, I am ${personObject.fname}. I am ${personObject.age} year old.`;
}

let personA = new Student("Ranjan", "R", 3);

persons(personA);
