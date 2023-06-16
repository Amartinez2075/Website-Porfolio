var showFormBtn = document.getElementById("showFormBtn");
var contactForm = document.getElementById("contactForm");

showFormBtn.addEventListener("click", function() {
  showFormBtn.style.display = "none";
  contactForm.style.display = "block";
});

document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent the form from submitting

  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;
  
  var formData = new FormData();
  formData.append("name", name);
  formData.append("email", email);
  formData.append("message", message);

  fetch("contact.php", {
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