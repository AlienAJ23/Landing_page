// JavaScript functionality if needed
// For example, form validation
const form = document.getElementById('contactForm');

form.addEventListener('submit', function(event) {
  const emailField = document.getElementById('email');
  const emailValue = emailField.value;

  if (!isValidEmail(emailValue)) {
    event.preventDefault();
    alert('Please enter a valid email address.');
  }
});

function isValidEmail(email) {
  // Regular expression to check email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
