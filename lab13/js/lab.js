// index.js - purpose and description here
// Author: Your Name
// Date:

// Constants

// Functions

myTransport = ["Mini Cooper S", "skateboard", "walking", "rides from friends"];


// this is an example function and this comment tells what it doees and what parameters are passed to it.
myMainRide = {
  make: "Mini",
  model: "Mini Cooper S",
  color: "Chili Red",
  year: 2003,
  age: function(){
      return 2024 - this.year; }}


      document.writeln("Kinds of transport I use: ", myTransport, "</br>")

      document.writeln("My Main Ride: <pre>",
        JSON.stringify(myMainRide, null, '\t'), "</pre>" );