const quizQuestions = [
    {
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
    question: "What is Groundskeeper Willies Surname?",
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
    question: "What job does Krusty the Clowns dad have?",
    answers: ["Carpenter", "Rabbi", "Organ shop owner", "Car salesman"],
    correctAnswer: "Rabbi"
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
    question: "Who destroys Homer's Internet company?",
    answers: ["Steve Jobs", "Bill Gates", "Mark Zuckerberg", "Bumblebee Man"],
    correctAnswer: "Bill Gates"
    },
    {
    question: "Bart has a middle name beginning with J, what is it?",
    answers: ["Jay", "Juju", "Jojo", "Jebediah"],
    correctAnswer: "Jojo"
    }
];

shuffle(quizQuestions);

function shuffle(array) {
    
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
       [array[i], array[j]] = [array[j], array[i]];
    }
}

module.exports = shuffle;