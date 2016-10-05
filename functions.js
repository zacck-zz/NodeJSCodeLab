//declare a function
function greetUser (name, lastName)/* <<add arguments to func here*/ {
  //console.log('hello ' + name +' '+ lastName +'!');

  //return  something
  return 'hello '+ name+ ' '+lastName+'!';
}


//call a function
var greetz = greetUser('Zacck', 'Osiemo');
console.log(greetz);
//reuse a func
var greetm =  greetUser('Michael', 'Dev');
console.log(greetm);

//challenge
function add(a, b) {
  return a+b;
}

console.log(add(4,3));
console.log(add(3, -2));
console.log(add(-1 , -7 ));
