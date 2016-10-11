var grades = [];

//put stuff in an array
var statGrades = [100, 30, 40];

//add items to an array
//push adds an item to the end
grades.push(44);
grades.push(57);
grades.push(9);
grades.push(90);
grades.push(555);
console.log(grades);

//add items to the start
grades.unshift(56);

console.log(grades);

//remove last item of the array
grades.pop();
//you can also use this as a var
console.log(grades.pop(), 'last item of array');

console.log(grades);

//remove from the beginning of an array
grades.shift();

console.log(grades.shift(), 'first item of array');
console.log(grades);


//iterate over array elements
grades.forEach((grade) => {
  console.log(grade, 'array item');
});
//access array items using indices
console.log(grades[1] , 'item at position 1');

//check size of array
console.log('array has ',grades.length, 'elements');


//challenge

var totalGrade = 0 ;
grades.forEach((grade) => {
  totalGrade += grade;
});

//log averageGrade
console.log('The average grade is', totalGrade/grades.length);
