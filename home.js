window.onload=function(){
var form = document.querySelector('#register-form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  var name = form.elements['name'].value;
  var email = form.elements['email'].value;
  var password = form.elements['password'].value;
  var confirmPassword = form.elements['confirm-password'].value;
  var age = form.elements['age'].value;
  
  

  // Password validation
  var passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  if (!passwordRegex.test(password)) {
    alert('Password should contain at least 8 characters, one special character, and one uppercase varter');
    return;
  }

  // Email validation
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert('Email format is invalid');
    return;
  }

  // Confirm password validation
  if (password !== confirmPassword) {
    alert('Passwords do not match');
    return;
  }

  // Store entered fields in a JSON object
  var data = {
    name,
    email,
    password,
    age,
  };

  console.log(data);
});

}