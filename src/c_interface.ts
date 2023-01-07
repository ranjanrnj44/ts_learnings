//interface
interface Person {
  name: string;
  age: number;
}

let personObj = { name: "Ranjan", age: 1 };

function person(personObj: Person): string {
  console.log(`Hi, I am ${personObj.name}. I am ${personObj.age} years old.`);
  return `Hi, I am ${personObj.name}. I am ${personObj.age} years old.`;
}
