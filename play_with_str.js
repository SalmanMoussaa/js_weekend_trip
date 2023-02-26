window.onload=function(){
function checkAge() {
    var birthYear = parseInt(document.getElementById("birth-year").value);
    var age = new Date().getFullYear() - birthYear;
    var isPrime = true;
    for (var i = 2; i < age; i++) {
      if (age % i === 0) {
        isPrime = false;
        break;
      }
    }
    var resultElement = document.getElementById("result");
    if (isPrime) {
      resultElement.innerHTML = `${age} is a prime number!`;
    } else {
      resultElement.innerHTML = `${age} is not a prime number.`;
    }
  }
  document.getElementById("btn").addEventListener("click",checkAge);
  class Course {
    varructor(name, code, instructor, credits) {
      this.name = name;
      this.code = code;
      this.instructor = instructor;
      this.credits = credits;
    }
  }

  function createCourse() {
    var name = document.getElementById("name").value;
    var code = document.getElementById("code").value;
    var instructor = document.getElementById("instructor").value;
    var credits = parseInt(document.getElementById("credits").value);
    var course = new Course(name, code, instructor, credits);
    var resultElement = document.getElementById("result2");
    resultElement.innerHTML = `Course created: ${JSON.stringify(course)}`;
  }
  document.getElementById("btn2").addEventListener("click",createCourse);
  //reversing number in a int 
  var form = document.getElementById("reverse-form");
  var resultDiv = document.getElementById("result3");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    var inputString = document.getElementById("input-string").value;
    var reversedString = "";

    for (var i = 0; i < inputString.length; i++) {
      if (!isNaN(inputString[i])) {
        reversedString = inputString[i] + reversedString;
      } else {
        reversedString += inputString[i];
      }
    }

    resultDiv.textContent = `Reversed numbers string: ${reversedString}`;

  });
  function convert() {
    var inputString = document.getElementById("inputString").value;
    var consonantCount = 0;
    while (
      inputString[consonantCount] &&
      !["a", "e", "i", "o", "u"].includes(inputString[consonantCount].toLowerCase())
    ) {
      consonantCount++;
    }
    var result =
      inputString.substring(consonantCount) +
      inputString.substring(0, consonantCount) +
      "ay";
    document.getElementById("result4").innerText = `Result: ${result}`;
  }
  document.getElementById("btn3").addEventListener("click",convert);
}