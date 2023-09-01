// Variables
let currentQuestion = 0;
let score = 0;
let timeLeft = 60;
let timerInterval;
let highScore = 0;

// Elements
const startButton = document.getElementById("start-btn");
const startOverBtn = document.getElementById('start-over-btn');
const questionElement = document.getElementById("question");
const choicesElement = document.getElementById("choices");
const highScoreElement = document.getElementById("high-score");
const scoreEl = document.getElementById('current-score');
const h1Element = document.querySelector('h1');
const messageElement = document.getElementById('message');

const quizData = [
    {
        question: 'What is JavaScript used for?',
        choices: ['Create dynamic content for websites.', 'Coffe label for customer orders.', 'To style and layout web pages.', 'To structure a web page and its content.'],
        correctAnswer: "Create dynamic content for websites."
    },
    {
        question: 'What is an array in JavaScript?',
        choices: ['A list of customer orders at coffee shop.', 'A type of global object that is used to store data.', 'A "named storage" for data.', '"Things" that happen to HTML elements.'],
        correctAnswer: "A type of global object that is used to store data."
    },
    {
        question: 'What does "addEventLister()" do?',
        choices: ['Attaches an event handler to the specified element.', 'Logs data to the console.', 'Records audio at an event.', 'All of the above.'],
        correctAnswer: 'Attaches an event handler to the specified element.'
    },
    {
        question: 'Choose what is not an HTML element.',
        choices: ['class name', 'id', 'tag name', 'function'],
        correctAnswer: 'function'
    }
];

// Functions
function startQuiz() {
    startButton.style.display = 'none';
    startOverBtn.style.display = 'block';
    showQuestion();
    startTimer();
}

function showQuestion() {
    const currentQuizData = quizData[currentQuestion];

    questionElement.textContent = currentQuizData.question;
    choicesElement.innerHTML = "";

    currentQuizData.choices.forEach((choice) => {
        const li = document.createElement("li");
        li.textContent = choice;
        li.addEventListener("click", selectAnswer);
        choicesElement.appendChild(li);
    });
}

function selectAnswer(event) {
    const selectedAnswer = event.target.textContent;
    const currentQuizData = quizData[currentQuestion];

    if (selectedAnswer === currentQuizData.correctAnswer) {
        score++;
        h1Element.textContent = 'Correct!';
        updateScore(score);
    } else {
        // messageElement.textContent = 'Wrong Answer!'
        h1Element.textContent = 'Wrong Answer!';
        subtractTime()
    }

    currentQuestion++;

    if (currentQuestion < quizData.length) {
        showQuestion();
    } else {
        endQuiz();
    }
}

function updateScore(score) {
    scoreEl.textContent = score;
}

function startTimer() {
    // Update the timer display on the UI
    const timerDisplay = document.getElementById('current-time');
    timerDisplay.textContent = timeLeft;

    // Start the countdown
    const countdown = setInterval(function () {
        timeLeft--;
        timerDisplay.textContent = timeLeft;

        // Check if the time is up
        if (timeLeft <= 0) {
            clearInterval(countdown);
            // Add code here to handle when the time is up
        }
    }, 1000);
}

function subtractTime() {
    timeLeft = timeLeft - 10;
    // Update the timer display on the UI
    const timerDisplay = document.getElementById('current-time');
    timerDisplay.textContent = timeLeft;
}

function endQuiz() {
    clearInterval(timerInterval);
    h1Element.textContent = 'Game Over';
    document.getElementById("score-display").textContent = "Your score " + score;

    const initials = prompt("Enter your initials:");
    const finalScore = score;

    // if (finalScore > highScore) {
    //     highScore = finalScore;
    //     highScoreElement.textContent = `${initials}: ${highScore}`;
    // }
}

// Event listeners
startButton.addEventListener("click", startQuiz);
startOverBtn.addEventListener("click", endQuiz);
