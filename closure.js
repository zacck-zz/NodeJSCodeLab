//build a function to format a greeting
function greetMaker(name) {

  function greet() {
      console.log('Hi', name)
  }

  //in javascript functions are first class objects
  //so we can return functions ans pass functions as variables
  return greet;
}

//make new variable thats a function
var mGreeter = greetMaker('Zacck');

mGreeter();

/*create a function called createAdder(baseNumber)
*RETURN  a fucntion that takes a number to add
*its gonna return the sum of the passed in number and the baseNumber
*/
