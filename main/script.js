function validateForm() {
    let username = document.getElementById('username').value;
    let email = document.getElementById('email').value;
    let phoneNumber = document.getElementById('phoneNumber').value;
  
    // Username validation
    let usernameError = document.getElementById('usernameError');
    if (username.length < 7) {
      usernameError.textContent = 'Username should be at least 7 characters';
    } else {
      usernameError.textContent = '';
    }
  
    // Email validation
    let emailError = document.getElementById('emailError');
    if (!email.includes('@')) {
      emailError.textContent = 'Please enter a valid email address';
    } else {
      emailError.textContent = '';
    }
  
    // Phone number validation
    let phoneNumberError = document.getElementById('phoneNumberError');
    if (phoneNumber.length !== 10 || isNaN(phoneNumber)) {
      phoneNumberError.textContent = 'Phone number should contain 10 numeric characters';
    } else {
      phoneNumberError.textContent = '';
    }
  
    // If all validations pass, clear the fields
    if (username.length >= 7 && email.includes('@') && phoneNumber.length === 10 && !isNaN(phoneNumber)) {
      document.getElementById('username').value = '';
      document.getElementById('email').value = '';
      document.getElementById('phoneNumber').value = '';
      document.getElementById('bestTime').value = '';
      document.getElementById('message').value = '';
      
      usernameError.textContent = '';
      emailError.textContent = '';
      phoneNumberError.textContent = '';
  
      console.log('Form submitted successfully!');
    }
  }
  