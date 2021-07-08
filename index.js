// Destructuring

// Array destructuring
// const people = ["Cernan", "Daisy", "Ashley"];
// const [person1, person2, person3] = people;
// console.log(person3);

// const [person, setPerson] = useState()

// Object destructuring

// const person = { name: "Cernan", age: 100, favLang: "javascript" };

// const { age, name, favLang: lang } = person;

// const age = person.age
// const name = person.name

// console.log(lang);
// console.log(name);

//=========================================================

// Spread operator

// Array spread
// const languages = ["javascript", "ruby", "python"];

// const updatedLanguages = ["elixir", ...languages];
// const otherUpdatedLanguages = languages.concat("svelte");

// console.log(languages);
// console.log(updatedLanguages);
// console.log(otherUpdatedLanguages);

// Object spread

// const person = {
//   name: "Cernan",
//   age: 100,
//   favLangs: ["javascript", "ruby"],
//   settings: { timezone: "PDT", twoFactorAuth: false },
// };

// const updatedPerson = {
//   ...person,
//   age: 50,
//   city: "San Diego",
//   favDessert: "cheesecake",
//   favLangs: [...person.favLangs, "elixir"],
//   settings: { ...person.settings, timezone: "EDT" },
// };

// console.log(person);
// console.log(updatedPerson);

// Arrow functions

// Function declaration
// function sayName() {
//   console.log("Cernan");
// }

// sayName();

// Function expression
// const otherSayName = function () {
//   console.log("Other Cernan");
// };

// otherSayName();

// Arrow function

// const sayFavLang = () => {
//   return "Javascript";
// };

// Arrow function with implicit return
// const sayFavLang = () => "Javascript";

// console.log(sayFavLang());

// const adder = (num1, num2) => {
//   // do more complicated computations in this section
//   return num1 + num2;
// };

// console.log(adder(2, 4));

// const sayName = (name) => {
//   console.log(`Hello my name is ${name}`);
// };
const peopleDiv = document.getElementById("people");

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayName() {
    console.log(`Hello my name is ${this.name}`);
  }

  increaseAge() {
    return this.age + 10;
  }

  appendNameToDom() {
    peopleDiv.innerHTML += `<h2>${this.name} ${
      this.age
    } ${this.increaseAge()}</h2>`;
  }
}

const people = [
  { name: "Cernan", age: 100 },
  { name: "Ashley", age: 30 },
  { name: "Daisy", age: 4 },
];

people.forEach((person) => {
  const newPerson = new Person(person.name, person.age);
  newPerson.appendNameToDom();
});
