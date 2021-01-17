//taking section from html
const section = document.querySelector(".questions");
const sumbit = document.querySelector("button");
const score = document.querySelector(".btn1");
let scoreValue = 0;
// addding a eventListener
sumbit.addEventListener("click", SubmitHandler);
// storing the answers
let userAnsList = ["", "", ""];
// making a function name ClickHandler

//  forEach can only be used in case of arrays
questionList.forEach((question, index) => {
  if (question.questionBody == "") {
    return;
  }
  section.innerHTML += `
  <div class="question" id="question${index}">
  <p>Q${index + 1}. ${question.questionBody}</p>
  <div id=${index}>
      <input value="${
        question.options[0]
      }" id="q${index}o0" type="radio" name="${index}" />
      <label for="q${index}o0">${question.options[0]}</label>
      <br>
      <input value="${
        question.options[1]
      }" id="q${index}o1" type="radio" name="${index}" />
      <label for="q${index}o1">${question.options[1]}</label>
      <br>
      <input value="${
        question.options[2]
      }" id="q${index}o2" type="radio" name="${index}" />
      
      <label for="q${index}o2">${question.options[2]}</label>
  </div>
</div>
  `;
});

function SubmitHandler() {
  let checkInput = document.querySelectorAll("input[type='radio']:checked");
  for (let i = 0; i < checkInput.length; i++) {
    userAnsList[i] = checkInput[i].value;
    if (userAnsList[i] === questionList[i].correctAns) {
      console.log("correct");
      scoreValue = scoreValue + 10;
    } else {
      console.log("Incorrect");
    }
  }
  score.innerText = `Score:${scoreValue}`;
}
