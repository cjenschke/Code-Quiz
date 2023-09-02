// Variables
let currentQuestion = 0;
let score = 0;
let timeLeft = 60;
let timerInterval;
let highScore = 0;
let finalScore = score;


// Elements
const startButton = document.getElementById("start-btn");
const startOverBtn = document.getElementById('start-over-btn');
const questionElement = document.getElementById("question");
const choicesElement = document.getElementById("choices");
const highScoreElement = document.getElementById("high-score");
const scoreElement = document.getElementById('current-score');
const h1Element = document.querySelector('h1');
const messageElement = document.getElementById('message');
let highScoreDisplay = localStorage.getItem('highScore');
let savedInitials = localStorage.getItem('initials');

const timerDisplay = document.getElementById('current-time');

const quizData = [
    {
        question: 'What is JavaScript used for?',
        choices: ['Create dynamic content for websites.', 'Coffee label for customer orders.', 'To style and layout web pages.', 'To structure a web page and its content.'],
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
    },
    {
        question: 'Do you think this quiz was fun?',
        choices: ['No', 'Yes', 'If I win.', 'Not if I lose.'],
        corectAnswer: 'If I win.'
    },
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
    scoreElement.textContent = score;
}

function startTimer() {
    timerInterval = setInterval(() => {
        timeLeft--;
        timerDisplay.textContent = timeLeft;
        if (timeLeft === 0) {
            clearInterval(timerInterval);
            endQuiz();
        }
    }, 1000);
}

function stopTimer() {
    clearInterval(timerInterval);
    console.log('timer stopped');
}

function subtractTime() {
    timeLeft = timeLeft - 10;
    // Update the timer display on the UI
    const timerDisplay = document.getElementById('current-time');
    timerDisplay.textContent = timeLeft;
}

function resetGame() {
    score = 0;
    startQuiz();

}

function endQuiz() {
    stopTimer();
    h1Element.textContent = 'Game Over';
    document.getElementById("score-display").textContent = "Your score " + score;
    let initials = prompt("Enter your initials:");
    // let finalScore = score;
    localStorage.setItem('initials', initials);
    // localStorage.setItem('high score', 'highScore');
    if (score > highScore) {
        highScore = score;
        highScoreElement.textContent = highScore;
        localStorage.setItem('highScore', highScore);

        // highScoreElement.textContent = 'Your high score is' + highScore;
        highScoreElement.textContent = `${savedInitials}: ${highScore}`;
    }
    window.location.reload();
}



// Event listeners
startButton.addEventListener("click", startQuiz);
startOverBtn.addEventListener("click", function () {
    window.location.reload()
});

document.addEventListener('DOMContentLoaded', function () {
    highScoreElement.textContent = highScore;
    if (highScoreDisplay) {
        highScore = parseInt(highScoreDisplay);
        highScoreElement.textContent = `   ${savedInitials}    ${highScore}`;
    }
});
