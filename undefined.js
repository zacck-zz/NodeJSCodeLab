//if a function does not a have a return statement
//undefined will be returned

var name = 'Zacck';

//undefined is a reserved keyword you can use it as a var

console.log(name);


//delete  by setting name to undefined

name = undefined;
console.log(name, 'name after setting to undefined');

function doesNothing(age) {
  console.log('age', age);
};

console.log(doesNothing());


var newVar = undefined;
//check if var is undefined
if(newVar  === undefined) {
  console.log('newVar is undefined','wrong way to check');
}

//best way to check
if(typeof newVar === 'undefined') {
  console.log('newVar is undefined');
}

function greetUser(name) {
  if(typeof name === 'undefined') {
    console.log('Hello World');
  } else {
    console.log('Hello', name);
  }
}


greetUser();

greetUser('Zacck');
