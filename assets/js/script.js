const quizContainer = document.getElementById('quizgame');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');



function buildQuiz(){
const output = [];

quizQuestions.forEach( (currentQuestion, questionNumber) => {

   // variable to store list of answers 
   const answers = []; 

   for(letter in currentQuestion.answers){

    answers.push(
        `<label>
        <input type="radio" name="question${questionNumber}" value = ${letter}> : ${currentQuestion.answers[letter]}
        </label>`
    );
   }

   output.push(
    `<div class="question"> ${currentQuestion.question}</div>
    <div class="answers"> ${answers.join('')} </div>`
   );
}

);
quizContainer.innerHTML = output.join('');
}

function showResults(){}

// display quiz right away
buildQuiz();

// on submit, show results
submitButton.addEventListener('click', showResults);