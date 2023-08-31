var startButton = document.querySelector(".start-button");
// var exitButton = ducument.querySelector(".exit-button");
var question = 0;

/*
    CODE EXAMPLE FOR MODULE 4:
    - REFERENCE activity 18 for how you get list of questions to render
    - Replace navigate method with version below.
*/

/*
    HTML REFERENCE
    <p id="question"></p>
    <ul id="responses"></ul>
*/

var questionElement = document.querySelector("#question");
var responseElement = document.querySelector("#responses");
// Generate your data/carousel
var questions = [
    { question: "What is a function", responses: ["Resuable code", "Primitive value", "None of the above"], answer: 0 },
    { question: "What is an array", responses: ["List of values", "Key value pairs", "None of the above"], answer: 2 },
    { question: "What is a primitive value ", responses: ["123", "1234", "None of the above"], answer: 2 },
    { question: "What is the abbreviation JSON", responses: ["JASON", "Javascript notation object", "None of the above"], answer: 1 },
];

startButton.addEventListener("click", renderQuestion);
startButton.addEventListener("click", renderAnswers);
// Navigate through list of questions
function navigate(direction) {
    index = index + direction;
    // If you try to navigate 'back' from the start
    // Go to last question
    if (index < 0) {
        index = images.length - 1;

        // If you are at the very end. 
        // Go to the first image/question
    } else if (index > images.length - 1) {
        index = 0;
    }

    // Render the question
    renderQuestion();
    // render the anser
    renderAnswers();
}

// renders the question
function renderQuestion() {
    // Update the html with the current question
    questionElement.textContent = questions[0].question;
}

function renderAnswers() {
    // Clears the html by settting innerHTML to an empty string.
    responseElement.innerHTML = "";
    for (var i = 0; i < questions[index].responses.length; i++) {
        console.log(questions[index].responses[i]);
        var li = document.createElement("li");
        li.textContent = questions[index].responses[i];
        questionResponseElement.appendChild(li);
    }
}

