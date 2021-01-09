const section = document.querySelector(".questions");

questionList.forEach((question, index) => {
  section.innerHTML += ` 
<div class="question1">
<p>Q${index + 1} ${question.questionBody}</p>
<ol>
    <li>${question.options[0]}</li>
    <li>${question.options[1]}</li>
    <li>${question.options[2]}</li>
</ol>
</div>
`;
});
