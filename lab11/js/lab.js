// index.js - purpose and description here
// Author: Seven Mohamoud
// Date: 11/21/24

// Constants
// Functions
 // Function to sort characters of a string alphabetically
function sortString(inputString) {
  // Convert the string to an array, sort it, and join it back into a string
  return inputString.split('').sort().join('');
}

// Click event listener for the "Scramble Name" button
$("#submit").clickfunction() 
    // Get the value from the input field with id="user-name"
    const userName = $("#user-name").val().trim();

    // Check if the input is not empty
    if (userName) {
        // Scramble the user name by sorting the characters
        const userNameSorted = sortString(userName);

        // Display the scrambled name with a fun animation
        $("#output")
            .hide()  // Hide the previous output
            .html('<div class="text"><p>' + userNameSorted + '</p></div>')  // Insert the new sorted name
            .fadeIn(1000);  // Show it with a fade-in effect
    } else {
        // If the input is empty, show a playful message
        $("#output")
            .hide()
            .html('<div class="text"><p>Please enter your name to scramble it!</p></div>')
            .fadeIn(500);
    }

    // Clear the input field after the scramble
    $("#user-name").val('');