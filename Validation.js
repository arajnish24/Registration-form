// script.js

// Get form and input elements
const form = document.getElementById('registrationForm');
const fullName = document.getElementById('fullName');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const age = document.getElementById('age');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');

// Error display function
function showError(id, message) {
  document.getElementById(id).textContent = message;
}

function clearError(id) {
  document.getElementById(id).textContent = '';
}

// Validation functions
function validateName() {
  if (fullName.value.trim().length < 5) {
    showError('nameError', 'Name must be at least 5 characters');
    return false;
  }
  clearError('nameError');
  return true;
}

function validateEmail() {
  if (!email.value.includes('@')) {
    showError('emailError', 'Enter a valid email with @');
    return false;
  }
  clearError('emailError');
  return true;
}

function validatePhone() {
  const phoneValue = phone.value.trim();
  if (
    phoneValue.length !== 10 ||
    isNaN(phoneValue) ||
    phoneValue === '123456789'
  ) {
    showError('phoneError', 'Enter a valid 10-digit phone number');
    return false;
  }
  clearError('phoneError');
  return true;
}

function validateAge() {
  if (age.value < 1 || age.value > 100) {
    showError('ageError', 'Enter a valid age between 1 and 100');
    return false;
  }
  clearError('ageError');
  return true;
}

function validateGender() {
  const genderSelected = document.querySelector('input[name="gender"]:checked');
  if (!genderSelected) {
    showError('genderError', 'Please select your gender');
    return false;
  }
  clearError('genderError');
  return true;
}

function validatePassword() {
  const pwd = password.value;
  const nameVal = fullName.value.toLowerCase();

  if (
    pwd.length < 8 ||
    pwd.toLowerCase() === 'password' ||
    pwd.toLowerCase() === nameVal.toLowerCase()
  ) {
    showError('passwordError', 'Password is not strong enough');
    return false;
  }
  clearError('passwordError');
  return true;
}

function validateConfirmPassword() {
  if (confirmPassword.value !== password.value) {
    showError('confirmPasswordError', 'Passwords do not match');
    return false;
  }
  clearError('confirmPasswordError');
  return true;
}

// Live validation
fullName.addEventListener('input', validateName);
email.addEventListener('input', validateEmail);
phone.addEventListener('input', validatePhone);
age.addEventListener('input', validateAge);
password.addEventListener('input', validatePassword);
confirmPassword.addEventListener('input', validateConfirmPassword);
document.querySelectorAll('input[name="gender"]').forEach(input => {
  input.addEventListener('change', validateGender);
});

// Final form submission validation
form.addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent default submission

  const isValid =
    validateName() &&
    validateEmail() &&
    validatePhone() &&
    validateAge() &&
    validateGender() &&
    validatePassword() &&
    validateConfirmPassword();

  if (isValid) {
    alert('Form submitted successfully!');
    form.reset();
  } else {
    alert('Please fix errors in the form!');
  }
});
