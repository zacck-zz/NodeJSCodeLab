//make bool
var isValid = true; //or false

//toggle a boolean
isValid = !isValid

//if you just call a boolean it will give you truthy or falsey result
if (isValid) {
  console.log('Data is Valid');
} else {
  console.log('Data is not valid');
}

//challenge
function toggleBoolean(myBool) {
  return !myBool;
};

function type(aBool) {
  if(aBool) {
    return 'is true';
  } else {
    return 'is false';
  }
};



//lets call
console.log('calling toggle with a true', type(toggleBoolean(true)));

console.log('calling toggle with a false', type(toggleBoolean(false)));
