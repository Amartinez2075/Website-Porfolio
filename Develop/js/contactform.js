// Get the button and form elements
var showFormBtn = document.getElementById("showFormBtn");
var contactForm = document.getElementById("contactForm");

// Add event listener to show the contact form when the button is clicked
showFormBtn.addEventListener("click", function() {
  showFormBtn.style.display = "none"; // Hide the button
  contactForm.style.display = "block"; // Show the contact form
});

// Add event listener to handle form submission
document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent the form from submitting

  // Get the values from the form fields
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;
  
  // Create a new FormData object and append form data
  var formData = new FormData();
  formData.append("name", name);
  formData.append("email", email);
  formData.append("message", message);

  // Send form data to the server using fetch
  fetch("Develop\js\server.js", {
    method: "POST",
    body: formData
  })
  .then(function(response) {
    if (response.ok) {
      alert("Message sent successfully!");
      document.getElementById("contactForm").reset(); // Reset the form
    } else {
      alert("Failed to send message.");
    }
  })
  .catch(function(error) {
    alert("An error occurred while sending the message.");
    console.log(error);
  });
});
