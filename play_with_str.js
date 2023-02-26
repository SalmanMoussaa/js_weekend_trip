window.onload=function(){
function checkAge() {
    const birthYear = parseInt(document.getElementById("birth-year").value);
    const age = new Date().getFullYear() - birthYear;
    let isPrime = true;
    for (let i = 2; i < age; i++) {
      if (age % i === 0) {
        isPrime = false;
        break;
      }
    }
    const resultElement = document.getElementById("result");
    if (isPrime) {
      resultElement.innerHTML = `${age} is a prime number!`;
    } else {
      resultElement.innerHTML = `${age} is not a prime number.`;
    }
  }
  document.getElementById("btn").addEventListener("click",checkAge);
  class Course {
    constructor(name, code, instructor, credits) {
      this.name = name;
      this.code = code;
      this.instructor = instructor;
      this.credits = credits;
    }
  }

  function createCourse() {
    const name = document.getElementById("name").value;
    const code = document.getElementById("code").value;
    const instructor = document.getElementById("instructor").value;
    const credits = parseInt(document.getElementById("credits").value);
    const course = new Course(name, code, instructor, credits);
    const resultElement = document.getElementById("result2");
    resultElement.innerHTML = `Course created: ${JSON.stringify(course)}`;
  }
  document.getElementById("btn2").addEventListener("click",createCourse);
  //reversing number in a int 
  const form = document.getElementById("reverse-form");
  const resultDiv = document.getElementById("result3");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const inputString = document.getElementById("input-string").value;
    let reversedString = "";

    for (let i = 0; i < inputString.length; i++) {
      if (!isNaN(inputString[i])) {
        reversedString = inputString[i] + reversedString;
      } else {
        reversedString += inputString[i];
      }
    }

    resultDiv.textContent = `Reversed numbers string: ${reversedString}`;

  });
  function convert() {
    const inputString = document.getElementById("inputString").value;
    let consonantCount = 0;
    while (
      inputString[consonantCount] &&
      !["a", "e", "i", "o", "u"].includes(inputString[consonantCount].toLowerCase())
    ) {
      consonantCount++;
    }
    const result =
      inputString.substring(consonantCount) +
      inputString.substring(0, consonantCount) +
      "ay";
    document.getElementById("result4").innerText = `Result: ${result}`;
  }
  document.getElementById("btn3").addEventListener("click",convert);
}