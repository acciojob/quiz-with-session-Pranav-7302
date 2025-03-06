// Do not change code below this line
const questions = [
  {
    question: "What is the capital of France?",
    choices: ["Paris", "London", "Berlin", "Madrid"],
    answer: "Paris",
  },
  {
    question: "What is the highest mountain in the world?",
    choices: ["Everest", "Kilimanjaro", "Denali", "Matterhorn"],
    answer: "Everest",
  },
  {
    question: "What is the largest country by area?",
    choices: ["Russia", "China", "Canada", "United States"],
    answer: "Russia",
  },
  {
    question: "Which is the largest planet in our solar system?",
    choices: ["Earth", "Jupiter", "Mars","Saturn"],
    answer: "Jupiter",
  },
  {
    question: "What is the capital of Canada?",
    choices: ["Toronto", "Montreal", "Vancouver", "Ottawa"],
    answer: "Ottawa",
  },
];

// Display the quiz questions and choices
function renderQuestions() {
  const quizContainer = document.getElementById("questions"); // Get the container div

  for (let i = 0; i < questions.length; i++) {
    const question = questions[i];
    const questionElement = document.createElement("div"); // Create div for each question
    questionElement.classList.add("question-block"); // Optional styling class

    const questionText = document.createElement("p"); // Create <p> for question text
    questionText.textContent = question.question;
    questionElement.appendChild(questionText);

    for (let j = 0; j < question.choices.length; j++) {
      const choice = question.choices[j];

      const choiceLabel = document.createElement("label"); // Create label for radio button
      const choiceElement = document.createElement("input"); // Create radio button

      choiceElement.setAttribute("type", "radio");
      choiceElement.setAttribute("name", `question-${i}`);
      choiceElement.setAttribute("value", choice);

      choiceLabel.appendChild(choiceElement);
      choiceLabel.appendChild(document.createTextNode(choice)); // Text next to radio

      questionElement.appendChild(choiceLabel);
      questionElement.appendChild(document.createElement("br")); // Line break for spacing
    }

    quizContainer.appendChild(questionElement); // Append question div to main container
  }
}

renderQuestions();

let submitBtn = document.getElementById("submit");
let result = document.getElementById("score");

submitBtn.addEventListener("click", function (e) {
      e.preventDefault()
      let score = 0;
      let total = questions.length;
      let answers = document.querySelectorAll("input[type='radio']:checked");
      if (answers.length < total) {
        alert("Please answer all questions before submitting.");
        return;
      }
      for (let i = 0; i < answers.length; i++) {
        if (answers[i].value === questions[i].answer) {
          score++;
          answers[i].parentElement.style.color = "green";
        }
        else {
          answers[i].parentElement.style.color = "red";
        }
      }
      result.textContent = `Your score is ${score} out of ${total}`;
      result.style.display = "block";


});


document.addEventListener("change", function (e) {
  if (e.target.type === "radio") {
    sessionStorage.setItem(e.target.name, e.target.value); 
  }
});
function restoreAnswers() {
  let allRadios = document.querySelectorAll("input[type='radio']");

  allRadios.forEach((radio) => {
    let savedAnswer = sessionStorage.getItem(radio.name); // Get saved answer
    if (savedAnswer && radio.value === savedAnswer) {
      radio.checked = true; // Set saved answer as checked
    }
  });
}

// Call function when page loads
restoreAnswers();
