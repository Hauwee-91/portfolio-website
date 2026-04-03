document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  document.getElementById("message").textContent = 
    "Message sent successfully! (Demo only)";

  this.reset();
});