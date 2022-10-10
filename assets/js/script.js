let answerA = document.getElementById('a');
let answerB = document.getElementById('b');
let answerC = document.getElementById('c');
let answerD = document.getElementById('d');
let mainQuestions = document.getElementById('main-questions');
let questionIndex = 0;
const answers = document.querySelectorAll('.answer-box');
let next = document.getElementById('next-question');

function showQuestion() {
    mainQuestions.innerHTML = quizQuestions[questionIndex].question;
    answerA.innerHTML = quizQuestions[questionIndex].answers[0];
    answerB.innerHTML = quizQuestions[questionIndex].answers[1];
    answerC.innerHTML = quizQuestions[questionIndex].answers[2];
    answerD.innerHTML = quizQuestions[questionIndex].answers[3];
    resetOptionStyle();
}

// function to reset question to normal state after user gives answer
function resetOptionStyle() {
    let answerBoxes = document.getElementsByClassName('answer-box');
    for (var i=0; i < answerBoxes.length; i++) {
        answerBoxes[i].style.backgroundColor = "transparent";
        answerBoxes[i].style.pointerEvents = "auto";
        answerBoxes[i].style.color = "black";
    }
}

function showNextQuestion() {

    if (questionIndex < quizQuestions.length - 1) {
        questionIndex = questionIndex + 1;
        showQuestion();

    } else {
        // Game complete, woohoo!
        mainQuestions.innerHTML = "<h1 id='game-over'>Game Complete!</h1>";
        document.getElementById('answers').style.display = 'none';
        next.style.display = 'none';
        addEventListener('keypress', reloadGame);

    }

}

function reloadGame() {
    window.location.reload();
}

function incrementCorrectAnswer () {
    let addScoreCount = parseInt(document.getElementById("correct_answers").innerText);
    document.getElementById("correct_answers").innerText = addScoreCount + 1;
}

function incrementWrongAnswer () {
    let wrongAnswerCount = parseInt(document.getElementById("incorrect_answers").innerText);
    document.getElementById("incorrect_answers").innerText = wrongAnswerCount + 1;
}

function disableOptions() {
    let answerBoxes = document.getElementsByClassName('answer-box');
    for (var i=0; i < answerBoxes.length; i++) {
        answerBoxes[i].style.pointerEvents = "none";
    }
}

function onOptionClick(event) {
    disableOptions();
    const eventTarget = event.target;
    const selectedAnswer = eventTarget.innerText;
    if (selectedAnswer === quizQuestions[questionIndex].correctAnswer) {
        incrementCorrectAnswer();
        eventTarget.style.backgroundColor = "#49ff15";
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

    next.addEventListener('click', showNextQuestion);
    addEventListener('keypress', showNextQuestion);
}

function beginGame() {
    initEventListeners();
    showQuestion();
}

beginGame();