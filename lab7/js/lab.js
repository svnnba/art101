// index.js - purpose and description here
// Author: Your Name
// Date:

// Constants
var userName = window.prompt("Hey, what's your name so I can fix it for ya. "); 
// Functions
function sortUsername() {
  console.log("username =", userName);
// split string to array 
var nameArray = userName.split('');
console.log("nameArraySort =", nameArray);
// sort array
var nameArraySort = nameArray.sort();
console.log("nameArraySort =", nameArraySort);
// join array back to string
var nameSorted = nameArraySort.join('');
console.log("nameSorted =", nameSorted);
return nameSorted;
}

document.writeln("Lookie here, I fixed your name: ",
  sortUsername(), "</br>");
  
// this is an example function and this comment tells what it doees and what parameters are passed to it.
