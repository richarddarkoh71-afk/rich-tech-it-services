document.addEventListener("DOMContentLoaded", () => {
  const yearElement = document.getElementById("year");
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  const contactForm = document.querySelector(".contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
      event.preventDefault();
      alert("Thanks! Your request has been received. We will contact you soon.");
      contactForm.reset();
    });
  }
});