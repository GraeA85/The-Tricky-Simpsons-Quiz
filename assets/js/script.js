//variables linked to html elements in game.html
const quizContainer = document.getElementById('quizgame');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

function buildQuiz(){
const output = [];

quizQuestions.forEach( (currentQuestion, questionNumber) => {

   // variable to store list of answers 
   const answers = []; 

   // adds a html radio button for each answer
   for(letter in currentQuestion.answers){

    answers.push(
        `<label>
        <span><input type="radio" name="question${questionNumber}" value = ${letter}> ${currentQuestion.answers[letter]}
        </label></span>`
    );
   }

    output.push(
    `<div class="slide">
      <div class="question"> ${currentQuestion.question} </div>
      <div class="answers"> ${answers.join("")} </div>
    </div>`
  );

}

);
quizContainer.innerHTML = output.join('');
}

function showResults(){
// get the current selected answers from quiz questions    
const answerContainers = quizContainer.querySelectorAll('.answers');

// Keep users score
let numCorrect = 0;

// loop through each question to pick the current selected answer
quizQuestions.forEach( (currentQuestion, questionNumber) => {

    const answerContainer = answerContainers[questionNumber];
    const selector = `input[name=question${questionNumber}]:checked`;
    const userAnswer = (answerContainer.querySelector(selector) || {}).value;

//correct answers
if(userAnswer === currentQuestion.correctAnswer){
    numCorrect++;

    answerContainers[questionNumber].style.color = 'lightgreen';
}
// incorrect or blank answers
else{
    answerContainers[questionNumber].style.color = 'red';
}

});

resultsContainer.innerHTML = `${numCorrect} out of ${quizQuestions.length}`;
}

function showSlide(n) {
    slides[currentSlide].classList.remove('active-slide');
    slides[n].classList.add('active-slide');
    currentSlide = n;
    if(currentSlide === 0){
      previousButton.style.display = 'none';
    }
    else{
      previousButton.style.display = 'inline-block';
    }
    if(currentSlide === slides.length-1){
      nextButton.style.display = 'none';
      submitButton.style.display = 'inline-block';
    }
    else{
      nextButton.style.display = 'inline-block';
      submitButton.style.display = 'none';
    }
    
  }

  function showNextSlide() {
    showSlide(currentSlide + 1);
  }
  
  function showPreviousSlide() {
    showSlide(currentSlide - 1);
      }

// display quiz right away
buildQuiz();

const previousButton = document.getElementById("previous");
const nextButton = document.getElementById("next");
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;


      showSlide(currentSlide);

// results are shown when quiz is submitted
submitButton.addEventListener('click', showResults);
previousButton.addEventListener("click", showPreviousSlide);
nextButton.addEventListener("click", showNextSlide);