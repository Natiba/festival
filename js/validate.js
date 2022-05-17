// Validate Form

(function() {
    var myForm = document.getElementsByName('myForm')[0],
     button = document.getElementById('btn');
  
     const validateName = function(e) {
       if(myForm.firstName.value == 0) {
         alert("Please, complete the name field");
         e.preventDefault();
       }
     };
  
     const validateLastname = function(e) {
      if(myForm.lastName.value == 0) {
        alert("Please, complete the last name field");
        e.preventDefault();
      }
    };
  
    const validateEmail = function(e) {
      if(myForm.mail.value == 0) {
        alert("Please, complete the mail field");
        e.preventDefault();
      }
    };
  
    const validatePassword = function(e) {
      if(myForm.password.value == 0) {
        alert("Please, complete the password field");
        e.preventDefault();
      }
    };
  
    const validateCity = function(e) {
      if(myForm.city.value == 0) {
        alert("Please, complete the city field");
        e.preventDefault();
      }
    };
  
    const validateZip = function(e) {
      if(myForm.zip.value == 0) {
        alert("Please, complete the zip code field");
        e.preventDefault();
      }
    };
  
    var validateCheckbox = function(e){
      if (myForm.gridCheck.checked == false){
          alert("Accept 'Check me out'");
          e.preventDefault();
      }
  };
  
     const validate = function(e){
      validateName(e);
      validateLastname(e);
      validateEmail(e);
      validatePassword(e);
      validateCity(e);
      validateZip(e);
      validateCheckbox(e);
  };
  myForm.addEventListener("submit", validate);
  }());