var containerQuestion = document.getElementById("container-question");
var containerAnswer = document.getElementById("container-answer");
var containerResult = document.getElementById("container-result");
var containerScore = document.getElementById("container-score");
var containerTimer = document.getElementById("container-timer");
var containerHighScore = document.getElementById("container-high-score");

// buttons 

var startButton = document.getElementById("start-button");
var answerButton = document.getElementById("answer-button");
var submitButton = document.getElementById("submit-button");


// variables

var questionIndex = 0;
var score = 0;
var timeLeft = 60;
var timerInterval;
var highScore = [];


// questions

var questions = [
    { 
        "question": "What is the HTML tag under which one can write the JavaScript code?",
        "answers": ["<javascript>", "<scripted>", "<script>", "<js>"],
        "correctAnswer": "<script>"
    },
    {
        "question": "Arrays are used to store what?",
        "answers": ["numbers and strings", "other arrays", "booleans", "all of the above"],
        "correctAnswer": "all of the above"
    },
    {
        "question": "What is a function?",
        "answers": ["a block of code designed to perform a particular task", "a variable", "a string", "a number"],
        "correctAnswer": "a block of code designed to perform a particular task"
    },
    {
    "question": "What syntax would call a function?",
    "answers": ["function()", "function[]", "function{}", "function(){}"],
        "correctAnswer": "function()"
    },
    {
        "question": "Where is the correct place to insert a JavaScript?",
        "answers": ["the <head> section", "the <body> section", "both the <head> section and the <body> section are correct", "neither the <head> section nor the <body> section"],
        "correctAnswer": "both the <head> section and the <body> section are correct"
    },
    {
        "question": "How do you write 'Hello World' in an alert box?",
        "answers": ["alertBox('Hello World');", "msg('Hello World');", "alert('Hello World');", "msgBox('Hello World');"],
        "correctAnswer": "alert('Hello World');"
    },

];

// start button

startButton.addEventListener("click", function () {
    containerQuestion.style.display = "block";
    containerAnswer.style.display = "block";
    containerResult.style.display = "block";
    containerScore.style.display = "block";
    containerTimer.style.display = "block";
    containerHighScore.style.display = "none";
    startButton.style.display = "none";
    answerButton.style.display = "block";
    submitButton.style.display = "none";
    startTimer();
    displayQuestion();
});

// answer button

answerButton.addEventListener("click", function () {
    displayQuestion();
    

}
    