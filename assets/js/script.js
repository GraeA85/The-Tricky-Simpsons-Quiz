//variables to show questions and on html document - questions stored in variable within questions.js file //
let answerA = document.getElementById('a');
let answerB = document.getElementById('b');
let answerC = document.getElementById('c');
let answerD = document.getElementById('d');
let mainQuestions = document.getElementById('main-questions');
let questionIndex = 0;
const answers = document.querySelectorAll('.answer-box');
let next = document.getElementById('next-question');


// gets question from variable in questions.js and shows on screen //
function showQuestion() {
    mainQuestions.innerHTML = quizQuestions[questionIndex].question;
    answerA.innerHTML = quizQuestions[questionIndex].answers[0];
    answerB.innerHTML = quizQuestions[questionIndex].answers[1];
    answerC.innerHTML = quizQuestions[questionIndex].answers[2];
    answerD.innerHTML = quizQuestions[questionIndex].answers[3];
    resetOptionStyle();
}

// reset answers to normal state on new question - some code based on quiz game building from https://gamedevacademy.org/javascript-quiz-tutorial/ //
function resetOptionStyle() {
    let answerBoxes = document.getElementsByClassName('answer-box');
    for (var i=0; i < answerBoxes.length; i++) {
        answerBoxes[i].style.backgroundColor = "transparent";
        answerBoxes[i].style.pointerEvents = "auto";
        answerBoxes[i].style.color = "black";
    }
}
// takes user to next question, if available //
function nextQuestion() {

    if (questionIndex < quizQuestions.length - 1) {
        questionIndex = questionIndex + 1;
        showQuestion();

    } else {
        // Game complete, woohoo! //
        mainQuestions.innerHTML = "<h1 id='game-over'>Game Complete!</h1>";
        document.getElementById('answers').style.display = 'none';
        next.style.display = 'none';
        addEventListener('keypress', reloadGame);

    }

}

function reloadGame() {
    window.location.reload();
}
// adds a score to correct score //
function incrementCorrectAnswer () {
    let addScoreCount = parseInt(document.getElementById("correct_answers").innerText);
    document.getElementById("correct_answers").innerText = addScoreCount + 1;
}
// adds a score to the incorrect score //
function incrementWrongAnswer () {
    let wrongAnswerCount = parseInt(document.getElementById("incorrect_answers").innerText);
    document.getElementById("incorrect_answers").innerText = wrongAnswerCount + 1;
}
// prevents the selection of a second answer //
function disableOptions() {
    let answerBoxes = document.getElementsByClassName('answer-box');
    for (var i=0; i < answerBoxes.length; i++) {
        answerBoxes[i].style.pointerEvents = "none";
    }
}
// scoring system - code from Code Institute module //
function onOptionClick(event) {
    disableOptions();
    const eventTarget = event.target;
    const selectedAnswer = eventTarget.innerText;
    if (selectedAnswer === quizQuestions[questionIndex].correctAnswer) {
        incrementCorrectAnswer();
        eventTarget.style.backgroundColor = "green";
        eventTarget.style.color = "black";
    } else {
        incrementWrongAnswer();
        eventTarget.style.backgroundColor = "red";
    }
}

function initEventListeners() {
    answers.forEach(function (answer) {
        answer.onclick = onOptionClick;
    });

    next.addEventListener('click', nextQuestion);
    addEventListener('keypress', nextQuestion);
}

function beginGame() {
    initEventListeners();
    showQuestion();
}

beginGame();