//iterator
var i = 0;
var countLimit = 9;

//while loop
while(i < countLimit) {
  //lets log to screen
  console.log('while:', i);
  //lets increment the i
  i++;
}

console.log('**********************');


//for loop
for(i = 0; i < countLimit; i++) {
  //lets log on every iteration
  console.log('for:', i);
}

//challenge
function countDownWhile(start, stop) {
  //let now  count down from the starting point to stopping point
  while(start > stop) {
    console.log('current count while:', start);
    start--;
  };
  console.log('BOOOM!!!');
}


function countDownFor(start, stop) {
  for(start; start > stop; start -- ){
    console.log('current count for: ', start);
  };
}

countDownWhile(30, 6);
countDownFor(45, 6);
