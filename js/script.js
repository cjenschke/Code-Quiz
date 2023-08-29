var startButton = document.querySelector(".start-button");
// var exitButton = ducument.querySelector(".exit-button");



var questions = [
    { question: "What is a function", responses: ["Resuable code", "Primitive value", "None of the above"], answer: 0 },
    { question: "What is an array", responses: ["123", "1234", "None of the above"], answer: 2 },
    { question: "What is a primtivie value ", responses: ["123", "1234", "None of the above"], answer: 2 },
    { question: "What is the abbreviation JSON", responses: ["JASON", "Javascript notation object", "None of the abover"], answer: 1 },
];


startButton.onclick = () => {
    console.log("click")
};

function startGame() {


}

function startTimer() {


}

// Navigate through list of questions
function navigate(direction) {
    index = index + direction;
    // If you try to navigate 'back' from the start
    // Go to last image/question
    if (index < 0) {
        index = images.length - 1;

        // If you are at the very end. 
        // Go to the first image/question
    } else if (index > images.length - 1) {
        index = 0;
    }

    // Render the question
    renderQuestion()
    // render the answer
    renderAnswers()
}
// renders the question
function renderQuestion() {
    console.log(questions[index].question)
}

function renderAnswers() {
    var questionObject = {
        "question": "what is an array",
        "responses": [

        ]
    }
    console.log(questions[index].responses)
}

