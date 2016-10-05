//create a new object which is a set of keys and values
var person = {
  name: 'Zacck',
  age: 26,
  height: '6ft',
};

//setting object values
person.lastName  = 'Osiemo';


function greetUser(person) {
  //using bracket notation and dot notation for access
  console.log('Hello', person['name'], person.lastName);
}

greetUser(person);

//removing a value from an object
delete person.age;

console.log(person);

//challenge
var pet = {
  name: 'Alice',
  type: 'Cat'
};

function printPet(pet) {
  console.log('You own a', pet.type,'Known as', pet.name);
}

printPet(pet);
