//taking section from html
const section = document.querySelector(".questions");
// addding a eventListener
section.addEventListener("click", clickHandler);
// storing the answers
let userAnsList = [];
// making a function name ClickHandler
function clickHandler(e) {
  if (e.target.nodeName.toLowerCase() === "li") {
    const qNum = +e.path[1].id;
    userAnsList[qNum] = e.target.innerHTML;
    console.log(userAnsList);
    e.target.classList.toggle("selectedAns");
  }
}

//  forEach can only be used in case of arrays
questionList.forEach((question, index) => {
  if (question.questionBody == "") {
    return;
  }
  section.innerHTML += `
  <section class="question" id="question${index}">
  <p>Q${index + 1}. ${question.questionBody}</p>
  <div id=${index}>
      <input value="q${index}o0" id="q${index}o1" type="radio" name="${index}" />
      <label for="q${index}o0">${question.options[0]}</label>
      <br>
      <input value="q${index}o1" id="q${index}o1" type="radio" name="${index}" />
      <label for="q${index}o1">${question.options[1]}</label>
      <br>
      <input value="q${index}o2" id="q${index}o1" type="radio" name="${index}" />
      
      <label for="q${index}o2">${question.options[2]}</label>
  </div>
</section>
    `;
});
