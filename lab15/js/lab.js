// index.js - purpose and description here
// Author: Your Name
// Date:

// Constants

// Functions

function getYesNoResponse() {
  // Fetch the data from the YesNo API
  fetch('https://yesno.wtf/api')
      .then(response => response.json())
      .then(data => {
          // Display the response and the image
          document.getElementById('response').innerText = data.answer.charAt(0).toUpperCase() + data.answer.slice(1);
          document.getElementById('yesnoImage').src = data.image;
      })
      .catch(error => {
          console.error('Error:', error);
          document.getElementById('response').innerText = 'Sorry, something went wrong.';
      });
}