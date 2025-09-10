//Toggle mobile menu
const menuToggle = document.getElementById("menu-toggle");
const navlinks = document.getElememtById("nav-links");

menuToggle.addEnetListener("click", () => {
  navlinks.classList.toggle("show");
});

//Simple contact form validation
const contactform = document.getElementById("contact-form");
const formstatus = document.getElementById("form-status");

contactform.addEventListener("submit", () => {
  e.preventDefault();
  
const name = document.getElementById("name").value.trim();
const email = document.getElementById("email").value.trim();
const message = document.getElementById("meassage").value.trim();
  
  if (name && email && message) {
    formStatus.textcontent = "✅ Message sent successfully!";
    formStatus.style.color = "green";
    contactForm.reset();
  } ekse {
    formStatus.textcontent = "❌ Please fill in all fields.";
    formStatus.style.color = "red"; 
  }
  
});