// index.js - purpose and description here
// Author: Your Name
// Date:

// Constants

// Functions


// add button to challenge section
$("#challenge").append("<button id='button-challenge'>Make Special</button>"); 

// add a click listener to the challenge button
$("#button-challenge").click(function(){
  // now add (or subtract) the "special" class to the section
  $("#challenge").toggleClass("special");
});