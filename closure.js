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

//prototype of our adder this takes the base number
function createAdder(number) {
  //inner function to do the actual addition
  function adder(toAdd) {
    console.log('sum is ', number + toAdd)
  }

  return adder;
}

//lets return our function with a base of 12
var mAdder = createAdder(12);

//lets run the adder with 12 again
//should return 24
//composable
mAdder(12);
