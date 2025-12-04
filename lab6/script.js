let questions = [
    {
        question: "What does HTML stand for?",
        options: ["Hyper Trainer Marking Language", "Hyper Text Markup Language", "Hyper Text Markdown Language", "Hyperlinking and Text Marking Language"],
        answer: "Hyper Text Markup Language"
    },
    {
        question: "Which language is used for styling web pages?",
        options: ["HTML", "CSS", "Python", "PHP"],
        answer: "CSS"
    },
    {
        question: "Which language is used for web scripting?",
        options: ["Java", "C++", "JavaScript", "Swift"],
        answer: "JavaScript"
    },
    {
        question: "What does CSS stand for?",
        options: ["Cascade Style Sheet", "Color Style Sheet", "Cascading Style Sheets", "Computer Style Sheet"],
        answer: "Cascading Style Sheets"
    }
];

let index = 0;
let score = 0;
let timer;
let timeLeft = 10;

// Shuffle questions
function shuffleQuestions() {
    questions.sort(() => Math.random() - 0.5);
}

// Timer function
function startTimer() {
    timeLeft = 10;
    document.getElementById("time").innerText = timeLeft;

    timer = setInterval(() => {
        timeLeft--;
        document.getElementById("time").innerText = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(timer);
            checkAnswer(null);
        }
    }, 1000);
}

// Display current question
function displayQuestion() {
    const q = questions[index];

    document.getElementById("question-text").innerText = q.question;
    const optionsDiv = document.getElementById("options");
    optionsDiv.innerHTML = "";

    q.options.forEach(option => {
        const btn = document.createElement("button");
        btn.innerText = option;
        btn.onclick = () => checkAnswer(option);
        optionsDiv.appendChild(btn);
    });

    document.getElementById("feedback").innerText = "";
    startTimer();
}

// Check selected answer
function checkAnswer(selected) {
    clearInterval(timer);

    const correctAnswer = questions[index].answer;
    const optionButtons = document.querySelectorAll("#options button");

    optionButtons.forEach(btn => {
        if (btn.innerText === correctAnswer) {
            btn.classList.add("correct");
        }
        if (selected && btn.innerText === selected && selected !== correctAnswer) {
            btn.classList.add("incorrect");
        }
    });

    if (selected === correctAnswer) {
        document.getElementById("feedback").innerText = "Correct!";
        score++;
    } else {
        document.getElementById("feedback").innerText = "Incorrect!";
    }
}

// Next question
function nextQuestion() {
    index++;
    if (index < questions.length) {
        displayQuestion();
    } else {
        endQuiz();
    }
}

// End quiz
function endQuiz() {
    document.getElementById("quiz-section").innerHTML =
        `<h2>Your Score: ${score} / ${questions.length}</h2>`;
}

// Start quiz
function startQuiz() {
    shuffleQuestions();
    displayQuestion();
}

startQuiz();
