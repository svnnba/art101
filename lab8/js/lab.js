// index.js - purpose and description here
// Author: Your Name
// Date: Nov 12, 2024

// Constants

// Functions


function isEven(x) {
  return (x % 2 == 0);
}
// test function
console.log("Is 1 even? ", isEven(1));
console.log("Is 2 even? ", isEven(2));

array = [26, 367,1401, 2549, 3680, 10000]
console.log("My aray", array);

var result = array.map (isEven);
console.log("Test of evenness of array:", result);
var result = array.map(function(x){
  return x ** 0.5;
})

console.log ("Squareroot of array:", result); 
