//this is a global variable its defined outside any function
var age = 24;

function localFunction() {
  var name = 'name';
  console.log(name);
  //lets modify age
  //functions can access and modify gloabal variables
  age = 0;
}

localFunction();
console.log(age);
