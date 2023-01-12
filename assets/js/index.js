let quizBox = document.querySelector(".wrapper");
let startScreen = document.getElementById("start-screen")
let questionsScreen = document.getElementById("questions")
let questionTitle = document.getElementById("question-title")
var questionNumber = 0;
let questions = [
    {question1: "who", answers: ["1", "2", "3", "4"], correctAnswer: 2},
    {question2: "why", answers: ["1", "2", "3", "4"], correctAnswer: 2},
    {question3: "where", answers: ["1", "2", "3", "4"], correctAnswer: 2},
    {question4: "when", answers: ["1", "2", "3", "4"], correctAnswer: 2},
];
quizBox.addEventListener("click", function (event) {
    let element = event.target;
    if (element.matches("#start")) {
        startScreen.setAttribute("class", "hide")
        questionsScreen.setAttribute("class", "start")
    }

})




