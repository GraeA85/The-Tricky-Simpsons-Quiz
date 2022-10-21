//Variable containing quiz questions and answers//
const quizQuestions = [{
        question: "What is Comic Book Guy's real name?",
        answers: ["Clark Thompson", "Herschel Krustowsky", "Jeffrey Albertson", "Tom McNeil"],
        correctAnswer: "Jeffrey Albertson"
    },
    {
        question: "What was the name of Grampa's military unit in World War 2?",
        answers: ["The Flying Hellfish", "The Savage Shellfish", "The Tussle Tanks", "The Subpar Subbers"],
        correctAnswer: "The Flying Hellfish"
    },
    {
        question: "What is the password Mr Burns uses to enter his panic room?",
        answers: ["Nantucket", "Shelbyville", "Pangea", "Ogdenville"],
        correctAnswer: "Pangea"
    },
    {
        question: "What is the Crazy Cat Lady's real name?",
        answers: ["Susan Diamond", "Francine Cauldron", "Gertrude Fronch", "Eleanor Abernathy"],
        correctAnswer: "Eleanor Abernathy"
    },
    {
        question: "What is the surname of Groundskeeper Willie?",
        answers: ["McArthur", "MacDonald", "McKenzie", "MacDougal"],
        correctAnswer: "MacDougal"
    },
    {
        question: "What is the name of the University Moe attended?",
        answers: ["Drinkston University", "Swigmore University", "Chugsville University", "He didn't attend University"],
        correctAnswer: "Swigmore University"
    },
    {
        question: "What is the pet name of the car driven by Snake?",
        answers: ["Red Rooster", "King Cobra", "Canyonero", "Lil' Bandit"],
        correctAnswer: "Lil' Bandit"
    },
    {
        question: "What was the name of the drug given to Bart when he was diagnosed with ADHD?",
        answers: ["Adderall", "ADHD-be gone", "Focusmore", "Focusyn"],
        correctAnswer: "Focusyn"
    },
    {
        question: "Who is the head of the Springfield Historical Society?",
        answers: ["Hollis Hurlbut", "Colin Chowder", "Professor Frink", "Chester Springfield"],
        correctAnswer: "Hollis Hurlbut"
    },
    {
        question: "What was the brand of TV Homer had when he was a child?",
        answers: ["The Panaphonic", "Carnivale", "The Radiation King", "Magnetbox"],
        correctAnswer: "The Radiation King"
    },
    {
        question: "What is the name of the therapist Marge sees to help with her fear of flying?",
        answers: ["Lowenstein", "Bancroft", "Zweig", "Lionheart"],
        correctAnswer: "Zweig"
    },
    {
        question: "What job did Ned Flanders have before he owned the Leftorium?",
        answers: ["Gardener", "Barber", "Pharmaceutical Representative", "Church organist"],
        correctAnswer: "Pharmaceutical Representative"
    },
    {
        question: "How did Poochie die?",
        answers: ["He accidently ate chocolate", "Itchy and Scratchy disembowled him", " He was ran over by a steamroller", "He died on the way back to his home planet"],
        correctAnswer: "He died on the way back to his home planet"
    },
    {
        question: "Who destroys Homer's Internet company? (Compu-Global-Hyper-Mega-Net)",
        answers: ["Steve Jobs", "Bill Gates", "Mark Zuckerberg", "Bumblebee Man"],
        correctAnswer: "Bill Gates"
    },
    {
        question: "Bart has a middle name beginning with J, what is it?",
        answers: ["Jay", "Juju", "Jojo", "Jebediah"],
        correctAnswer: "Jojo"
    }
];

let answerA = document.getElementById("a");
let answerB = document.getElementById("b");
let answerC = document.getElementById("c");
let answerD = document.getElementById("d");
let mainQuestions = document.getElementById('main-questions');
let questionIndex = 0;
const answers = document.querySelectorAll('.answer-box');
let next = document.getElementById('next-question');

shuffle(quizQuestions);

// gets questions stored in variable in questions.js and shows on screen //
function showQuestion() {
    mainQuestions.innerHTML = quizQuestions[questionIndex].question;
    answerA.innerHTML = quizQuestions[questionIndex].answers[0];
    answerB.innerHTML = quizQuestions[questionIndex].answers[1];
    answerC.innerHTML = quizQuestions[questionIndex].answers[2];
    answerD.innerHTML = quizQuestions[questionIndex].answers[3];
    resetOptionStyle();
}

// shuffles questions and answers from quizQuestions - fisher-yates shuffle - https://www.geeksforgeeks.org/shuffle-a-given-array-using-fisher-yates-shuffle-algorithm/ and wikipedia https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle //
function shuffle(array) {

    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// reset answer boxes to normal state on new question - code based on quiz game building from https://gamedevacademy.org/javascript-quiz-tutorial/ and advice from slack and stack overflow //
function resetOptionStyle() {
    let answerBoxes = document.getElementsByClassName('answer-box');
    for (var i = 0; i < answerBoxes.length; i++) {
        answerBoxes[i].style.backgroundColor = "#70D1FE";
        answerBoxes[i].style.color = "black";
        answerBoxes[i].style.pointerEvents = "auto";
    }
}

// takes user to next question, unless at end then game complete is shown//
function nextQuestion() {

    if (questionIndex < quizQuestions.length - 1) {
        questionIndex = questionIndex + 1;
        showQuestion();
    } else {
        // Game complete, woohoo! //
        mainQuestions.innerHTML = "<h1 id='game_end'>Game Complete!</h1>";
        document.getElementById('answers').style.display = 'none';
        next.style.display = 'none';
        addEventListener('keypress', reloadGame);
    }
}

// adds a score to correct answers score count - scoring system based on code institute modules (love maths)//
function incrementCorrectAnswer() {
    let addScoreCount = parseInt(document.getElementById("correct_answers").innerText);
    document.getElementById("correct_answers").innerText = addScoreCount + 1;
}

// adds a score to the incorrect score count //
function incrementWrongAnswer() {
    let wrongAnswerCount = parseInt(document.getElementById("incorrect_answers").innerText);
    document.getElementById("incorrect_answers").innerText = wrongAnswerCount + 1;
}

// prevents the selection of a second answer //
function disableOptions() {
    let answerBoxes = document.getElementsByClassName('answer-box');
    for (var i = 0; i < answerBoxes.length; i++) {
        answerBoxes[i].style.pointerEvents = "none";
    }
}

// scoring system - code from Code Institute module (love maths)//
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

// event listener for answer selection //
function initEventListeners() {
    answers.forEach(function (answer) {
        answer.onclick = onOptionClick;
    });

    //next prevents the question selection skipping to next question - user must click the next button //
    next.addEventListener('click', nextQuestion);
    addEventListener('keypress', nextQuestion);
}

function beginGame() {
    initEventListeners();
    showQuestion();
}

beginGame();
//module exports for jest testing//
module.exports = {
    beginGame,
    showQuestion,
    initEventListeners,
    incrementCorrectAnswer,
    incrementWrongAnswer,
    shuffle,
    showQuestion,
    resetOptionStyle,
    disableOptions,
};