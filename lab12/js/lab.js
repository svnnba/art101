// index.js - purpose and description here
// Author: Seven Mohamoud
// Date: 11/21/24

// Constants

// Functions

function sortingHat(str){
len = str.length;
mod = len % 4;
if (mod == 0){
  return "Professor Utonium"
}
else if (mod == 1){
  return "Bubbles"
}
else if (mod == 2){
  return "Buttercup"
}
else if (mod == 3 ){
  return "Blossom"
}
}

$("#button").click(function(){
  var name = $("input").val()
  var house = sortingHat(name);
  $("#output").html("<h1>" + house + "</h1>");
})