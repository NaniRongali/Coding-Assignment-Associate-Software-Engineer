function validateForm() {

  var isValid = true; 
  
  if (isValid) {
      showPopup();
  }
}

function showPopup() {
 
  var firstName = document.getElementById('firstName').value;
  var lastName = document.getElementById('lastName').value;
  var dob = document.getElementById('dob').value;
  var country = document.getElementById('country').value;
  var gender = document.getElementById('male').checked ? "Male" : "Female";
  var profession = document.getElementById('profession').value;
  var email = document.getElementById('email').value;
  var mobile = document.getElementById('mobile').value;
 
  var popupContent = "<strong>First Name:</strong> " + firstName + "<br>" +
                     "<strong>Last Name:</strong> " + lastName + "<br>" +
                     "<strong>Date of Birth:</strong> " + dob + "<br>" +
                     "<strong>Country:</strong> " + country + "<br>" +
                     "<strong>Gender:</strong> " + gender + "<br>" +
                     "<strong>Profession:</strong> " + profession + "<br>" +
                     "<strong>Email:</strong> " + email + "<br>" +
                     "<strong>Mobile Number:</strong> " + mobile;
  document.getElementById('popupContent').innerHTML = popupContent;
  document.getElementById('popup').style.display = 'flex';
}

function resetForm() {

  document.getElementById('surveyForm').reset();
}

function closePopup() {
 
  document.getElementById('popup').style.display = 'none';
  resetForm();
}
