let log = console.log.bind(document)
let quizBox = document.querySelector(".wrapper");
let startScreen = document.getElementById("start-screen")
let answers = document.getElementById("choices")
let endScreen = document.getElementById("end-screen")
let questionsScreen = document.getElementById("questions")
let questionTitle = document.getElementById("question-title")
let questionList = document.createElement("ol")
var questionNumber = 0;
let questions = [
    {question: "who", answers: ["1", "2", "3", "4"], correctAnswer: 2},
    {question: "why", answers: ["1", "2", "3", "4"], correctAnswer: 2},
    {question: "where", answers: ["1", "2", "3", "4"], correctAnswer: 2},
    {question: "when", answers: ["1", "2", "3", "4"], correctAnswer: 2},
];
// event listener checking if 'start' button was clicked
quizBox.addEventListener("click", function (quizStart) {
    let element = quizStart.target;
    if (element.matches("#start")) {
        //changing classes so that start screen hides and questions show up
        startScreen.setAttribute("class", "hide")
        questionsScreen.setAttribute("class", "start")
        //for loop to go through all the questions
        for (let i = 0; i < questions.length; i++) {
            questionTitle.textContent = questions[questionNumber].question
            answers.textContent = questions[questionNumber].answers
            log(questions[questionNumber].question)
            log(questionNumber)
            questionTitle.addEventListener("click", function(nextQuestion) {
                let answerSelected = nextQuestion.target;
                if (answerSelected.matches("#question-title"))
                questionsScreen.setAttribute("class", "hide")
                endScreen.setAttribute("class", "start")
            questionNumber++;
            log(questionNumber)
            })
        }
    }
})




