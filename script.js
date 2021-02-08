// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  //start of password generation function

  function generatePassword(){

    // sets variable for password and verify meets length criteria
    var passwordlength = Number(prompt("Choose password length must be between 8-128 characters"));
   
    if( passwordlength  <8 || passwordlength >128) {
      alert("password must be between 8 and 128");
      location.reload()
    }
    else{
      //start of paramters for special characters

    var passwordLowercase = prompt("do you want your password to include lowercase yes or no");
    
    var passwordUppercase = prompt("do you want your password to include uppercase yes or no");

    var passwordNumerical = prompt("do you want you password to include numbers yes or no");

    var passwordSpecial = prompt("do you want your password to include special characters yes or no");

    var Lowercase = "abcdefghijklmnopqrstuvwxyz";

    var Uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    var Numerical = "0123456789";

    var Special = " !#$%&'()*+,-./:;<=>[^_`{|}~";

    var allTogether = "";
    }

    if (passwordLowercase === "yes") {
      allTogether += Lowercase;
    }
    if (passwordUppercase === "yes") {
      allTogether += Uppercase;
    }
    if (passwordNumerical === "yes") {
      allTogether += Numerical;
    }
    if(passwordSpecial === "yes") {
      allTogether += Special;
    }
    if(allTogether === "") {
      alert("password must have at least one critera!");
      location.reload()
    }
    
    var newpass ="";

    
    for (var i = 0; i < passwordlength; i++) {
      newpass += allTogether.charAt(Math.floor(Math.random() * allTogether.length));
    }
    return newpass
    
    }
      
  }

  


//prompts that show password length between 8-128
//another prompt that indicates lower, upper, numerical, and special characters when prompted
//must select at least one of the following
//when criteria meet standards either show password in a alert window or on page
//figure out how to random generate password from criteria selected 
// confirm how to prompt to the next prompt to the next line and save choicess made by user


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

